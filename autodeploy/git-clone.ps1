#Requires -RunAsAdministrator

param (
    [Parameter(Mandatory=$true)]
        [string]
        $GitRepoUrl
)

function Log-Date 
{
    ((get-date).ToUniversalTime()).ToString("yyyy-MM-dd HH:mm:ssZ")
}

# Current Directory is presumed to be the working directory
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

    Write-Output "$(Log-Date) Executing $ExecutablePath $Arguments"

    # Use Start-Process to obtain the exit code. But then we need to redirect stdout and stderr
    $psi = New-object System.Diagnostics.ProcessStartInfo 
    $psi.CreateNoWindow = $true 
    $psi.UseShellExecute = $false 
    $psi.RedirectStandardOutput = $true 
    $psi.RedirectStandardError = $true 
    $psi.FileName = $ExecutablePath
    $psi.WorkingDirectory = (Get-Location).path
    $psi.Arguments = $Arguments 
    $p = New-Object System.Diagnostics.Process 
    $p.StartInfo = $psi 
    [void]$p.Start()
    $output = $p.StandardOutput.ReadToEnd()     
    $errorText = $p.StandardError.ReadToEnd() 
    $p.WaitForExit() 
    $output    
    $errorText

	# Fail on error
	if ( $p.ExitCode -ne 0 ) {
       $ErrorMessage = "$ErrorText $($p.ExitCode)."
       Write-Error "$(Log-Date) $ErrorMessage"
    }     
}

###############################################################################
# Main Code
###############################################################################

$VerbosePreference = "Continue"

cmd /c exit 0    #Set $LASTEXITCODE

try {
    Write-Output ("$(Log-Date) Script Path = $($MyInvocation.MyCommand.Path)")
    $ScriptRoot = (Split-Path $MyInvocation.MyCommand.Path)
    $Root = (Split-Path (Split-Path $MyInvocation.MyCommand.Path))
    Write-Output ("$(Log-Date) Root Path = $Root")

    Set-Location $ScriptRoot
    .\PreDeploy.ps1

    Set-Location  $Root
    
    Execute-Process( "git") @("init") "Initialise git repo returned error code"
    Execute-Process( "git") @("remote", "add", "origin", "$GitRepoUrl") "git remote returned error code"
    Execute-Process( "git") @("fetch", "-q") "git fetch returned error code"
    Execute-Process( "git") @("checkout", "-f", "master") "git checkout returned error code"
    
    Set-Location $ScriptRoot
    .\PostDeploy.ps1

} catch {
    $e = $_.Exception
    $e | format-list -force
 
    Write-Output( "Configurationation failed" )
    Write-Output( "Raw LASTEXITCODE $LASTEXITCODE" )
    if ( ( -not [ string ]::IsNullOrWhiteSpace( $LASTEXITCODE ) ) -and ( $LASTEXITCODE -ne 0 ) )
    {
       $ExitCode = $LASTEXITCODE
       Write-Output( "ExitCode set to LASTEXITCODE $ExitCode" )
    } else {
       $ExitCode = $e.HResult
       Write-Output( "ExitCode set to HResult $ExitCode" )
    }
 
    if ( $ExitCode -eq $null -or $ExitCode -eq 0 )
    {
       $ExitCode = -1
       Write-Output( "ExitCode set to $ExitCode" )
    }
    Write-Output( "Final ExitCode $ExitCode" )
    cmd /c exit $ExitCode    #Set $LASTEXITCODE
    Write-Output( "Final LASTEXITCODE $LASTEXITCODE" )
    return
 }
 Write-Output( "Configuration succeeded" )
 cmd /c exit 0    #Set $LASTEXITCODE
 Write-Output( "LASTEXITCODE $LASTEXITCODE" )