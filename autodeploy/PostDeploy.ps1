"PostDeploy.ps1"

#Requires -RunAsAdministrator

# When this process is started as Admin (RunAs) the stdout and stderr cannot be redirected 
# back to the caller because they are essentially different users.
# So, if a log file is passed in, the caller is implying that redirection is broken so
# use the file instead, and RESTART this script using normal redirection.

if ($args.length -gt 0) {
    write-output "Log file is $($args[0])"
    $LogFile = $args[0]

    # Needs to be a current directory too
    if ($args.length -gt 1) {
        write-output "Working directory is $($args[1])"
        $WorkingDirectory = $args[1]
    
        Set-Location $WorkingDirectory

        Write-Output("Re-run script without the log file parameter but using redirection to the log file")
        & $MyInvocation.MyCommand.Path > $LogFile 2>&1
        return
    } else {
        Write-Error("Working Directory parameter missing")
        throw
    }
} else {
    Write-Output("Redirection presumed to already be setup")
}

Import-Module WebAdministration
Add-Type -AssemblyName System.Web

function Log-Date 
{
    ((get-date).ToUniversalTime()).ToString("yyyy-MM-dd HH:mm:ssZ")
}

function Execute-Process
{
    param (
        [Parameter(Mandatory=$true)]
            [string]
            $ExecutablePath,
    
        [Parameter(Mandatory=$true)]
            [String[]] 
            $Arguments,

        [Parameter(Mandatory=$true)]
            [String ]
            $ErrorText,

        [Parameter(Mandatory=$false)]
            [bool]
            $FatalError = $false
    )

    if ( !(Test-Path $ExecutablePath) )
    {
        Write-Output "$(Log-Date) $ExecutablePath does not exist"
        return
    }

    Write-Output "$(Log-Date) Executing $ExecutablePath $Arguments"

    # Use Start-Process to obtain the exit code. But then we need to redirect stdout and stderr
    $psi = New-object System.Diagnostics.ProcessStartInfo 
    $psi.CreateNoWindow = $true 
    $psi.UseShellExecute = $false 
    $psi.RedirectStandardOutput = $true 
    $psi.RedirectStandardError = $true 
    $psi.FileName = $ExecutablePath
    $psi.Arguments = $Arguments 
    $p = New-Object System.Diagnostics.Process 
    $p.StartInfo = $psi 
    [void]$p.Start()
    $output = $p.StandardOutput.ReadToEnd()     
    $errorOutput = $p.StandardError.ReadToEnd() 
    $p.WaitForExit() 
    $output    
    $errorOutput

    # Set $LASTERRORCODE
    cmd /c exit $p.ExitCode
    
	# Must continue on error so that everything that can be started is started.
	# Not all installations have everything installed anyway.
    if ( $p.ExitCode -ne 0 ) {
       $ErrorMessage = "$ErrorText $($p.ExitCode)."
       Write-Output "$(Log-Date) $ErrorMessage"
       if ( $FatalError ){
            throw
       }
    }     
}

###############################################################################
# Control-Related-WebSites
# Start/stop all web sites which use this 
###############################################################################
function Control-Related-WebSites
{
    param (
        [Parameter(Mandatory=$true)]
            [string]
            $Root,
            
            [Boolean]
            $Start = $true
    )    

    $SiteVirtualDirectories = @()
    $Sites = Get-ChildItem IIS:\Sites
    foreach($Site in $Sites) {
        $VirtualDirectories = Get-ChildItem "IIS:\Sites\$($Site.Name)" | Where-Object{$_.NodeType -match "virtualDirectory"}
        foreach($VirtualDirectory in $VirtualDirectories) {
            $SiteVirtualDirectories += @([pscustomobject]@{Site=$Site.Name;VirtualDirectory=$VirtualDirectory.Name;PhysicalPath=$VirtualDirectory.PhysicalPath; ApplicationPool=$Site.ApplicationPool})
        }
    }
    
    Out-String -InputObject $SiteVirtualDirectories | Write-Verbose
    
    $VirtualDirectoryPath = Join-Path $Root 'WebServer\IISPlugin\lansaweb64'
    foreach ($SiteVirtualDirectory in $SiteVirtualDirectories)
    {
        if ( $SiteVirtualDirectory.PhysicalPath -eq $VirtualDirectoryPath)
        {
            Write-Output "$(Log-Date) $SiteVirtualDirectory"
            Write-Output "$(Log-Date) Web Site = $($SiteVirtualDirectory.Site)"
            if ($Start) {
                Write-Output ("$(Log-Date) Starting web application pool $($SiteVirtualDirectory.ApplicationPool)")
                Start-WebAppPool -name $($SiteVirtualDirectory.ApplicationPool)
                Write-Output ("$(Log-Date) Starting web site $($SiteVirtualDirectory.Site)")
                Start-Website -name $($SiteVirtualDirectory.Site)
            } else {
                Write-Output ("$(Log-Date) Stopping web site $($SiteVirtualDirectory.Site)")
                Stop-Website -name $($SiteVirtualDirectory.Site)
                Write-Output ("$(Log-Date) Stopping web application pool $($SiteVirtualDirectory.ApplicationPool)")
                Stop-WebAppPool -name $($SiteVirtualDirectory.ApplicationPool)
                # Web Site stopping has not yet ever logged a wait state
                $WebSiteState = Get-WebsiteState -name $($SiteVirtualDirectory.Site)
                $Loop = 0
                while ( $WebSiteState.Value -ne 'Stopped') {
                    $Loop += 1
                    if ( $Loop -gt 10) {
                        throw
                    }                    
                    Write-Output("$(Log-Date) Waiting for web site to stop")
                    Start-Sleep -s 1
                    $WebSiteState = Get-WebsiteState -name $($SiteVirtualDirectory.Site)
                }      
                
                # App Pool has been logged taking 14 seconds to stop.
                # Hence using a large maximum of 60 seconds before an error is thrown
                $WebAppPoolState = Get-WebAppPoolState -name $($SiteVirtualDirectory.ApplicationPool)
                $Loop = 0
                while ( $WebAppPoolState.Value -ne 'Stopped') {
                    $Loop += 1
                    if ( $Loop -gt 60) {
                        throw
                    } 
                    Write-Output("Waiting for App Pool to stop - current state $($WebAppPoolState.Value)")
                    Start-Sleep -s 1
                    $WebAppPoolState = Get-WebAppPoolState -name $($SiteVirtualDirectory.ApplicationPool)
                }                
            }
        }
    }
}

