"PostDeploy.ps1" | Format-List | Out-String

#Requires -RunAsAdministrator

# When this process is started as Admin (RunAs) the stdout and stderr cannot be redirected
# back to the caller because they are essentially different users.
# So, if a log file is passed in, the caller is implying that redirection is broken so
# use the file instead, and RESTART this script using normal redirection.

if ($args.length -gt 0) {
    Write-Host "Log file is $($args[0])"
    $LogFile = $args[0]

    # Needs to be a current directory too
    if ($args.length -gt 1) {
        Write-Host "Working directory is $($args[1])"
        $WorkingDirectory = $args[1]

        Write-Host( Set-Location $WorkingDirectory | Format-List | Out-String )

        Write-Host( "Re-run script without the log file parameter but using redirection to the log file")
        Write-Host( & $MyInvocation.MyCommand.Path > $LogFile *>&1 | Format-List | Out-String )
        return
    } else {
        Write-Error("Working Directory parameter missing")
        throw
    }
} else {
    Write-Host("Redirection presumed to already be setup")
}

Import-Module WebAdministration *> $null
Add-Type -AssemblyName System.Web *> $null

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
        Write-Host "$(Log-Date) $ExecutablePath does not exist"
        return
    }

    Write-Host "$(Log-Date) Executing $ExecutablePath $Arguments"

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
    Write-Host( $output  | Format-List | Out-String )
    Write-Host( $errorOutput  | Format-List | Out-String )

    # Set $LASTERRORCODE
    Write-Host( cmd /c exit $p.ExitCode  | Format-List | Out-String )

	# Must continue on error so that everything that can be started is started.
	# Not all installations have everything installed anyway.
    if ( $p.ExitCode -ne 0 ) {
       $ErrorMessage = "$ErrorText $($p.ExitCode)."
       Write-Host "$(Log-Date) $ErrorMessage"
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
            Write-Host "$(Log-Date) $SiteVirtualDirectory"
            Write-Host "$(Log-Date) Web Site = $($SiteVirtualDirectory.Site)"
            if ($Start) {
                Write-Host ("$(Log-Date) Starting web application pool $($SiteVirtualDirectory.ApplicationPool)")
                Write-Host ( Start-WebAppPool -name $($SiteVirtualDirectory.ApplicationPool)  | Format-List | Out-String )
                Write-Host ("$(Log-Date) Starting web site $($SiteVirtualDirectory.Site)")
                Write-Host ( Start-Website -name $($SiteVirtualDirectory.Site) | Format-List | Out-String )
            } else {
                Write-Host ("$(Log-Date) Stopping web site $($SiteVirtualDirectory.Site)")
                Write-Host( Stop-Website -name $($SiteVirtualDirectory.Site)  | Format-List | Out-String )
                Write-Host ("$(Log-Date) Stopping web application pool $($SiteVirtualDirectory.ApplicationPool)")
                Write-Host( Stop-WebAppPool -name $($SiteVirtualDirectory.ApplicationPool)  | Format-List | Out-String )
                # Web Site stopping has not yet ever logged a wait state
                $WebSiteState = Get-WebsiteState -name $($SiteVirtualDirectory.Site)
                $Loop = 0
                while ( $WebSiteState.Value -ne 'Stopped') {
                    $Loop += 1
                    if ( $Loop -gt 10) {
                        throw
                    }
                    Write-Host("$(Log-Date) Waiting for web site to stop")
                    Write-Host( Start-Sleep -s 1  | Format-List | Out-String )
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
                    Write-Host("Waiting for App Pool to stop - current state $($WebAppPoolState.Value)")
                    Write-Host( Start-Sleep -s 1  | Format-List | Out-String )
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

# Provide a common routine so its easily modified.
# It will need to be improved as more understanding arises
# Using iisreset defaults to /stop /start /force
# This frequentkly causes automatic kills to occur - 3204 in the system event log.
# What follows a 3204 is always that other services get killed too.
# occassionally iis is not restarted (last time there were 84 resets (42 iterations) before this occurred)

function Iis-Reset {
    Write-Host( "$(Log-Date) iisreset /stop /noforce..." )
    iisreset /stop /noforce
    if ( $LASTEXITCODE -ne 0 ) {
        Write-Host( "$(Log-Date) iisreset /stop /noforce resulted in exit code $LASTEXITCODE" )

        Write-Host( "$(Log-Date) iisreset /kill..." )
        iisreset /kill
        if ( $LASTEXITCODE -ne 0 ) {
            Write-Host( "$(Log-Date) iisreset /kill resulted in exit code $LASTEXITCODE" )
            iisreset /kill

            Write-Host( "$(Log-Date) Pause 10s to allow IIS to 'recover'..." )
            Start-Sleep 10
        }
    }

    Write-Host( "$(Log-Date) iisreset /start..." )
    iisreset /start
    if ( $LASTEXITCODE -ne 0 ) {
        Write-Host( "$(Log-Date) iisreset /start resulted in exit code $LASTEXITCODE" )
        Write-Host( "$(Log-Date) iisreset /start again..." )
        iisreset /start
        if ( $LASTEXITCODE -ne 0 ) {
            Write-Host( "$(Log-Date) iisreset /start resulted in exit code $LASTEXITCODE" )
        }
    }
}

###############################################################################
# Main Code
###############################################################################

# $VerbosePreference = "Continue"

try {
    Write-Host ("$(Log-Date) Script Path = $($MyInvocation.MyCommand.Path)")
    $Root = (Split-Path (Split-Path $MyInvocation.MyCommand.Path))
    Write-Host ("$(Log-Date) Root Path = $Root")

    $ExecuteDir = Join-Path $Root 'x_win95\x_lansa\execute'

    if ( !(Test-Path $ExecuteDir -PathType Container)) {
        $ExecuteDir = Join-Path $Root 'x_win64\x_lansa\execute'
    }

    ###############################################################################
    Write-Host ("$(Log-Date) Stopping default application installation")
    ###############################################################################

    # Remove the line INST=MSI and any blank lines
    # With this line in when the web job is started e.g. a server module is executed, an installation is begun
    # for the APPL application. This is unnecessary if the application being deployed (in autodeploy\AutoPackageInstallParameters.txt)
    # is the same as APPL in x_lansa.pro. And if they are different, the installation ends in an error, though the web job continues
    # albeit slowly.

    $x_lansa_pro = (Join-Path $ExecuteDir '..\x_lansa.pro')
    $x_lansa_pro_old = "$($x_lansa_pro)_old"
    Write-Host( Copy-Item $x_lansa_pro $x_lansa_pro_old | Format-List | Out-String )
    get-content $x_lansa_pro_old | Where-Object { $_ -ne 'INST=MSI' -and $_ -ne '' } | set-content $x_lansa_pro

    ###############################################################################
    Write-Host ("$(Log-Date) Installing LANSA tables and Web Pages")
    ###############################################################################


    $x_err = (Join-Path $ENV:TEMP 'x_err.log')
    if ( (Test-Path $x_err ) ) {
        # Remove-Item $x_err -Force -ErrorAction SilentlyContinue
        $measure_before = Get-Content $x_err | Measure-Object -Character -Line -Word
    } else {
        $measure_before = "" | Measure-Object -Character -Line -Word
    }

    # DEVF=4096 forces Alternate Name reuse so that tables with the same name in the initial MSI do not cause fatal errors to occur, like xEmployee
    $Arguments = @("PROC=*INSTALL", "INST=MSI", "QUET=Y", "MODE=B", "BPQS=Y", "LOCK=NO", "DEVF=4096")

    # Must have AutoPackageInstallParameters.txt as it contains the APPL setting to use
    $Auto = @(Get-Content (Join-Path $Root 'autodeploy\AutoPackageInstallParameters.txt') -ErrorAction Stop)
    $Admin = @(Get-Content (Join-Path $Root 'autodeployadmin\AdminPackageInstallParameters.txt') -ErrorAction SilentlyContinue)
    $Override = @(Get-Content (Join-Path $Root 'autodeploy\OverridePackageInstallParameters.txt') -ErrorAction SilentlyContinue)
    foreach ( $line in $Auto ){
        $line | Write-Host
        $line = $line.Trim()
        if (  $line.Length -gt 0) {
            $Arguments += $line
        }
    }

    foreach ( $line in $Override ){
        $line | Write-Host
        $line = $line.Trim()
        if (  $line.Length -gt 0) {
            $Arguments += $line
        }
    }

    # Admin params must not be overriden, so add them last
    foreach ( $line in $Admin ){
        $line | Write-Host
        $line = $line.Trim()
        if (  $line.Length -gt 0) {
            $Arguments += $line
        }
    }

    Write-Host ("$(Log-Date) Arguments = $Arguments")

    Execute-Process (Join-Path $ExecuteDir 'x_run.exe') $Arguments "Package Install returned error code" -FatalError $true

    if ( (Test-Path $x_err ) ) {
        $measure_after = Get-Content $x_err | Measure-Object -Character -Line -Word
        Write-Host ("$(Log-Date) x_err.log size before Package Install $($Measure_before.Lines) lines. Now its $($Measure_after.Lines) lines")
        if ( $Measure_after.Lines -gt ($Measure_before.Lines + 3 ) ) {
            Write-Host ("$(Log-Date) *** begin x_err.log")
            Get-Content $x_err
            Write-Host ("$(Log-Date) *** end x_err.log")
            throw "x_err.log contains extra text after Package Install"
        }
    }

    Write-Host ("$(Log-Date) Deployment Successful")
    cmd /c exit 0
} catch {
    Write-Host ("$(Log-Date) Deployment Failed")
    Write-Host ("$(Log-Date) Note that its common AND NORMAL for AutoPackageInstallParameters.txt to be missing for the Setup Inital Environment commit. If thats the exception, it may be safely ignored because its fine for that commit to not be 'installed'" )
    $_
    cmd /c exit 1

    throw
} finally {
    ###############################################################################
    Write-Host ("$(Log-Date) Starting listener and web site")
    ###############################################################################
    Execute-Process (Join-Path $Root 'integrator\jsmadmin\strjsm.exe') @("-sstart") "Starting JSM returned error code"
    Execute-Process (Join-Path $Root 'connect64\lcolist.exe') @("-sstart") "Starting Listener returned error code"
    Control-Related-WebSites -Root $Root -Start $true

    # Check if Listener has started. Check every 5s. If not started within 20s, try to restart the listener.
    # Restart 3 times, after that fail
    Execute-Process (Join-Path $Root 'connect64\lcolist.exe') @("-q") -ErrorText "Listener startup check returned "
    Write-Host( "LASTEXITCODE = $LASTEXITCODE")
    $Loop = 0
    $ListenerRestart = 0
    while( ($LASTEXITCODE -band 8) -ne 8 ) {
        Write-Host ("$(Log-Date) Waiting for Listener to be started")
        if ( $Loop -ge 3 ) {
            $ListenerRestart += 1
            if ( $ListenerRestart -gt 3) {
                Write-Host( "Error: Listener cannot be started")
                throw
            }
            Execute-Process (Join-Path $Root 'connect64\lcolist.exe') @("-sstart") "Starting Listener returned error code"
        }
        Write-Host( Start-Sleep 5 | Format-List | Out-String )
        $loop += 1
        Execute-Process (Join-Path $Root 'connect64\lcolist.exe') @("-q") "Listener startup check returned "
    }
    Write-Host( "Listener started")

    Write-Host( "$(Log-Date) Bring the Application Server back online")

    $webserver = Join-Path $Root 'run\conf\webserver.conf'
    $webserver_saved = Join-Path $Root 'run\conf\webserver.conf.saved'
    if ( Test-Path $webserver_saved ) {
        Write-Host( "$(Log-Date) Put the existing webserver.conf back" )
        Get-Content $webserver_saved > $webserver
    } else {
        Write-Host( "$(Log-Date) Use default filters in webserver.conf" )
        Write-Output '{"use-default":true}' > $webserver
    }

    $EncodedPath = $($([System.Web.HttpUtility]::UrlPathEncode($Root)) -replace "\\","%5C").ToUpper()
    Write-Host ("$(Log-Date) Encoded Path $EncodedPath")

    New-ItemProperty -Path HKLM:\Software\LANSA\$EncodedPath  -Name 'Deploying' -Value 0 -PropertyType DWORD -Force *> $null

    $IIsReset = (Get-ItemProperty -Path HKLM:\Software\LANSA\$EncodedPath  -Name 'PluginFullyInstalled' -ErrorAction SilentlyContinue).PluginFullyInstalled
    if ( $IIsReset -eq 1) {
        Write-Host ("$(Log-Date) iisreset always required")
        iis-reset | Out-Default | Write-Host
    } else {
        Write-Host ("$(Log-Date) Check if vlweb.dat has been changed. If so an iisreset is required")
        $VLWebDatFile = Join-Path $Root 'x_win95\x_lansa\web\vl\vlweb.dat'
        if ( !(Test-Path $VLWebDatFile -PathType Leaf)) {
            Write-Host ("$(Log-Date) $VLWebDatFile does not exist. Presuming 64-bit vl install")
            $VLWebDatFile = Join-Path $Root 'x_win64\x_lansa\web\vl\vlweb.dat'
        }
        Write-Host ("$(Log-Date) Using $VLWebDatFile")
        if ( (Test-Path $VLWebDatFile -PathType Leaf)) {
            $TargetVLWebDatFile =  Join-Path $ENV:TEMP 'vlweb.dat'

            Write-Host( "$(Log-Date) $TargetVLWebDatFile previous contents...")
            Get-Content -Path $TargetVLWebDatFile | Out-Default | Write-Host
            Write-Host( "$(Log-Date) $VLWebDatFile new contents...")
            Get-Content -Path $VLWebDatFile | Out-Default | Write-Host

            if ( (Test-Path $TargetVLWebDatFile -PathType Leaf)) {
                if ( (Get-FileHash $VLWebDatFile).hash  -ne (Get-FileHash $TargetVLWebDatFile).hash) {
                    Write-Host ("$(Log-Date) vlweb.dat has changed. Calling iisreset")
                    iis-reset | Out-Default | Write-Host
                } else {
                    Write-Host ("$(Log-Date) vlweb.dat has not changed.")
                }
            } else {
                Write-Host ("$(Log-Date) $ENV:TEMP\vlweb.dat does not exist.")
            }
        } else {
            Write-Host ("$(Log-Date) $VLWebDatFile does not exist. This should never occur.")
        }
    }
}