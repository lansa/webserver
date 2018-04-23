<#
.SYNOPSIS

Install a LANSA MSI.
Creates a SQL Server Database then installs the MSI

# N.B. It is vital that the user id and password supplied pass the password rules. 
E.g. The password is sufficiently complex and the userid is not duplicated in the password. 
i.e. UID=PCXUSER and PWD=PCXUSER@#$%^&* is invalid as the password starts with the entire user id "PCXUSER".

.EXAMPLE

1. Upload msi to c:\lansa\MyApp.msi (Copy file from local machine. Paste into RDP session)
2. Start SQL Server Service and set to auto start. Change SQL Server to accept SQL Server Authentication
3. Create lansa database
4. Add user lansa with password 'Pcxuser@122' to SQL Server as Sysadmin and to the lansa database as dbowner
5. Change server_name to the machine name in this command line and run it:
C:\\LANSA\\scripts\\install-lansa-msi.ps1 -server_name "IP-AC1F2F2A" -dbname "lansa" -dbuser "lansa" -dbpassword "Pcxuser@122" -webuser "pcxuser" -webpassword "Lansa@122"

#>

param(
[String]$server_name,
[String]$dbname,
[String]$dbuser,
[String]$dbpassword,
[String]$webuser = 'PCXUSER2',
[String]$webpassword = 'PCXUSER@122',
[String]$f32bit = 'true',
[String]$SUDB = '1',
[String]$UPGD = 'false',
[String]$maxconnections = '20',
[String]$wait,
[String]$DBUT='MSSQLS',
[String]$trace = 'N',
[String]$traceSettings = "ITRO:Y ITRL:4 ITRM:9999999999",
[String]$installer_file,
[String]$install_log,
[String]$trusted
)

function Log-Date 
{
    ((get-date)).ToString("yyyy-MM-dd HH:mm:ss")
}

# Load functions in other source files
$ScriptPath = (Split-Path $MyInvocation.MyCommand.Path)
. "$($ScriptPath)\dot-DBTools.ps1"

# Put first output on a new line in log file
Write-Output ("`r`n")

$DebugPreference = "SilentlyContinue"
$VerbosePreference = "Continue"

Write-Verbose ("Server_name = $server_name")
Write-Verbose ("dbname = $dbname")
Write-Verbose ("dbuser = $dbuser")
Write-Verbose ("webuser = $webuser")
Write-Verbose ("32bit = $f32bit")
Write-Verbose ("SUDB = $SUDB")
Write-Verbose ("UPGD = $UPGD")
Write-Verbose ("DBUT = $DBUT")