###############################################################################
# Control-Related-Services
# Incomplete function.
###############################################################################
function Control-Related-Services
{
    param (
        [Parameter(Mandatory=$true)]
            [string]
            $Root,
            
            [Parameter(Mandatory=$true)]
            [string]
            $ServiceName,
            
            [Boolean]
            $Start = $true
    )    
    
    $IntegratorService = Get-WmiObject win32_service | Where-Object{$_.Name -like $ServiceName} | select-object Name, DisplayName, State, PathName
    Out-String -InputObject $IntegratorService | Write-Verbose
}

###############################################################################
# Main Code
###############################################################################

# $VerbosePreference = "Continue"

try {
    Write-Output ("$(Log-Date) Script Path = $($MyInvocation.MyCommand.Path)")
    $Root = (Split-Path (Split-Path $MyInvocation.MyCommand.Path))
    Write-Output ("$(Log-Date) Root Path = $Root")

    $ExecuteDir = Join-Path $Root 'x_win95\x_lansa\execute'
    
    if ( !(Test-Path $ExecuteDir -PathType Container)) {
        $ExecuteDir = Join-Path $Root 'x_win64\x_lansa\execute'
    }

    ###############################################################################
    Write-Output ("$(Log-Date) Stopping default application installation")
    ###############################################################################

    # Remove the line INST=MSI and any blank lines
    # With this line in when the web job is started e.g. a server module is executed, an installation is begun
    # for the APPL application. This is unnecessary if the application being deployed (in autodeploy\AutoPackageInstallParameters.txt)
    # is the same as APPL in x_lansa.pro. And if they are different, the installation ends in an error, though the web job continues
    # albeit slowly.

    $x_lansa_pro = (Join-Path $ExecuteDir '..\x_lansa.pro')
    $x_lansa_pro_old = "$($x_lansa_pro)_old"
    Copy-Item $x_lansa_pro $x_lansa_pro_old
    get-content $x_lansa_pro_old | Where-Object { $_ -ne 'INST=MSI' -and $_ -ne '' } | set-content $x_lansa_pro

    ###############################################################################
    Write-Output ("$(Log-Date) Installing LANSA tables and Web Pages")
    ###############################################################################


    $x_err = (Join-Path $ENV:TEMP 'x_err.log')
    if ( (Test-Path $x_err ) ) {
        # Remove-Item $x_err -Force -ErrorAction SilentlyContinue
        $measure_before = Get-Content $x_err | Measure-Object -Character -Line -Word
    } else {
        $measure_before = "" | Measure-Object -Character -Line -Word   
    }

    # DEVF=4096 forces Alternate Name reuse so that tables with the same name in the initial MSI do not cause fatal errors to occur, like xEmployee
    $Arguments = @("PROC=*INSTALL", "QUET=Y", "MODE=B", "BPQS=Y", "LOCK=NO", "DEVF=4096")

    $Auto = @(Get-Content (Join-Path $Root 'autodeploy\AutoPackageInstallParameters.txt') )
    $Admin = @(Get-Content (Join-Path $Root 'autodeployadmin\AdminPackageInstallParameters.txt') )
    $Override = @(Get-Content (Join-Path $Root 'autodeploy\OverridePackageInstallParameters.txt') )
    foreach ( $line in $Auto ){
        $line = $line.Trim()
        if (  $line.Length -gt 0) {
            $Arguments += $line
        }
    }
 
    foreach ( $line in $Override ){
        $line = $line.Trim()
        if (  $line.Length -gt 0) {
            $Arguments += $line
        }
    }

    # Admin params must not be overriden
    foreach ( $line in $Admin ){
        $line = $line.Trim()
        if (  $line.Length -gt 0) {
            $Arguments += $line
        }
    }

    Write-Output ("$(Log-Date) Arguments = $Arguments")

    Execute-Process (Join-Path $ExecuteDir 'x_run.exe') $Arguments "Package Install returned error code" -FatalError $true

    if ( (Test-Path $x_err ) ) {
        $measure_after = Get-Content $x_err | Measure-Object -Character -Line -Word
        Write-Output ("$(Log-Date) x_err.log size before Package Install $($Measure_before.Lines) lines. Now its $($Measure_after.Lines) lines")
        if ( $Measure_after.Lines -gt ($Measure_before.Lines + 3 ) ) {
            Write-Output ("$(Log-Date) *** begin x_err.log")
            Out-File $x_err
            Write-Output ("$(Log-Date) *** end x_err.log")
            throw "x_err.log contains extra text after Package Install"
        }
    }

    ###############################################################################
    Write-Output ("$(Log-Date) Starting listener and web site")
    ###############################################################################
    Execute-Process (Join-Path $Root 'integrator\jsmadmin\strjsm.exe') @("-sstart") "Starting JSM returned error code"
    Execute-Process (Join-Path $Root 'connect64\lcolist.exe') @("-sstart") "Starting Listener returned error code"
    Control-Related-WebSites -Root $Root -Start $true
    
    # Check if Listener has started. Check every 5s. If not started within 20s, try to restart the listener.
    # Restart 3 times, after that fail
    Execute-Process (Join-Path $Root 'connect64\lcolist.exe') @("-q") -ErrorText "Listener startup check returned "
    Write-Output( "LASTEXITCODE = $LASTEXITCODE")
    $Loop = 0
    $ListenerRestart = 0
    while( ($LASTEXITCODE -band 8) -ne 8 ) {
        Write-Output ("$(Log-Date) Waiting for Listener to be started")
        if ( $Loop -ge 3 ) {
            $ListenerRestart += 1
            if ( $ListenerRestart -gt 3) {
                Write-Output( "Error: Listener cannot be started")
                throw
            }
            Execute-Process (Join-Path $Root 'connect64\lcolist.exe') @("-sstart") "Starting Listener returned error code"
        }
        Start-Sleep 5
        $loop += 1
        Execute-Process (Join-Path $Root 'connect64\lcolist.exe') @("-q") "Listener startup check returned "
    }
    Write-Output( "Listener started")
   
    cmd /c exit 0
} catch {
    throw
} finally {
    Write-Output( "$(Log-Date) Bring the Application Server back online")
    
    $webserver = Join-Path $Root 'run\conf\webserver.conf'
    $webserver_saved = Join-Path $Root 'run\conf\webserver.conf.saved'
    Remove-Item $webserver -ErrorAction SilentlyContinue
    if ( Test-Path $webserver_saved ) {
        Copy-Item $webserver_saved -Destination $webserver -Force
    } 

    $EncodedPath = $($([System.Web.HttpUtility]::UrlPathEncode($Root)) -replace "\\","%5C").ToUpper()
    Write-Output ("$(Log-Date) Encoded Path $EncodedPath")

    New-ItemProperty -Path HKLM:\Software\LANSA\$EncodedPath  -Name 'Deploying' -Value 0 -PropertyType DWORD -Force | Out-Null
    
    $IIsReset = (Get-ItemProperty -Path HKLM:\Software\LANSA\$EncodedPath  -Name 'PluginFullyInstalled' -ErrorAction SilentlyContinue).PluginFullyInstalled
    if ( $IIsReset -eq 1) {
        Write-Output ("$(Log-Date) iisreset alweays required")
        iisreset
    } else {
        Write-Output ("$(Log-Date) Check if vlweb.dat has been changed. If so an iisreset is required")
        $VLWebDatFile = Join-Path $Root 'x_win95\x_lansa\web\vl\vlweb.dat'
        if ( !(Test-Path $VLWebDatFile -PathType Leaf)) {
            Write-Output ("$(Log-Date) $VLWebDatFile does not exist. Presuming 64-bit vl install")    
            $VLWebDatFile = Join-Path $Root 'x_win64\x_lansa\web\vl\vlweb.dat'
        }
        Write-Output ("$(Log-Date) Using $VLWebDatFile")
        if ( (Test-Path $VLWebDatFile -PathType Leaf)) {
            $TargetVLWebDatFile =  Join-Path $ENV:TEMP 'vlweb.dat'

            if ( (Test-Path $TargetVLWebDatFile -PathType Leaf)) {
                if ( (Get-FileHash $VLWebDatFile).hash  -ne (Get-FileHash $TargetVLWebDatFile).hash) {
                    Write-Output ("$(Log-Date) vlweb.dat has changed. Calling iisreset")
                    iisreset
                } else {
                    Write-Output ("$(Log-Date) vlweb.dat has not changed.")
                }
            } else {
                Write-Output ("$(Log-Date) $ENV:TEMP\vlweb.dat does not exist.")    
            }
        } else {
            Write-Output ("$(Log-Date) $VLWebDatFile does not exist. This should never occur.")
        }
    }
}