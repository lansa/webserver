"PreDeploy.ps1"

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

        Set-Location $WorkingDirectory

        Write-Host("Re-run script without the log file parameter but using redirection to the log file")
        & $MyInvocation.MyCommand.Path > $LogFile 2>&1
        return
    } else {
        Write-Error("Working Directory parameter missing")
        throw
    }
} else {
    Write-Host("Redirection presumed to already be setup")
}

Import-Module WebAdministration | Out-Null
Add-Type -AssemblyName System.Web  | Out-Null

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
            $ErrorText
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
    $errorText = $p.StandardError.ReadToEnd()
    $p.WaitForExit()
    $output | Out-Default | Write-Host
    $errorText | Out-Default | Write-Host

	# Must continue on error so that everything that can be stopped is stopped.
	# Not all installations have everything running anyway.
    if ( $p.ExitCode -ne 0 ) {
       $ErrorMessage = "$ErrorText $($p.ExitCode)."
       Write-Host "$(Log-Date) $ErrorMessage"
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
                Start-WebAppPool -name $($SiteVirtualDirectory.ApplicationPool) | Out-Default | Write-Host
                Write-Host ("$(Log-Date) Starting web site $($SiteVirtualDirectory.Site)")
                Start-Website -name $($SiteVirtualDirectory.Site) | Out-Default | Write-Host
            } else {
                Write-Host ("$(Log-Date) Stopping web site $($SiteVirtualDirectory.Site)")
                Stop-Website -name $($SiteVirtualDirectory.Site)  -ErrorAction SilentlyContinue | Out-Default | Write-Host
                Write-Host ("$(Log-Date) Stopping web application pool $($SiteVirtualDirectory.ApplicationPool)")
                Stop-WebAppPool -name $($SiteVirtualDirectory.ApplicationPool) -ErrorAction SilentlyContinue | Out-Default | Write-Host

                # Web Site stopping has not yet ever logged a wait state
                $WebSiteState = Get-WebsiteState -name $($SiteVirtualDirectory.Site)
                $Loop = 0
                while ( $WebSiteState.Value -ne 'Stopped') {
                    $Loop += 1
                    if ( $Loop -gt 10) {
                        throw "Web site $($SiteVirtualDirectory.Site) could not be stopped"
                    }
                    Write-Host("$(Log-Date) Waiting for web site to stop")
                    Start-Sleep -s 2 | Out-Default | Write-Host
                    $WebSiteState = Get-WebsiteState -name $($SiteVirtualDirectory.Site)
                }

                # App Pool has been logged taking 14 seconds to stop.
                # Hence using a large maximum of 60 seconds before an error is thrown
                $WebAppPoolState = Get-WebAppPoolState -name $($SiteVirtualDirectory.ApplicationPool)
                $Loop = 0
                while ( $WebAppPoolState.Value -ne 'Stopped') {
                    $Loop += 1
                    if ( $Loop -gt 60) {
                        throw "App Pool $($SiteVirtualDirectory.ApplicationPool) could not be stopped"
                    }
                    Write-Host("Waiting for App Pool to stop - current state $($WebAppPoolState.Value)")
                    Start-Sleep -s 2 | Out-Default | Write-Host
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
    Write-Host ("$(Log-Date) Script Path = $($MyInvocation.MyCommand.Path)")
    $Root = (Split-Path (Split-Path $MyInvocation.MyCommand.Path))
    Write-Host ("$(Log-Date) Root Path = $Root")

    $ExecuteDir = Join-Path $Root 'x_win95\x_lansa\execute'

    if ( !(Test-Path $ExecuteDir -PathType Container)) {
        $ExecuteDir = Join-Path $Root 'x_win64\x_lansa\execute'
    }

    $EncodedPath = $($([System.Web.HttpUtility]::UrlPathEncode($Root)) -replace "\\","%5C").ToUpper()
    New-ItemProperty -Path HKLM:\Software\LANSA\$EncodedPath  -Name 'Deploying' -Value 1 -PropertyType DWORD -Force | Out-Null

    Write-Host( "$(Log-Date) Take Application Server offline")

    $webserver = Join-Path $Root 'run\conf\webserver.conf'
    $webserver_saved = Join-Path $Root 'run\conf\webserver.conf.saved'

    Remove-Item $webserver_saved -ErrorAction SilentlyContinue | Out-Default | Write-Host

    $NoFilters = '{}'
    if ( Test-Path $webserver ) {
        Write-Host ("$(Log-Date) $webserver exists...")
        If (Get-Content $webserver | Select-String -Pattern $NoFilters) {
            Write-Host ("$(Log-Date) but it contains 0 filters. This is the state we use below to purposely remove the filters so that no transactions can occur during deployment. So, its presumed to be created by this script and thus we can delete it now because it should not be here. See CCS 161986...")
        } else {
            Write-Host ("$(Log-Date) and it contains filters, so save it...")

            Copy-Item -Path $webserver -Destination $webserver_saved | Out-Default | Write-Host
        }
    }

    # This removes all the filters from the running iisplugin, so that no txns can occur during deployment
    $NoFilters | Set-Content -path $webserver

    Write-Host( "$(Log-Date) Wait for any current transactions to complete")
    Start-Sleep 10 | Out-Default | Write-Host

    ###############################################################################
    Write-Host ("$(Log-Date) Stopping processes running in this installation")
    ###############################################################################
    Execute-Process (Join-Path $ExecuteDir 'w3_p2200.exe') @("*FORINSTALL") "Stopping Web Jobs returned error code"
    Execute-Process (Join-Path $Root 'connect64\lcolist.exe') @("-sstop") "Stopping Listener returned error code"
    Execute-Process (Join-Path $Root 'integrator\jsmadmin\strjsm.exe') @("-sstop") "Stopping JSM returned error code"
    Control-Related-WebSites -Root $Root -Start $false

    #
    # Check if Listener has stopped. Check every 0.5s. If not stopped within 20s fail
    #
    Execute-Process (Join-Path $Root 'connect64\lcolist.exe') @("-q") -ErrorText "Listener stop check returned "
    Write-Host( "LASTEXITCODE = $LASTEXITCODE")
    $Loop = 0
    while( ($LASTEXITCODE -band 8) -ne 0 ) {
        Write-Host ("$(Log-Date) Waiting for Listener to indicate it has stopped $loop")
        if ( $Loop -ge 40 ) {
            throw "Listener could not be stopped"
        }
        Start-Sleep -Milliseconds 500 | Out-Default | Write-Host
        $loop += 1
        Execute-Process (Join-Path $Root 'connect64\lcolist.exe') @("-q") "Listener stop check returned "
    }
    Write-Host( "Listener has really stopped")

    # Terminate x_run.exe and lcoadm32.exe processes and any other running processes installed into this LANSA configuration

    $Processes = @(Get-Process | Where-Object {$_.Path -like "$Root\*" })
    foreach ($process in $processes ) {
        Write-Host("$(Log-Date) Stopping $($Process.ProcessName)")
        Stop-Process $process.id -Force | Out-Default | Write-Host
    }

    # Wait for processes to end
    $Processes = @(Get-Process | Where-Object {$_.Path -like "$Root\*" })
    $Loop = 0
    while ($processes.Count -gt 0 ) {
        $Loop += 1
        if ( $Loop -gt 10) {
            throw "Process $($Processes[0].ProcessName) could not be stopped"
        }
        Write-Host("Waiting for $($Processes[0].ProcessName)")
        # Wait 1 second
        Start-Sleep -s 1 | Out-Default | Write-Host
        $Processes = @(Get-Process | Where-Object {$_.Path -like "$Root\*" })
    }

    # Check if the Plugin is installed. If so, wait at least 7 seconds, here 20 seconds to make sure its stopped
    # Allow web plugin to stop completely otherwise lansaweb.dll and lcomgr32.dll are still in use
    # Only effects deployments in which the IIS plugin is installed, of course.
    # For PaaS its just the Webserver. The Apps do not have it installed.
    # $PluginPath = Join-Path $Root 'WebServer\IISPlugin\lansaweb64\lansaweb.dll'
    # if ( (test-path $PluginPath)) {
    #     Write-Host ("$(Log-Date) Waiting 20 seconds for Plugin to stop")
    #     Start-Sleep -s 20
    # }

    Write-Host ("$(Log-Date) Show current value of vlweb.dat")
    $VLWebDatFile = Join-Path $Root 'x_win95\x_lansa\web\vl\vlweb.dat'
    if ( !(Test-Path $VLWebDatFile -PathType Leaf)) {
        $VLWebDatFile = Join-Path $Root 'x_win64\x_lansa\web\vl\vlweb.dat'
    }
    Write-Host( "$(Log-Date) $VLWebDatFile contents...")
    Get-Content -Path $VLWebDatFile | Out-Default | Write-Host
    # Saving the current file is now done by GitDeployHub because it performs a pull before running predeploy.ps1 - in order to update pre-deploy.ps1!
    # Copy-Item -Path $VLWebDatFile -Destination $ENV:TEMP -Force | Out-Default | Write-Host
} catch {
    Write-Host( "$(Log-Date) Fatal: Bring the Application Server back online")

    $webserver = Join-Path $Root 'run\conf\webserver.conf'
    $webserver_saved = Join-Path $Root 'run\conf\webserver.conf.saved'
    Remove-Item $webserver -ErrorAction SilentlyContinue | Write-Host
    if ( Test-Path $webserver_saved ) {
        Copy-Item $webserver_saved -Destination $webserver -Force | Out-Default| Write-Host
    }
    throw
}