try
{
    $ExitCode = 0
    if ( $f32bit -eq 'true' -or $f32bit -eq '1')
    {
        $f32bit_bool = $true
    }
    else
    {
        $f32bit_bool = $false
    }

    if ( $UPGD -eq 'true' -or $UPGD -eq '1')
    {
        $UPGD_bool = $true
    }
    else
    {
        $UPGD_bool = $false
    }

    Write-Debug ("$(Log-Date) UPGD_bool = $UPGD_bool" )

    $temp_out = ( Join-Path -Path $ENV:TEMP -ChildPath temp_install.log )
    $temp_err = ( Join-Path -Path $ENV:TEMP -ChildPath temp_install_err.log )

    #########################################################################################################
    # Database setup
    # Microsoft introduced a defect on 27/10/2016 whereby this code abended when used with Azure SQL Database
    # The azure template creates the database so it was conditioned out.
    #########################################################################################################

    if ( ($SUDB -eq '1') -and (-not $UPGD_bool) )
    {
        switch ($DBUT) {
            "MSSQLS" {
                Write-Output ("$(Log-Date) Database Setup work...")

                Write-Output ("$(Log-Date) Ensure SQL Server Powershell module is loaded.")

                Write-Verbose ("$(Log-Date) Loading this module changes the current directory to 'SQLSERVER:\'. It will need to be changed back later")

                # Couldn't get assembly for the new sqlserver module to load properly. Left in
                # as record of what did not work. Possibly caused by having old version of SQL Server installed
                # thats incompatible with the SqlServer module.
                # Install-PackageProvider -Name NuGet -MinimumVersion 2.8.5.201 -Scope CurrentUser
                # Install-Module SqlServer -scope CurrentUser -AllowClobber
                # Update-Module Sqlserver
                # Note that warnings are displayed which may be ignored.
                $VerbosePreferenceSaved = $VerbosePreference
                $VerbosePreference = "SilentlyContinue"
                Import-Module "sqlps" -DisableNameChecking
                $VerbosePreference = $VerbosePreferenceSaved

                if ( $SUDB -eq '1' -and -not $UPGD_bool)
                {
                    try {
                        Drop-SqlServerDatabase $server_name $dbname $dbuser $dbpassword
                    } catch { 
                        # Ignore errors
                    }
                    Create-SqlServerDatabase $server_name $dbname $dbuser $dbpassword
                }

                Write-Verbose ("$(Log-Date) Change current directory from 'SQLSERVER:\' back to the file system so that file pathing works properly")
                cd "c:"
            }
         
            default {
                $ErrorMessage = "$(Log-Date) $DBUT Database not currently supported"
                $ExitCode = 5
                Write-Error $ErrorMessage -Category NotInstalled
                throw $ErrorMessage                
           }
        }
    }


    # Write-Output ("$(Log-Date) Setup tracing for both this process and its children and any processes started after the installation has completed.")

    # if ($trace -eq "Y") {
    #     [Environment]::SetEnvironmentVariable("X_RUN", $traceSettings, "Machine")
    #     $env:X_RUN = $traceSettings
    # } else {
    #     [Environment]::SetEnvironmentVariable("X_RUN", $null, "Machine")
    #     $env:X_RUN = ''
    # }

    Write-Output ("$(Log-Date) Installing the application")

    [String[]] $Arguments = @( "/quiet /lv*x ""$install_log""", "SHOWCODES=1", "USEEXISTINGWEBSITE=1", "DBUT=$DBUT", "DBII=LANSA", "DBSV=$server_name", "DBAS=$dbname", "TRUSTED_CONNECTION=$trusted", "SUDB=$SUDB",  "USERIDFORSERVICE=$webuser", "PASSWORDFORSERVICE=$webpassword", "PART=TST", "APPA=C:\CCSTEST")

    if ( $trusted -ne '1') {
        $Arguments += @("DBUS=$dbuser", "PSWD=$dbpassword" )
    }

    Write-Output ("$(Log-Date) Arguments = $Arguments")

    $x_err = (Join-Path -Path $ENV:TEMP -ChildPath 'x_err.log')
    Remove-Item $x_err -Force -ErrorAction SilentlyContinue

    if ( $UPGD_bool )
    {
        Write-Output ("$(Log-Date) Upgrading LANSA")
        $Arguments += "CREATENEWUSERFORSERVICE=""Use Existing User"""
        $p = Start-Process -FilePath $installer_file -ArgumentList $Arguments -Wait -PassThru
    }
    else
    {
        Write-Output ("$(Log-Date) Installing LANSA")
        $Arguments += "CREATENEWUSERFORSERVICE=""Create New Local User"""
        $p = Start-Process -FilePath $installer_file -ArgumentList $Arguments -Wait -PassThru
    }

    if ( $p.ExitCode -ne 0 ) {
        $ExitCode = $p.ExitCode
        $ErrorMessage = "MSI Install returned error code $($p.ExitCode)."
        Write-Error $ErrorMessage -Category NotInstalled
        throw $ErrorMessage
    }

	Write-output ("$(Log-Date) Allow webuser to create directory in c:\windows\temp so that LOB and BLOB processing works" )
    
    #####################################################################################
    # Test if post install x_run processing had any fatal errors
    # Performed at the end as errors may occur due to the loadbalancer probe executing
    # before LANSA has completed installing.
    # This allows it to continue.
    #####################################################################################

    if ( (Test-Path -Path $x_err) )
    {
        Write-Verbose ("$(Log-Date) Signal to Cloud log that the installation has failed")

        $ErrorMessage = "$x_err exists and indicates an installation error has occurred."
        Write-Error $ErrorMessage -Category NotInstalled
        throw $ErrorMessage
    }

    Write-Output ("$(Log-Date) Installation completed successfully")
}
catch
{
	$_
    Write-Output ("$(Log-Date) Installation error ExitCode=$ExitCode; LastExitCode=$LASTEXITCODE")
    if ( $ExitCode -eq 0 -and $LASTEXITCODE -and $LASTEXITCODE -ne 0) {
        $ExitCode = $LASTEXITCODE
    }
    if ($ExitCode -eq 0 -or -not $ExitCode) {$ExitCode = 1}

    Write-Output ("$(Log-Date) State Before returning: ExitCode=$ExitCode")
    Write-Output ("$(Log-Date) An exit code of 1603 is an installer error so look at $install_log")
    Write-Output ("$(Log-Date) An exit code of 1602 means the application is already installed using a different build of the MSI. See the powershell.log file")
    Write-Output ("$(Log-Date) An exit code of 1 is a command line error when executing the powershell script. See the main log file")

    cmd /c exit $ExitCode    #Set $LASTEXITCODE
    return
}
finally
{
    Write-Output ("$(Log-Date) See $install_log and other files in $ENV:TEMP for more details.")
}

# Successful completion so set Last Exit Code to 0
cmd /c exit 0
