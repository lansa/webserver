<#
.SYNOPSIS

Clone a git repo presuming the directory already exists, and thus git init, git remote add, git fetch and git checkout
need to be run in place of git clone.

Check if the git repo exists, and if so delete it.

The script presumes that nothing is running in the directories. Its the responsibility of the caller to call it at the right time.
No files will have been updated by the deferred custom actions yet.
In the MSI thats just after Windows Installer has put all the files in place. That is, its an extension of putting the files in place.

.EXAMPLE

#>
param (
    [Parameter(Mandatory=$true)]
        [string]
        $GitRepoPath,
    [Parameter(Mandatory=$true)]
        [string]
        $GitRepoUrl,
    [Parameter(Mandatory=$false)]
        [string]
        $GitRepoBranch = 'master'
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

    Write-Host "$(Log-Date) Executing $ExecutablePath $Arguments"

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
    $output    | Write-Host
    $errorText | Write-Host

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

cmd /c exit 0 | Write-Host    #Set $LASTEXITCODE

try {
    #Requires -RunAsAdministrator

    Write-Host ("$(Log-Date) Script Path = $($MyInvocation.MyCommand.Path)")
    $ScriptRoot = (Split-Path $MyInvocation.MyCommand.Path)

    if ( -not ([Environment]::Is64BitProcess) ) {
        throw "Powershell is 32 bit. This script requires Powershell 64 bit"
    } else {
       Write-Host ("$(Log-Date) Powershell 64 bit")
    }

    Write-Host ("$(Log-Date) Root Path = $GitRepoPath")
    If ( -not (Test-Path -Path $GitRepoPath)) {
        throw "Root path $GitRepoPath does not exist"
    }

    Set-Location  $GitRepoPath

    $gitdir = Join-Path -Path $GitRepoPath -ChildPath '.git'
    If ( Test-Path -Path $gitdir) {
        Write-Warning "$(Log-Date) $gitdir is a git repository. Deleting it." | Write-Host
        Remove-Item $gitdir -force -recurse | Write-Host
    }
    Execute-Process( "git") @("init") "Initialise git repo returned error code"
    Execute-Process( "git") @("remote", "add", "origin", "$GitRepoUrl") "git remote returned error code"
    Execute-Process( "git") @("fetch", "-q") "git fetch returned error code"
    Execute-Process( "git") @("checkout", "-f", "$GitRepoBranch") "git checkout returned error code"
} catch {
    $_ | Write-Host
    $e = $_.Exception
    $e | format-list -force | Write-Host

    Write-Host( "Configurationation failed" )
    Write-Host( "Raw LASTEXITCODE $LASTEXITCODE" )
    if ( ( -not [ string ]::IsNullOrWhiteSpace( $LASTEXITCODE ) ) -and ( $LASTEXITCODE -ne 0 ) )
    {
       $ExitCode = $LASTEXITCODE
       Write-Host( "ExitCode set to LASTEXITCODE $ExitCode" )
    } else {
       $ExitCode = $e.HResult
       Write-Host( "ExitCode set to HResult $ExitCode" )
    }

    if ( $null -eq $ExitCode -or $ExitCode -eq 0 )
    {
       $ExitCode = -1
       Write-Host( "ExitCode set to $ExitCode" )
    }
    Write-Host( "Final ExitCode $ExitCode" )
    cmd /c exit $ExitCode | Write-Host    #Set $LASTEXITCODE
    Write-Host( "Final LASTEXITCODE $LASTEXITCODE" )
    return
 }
 Write-Host( "Configuration succeeded" )
 cmd /c exit 0  | Write-Host   #Set $LASTEXITCODE
 Write-Host( "LASTEXITCODE $LASTEXITCODE" )