<#
.SYNOPSIS

Calculate size of deployment

.EXAMPLE

#>

param(
    [Parameter(Mandatory=$true)]
        [String]$rootpath
)


# Enumerates top level directories that match DirectoryExpression and recurses down through their children to rnumerate files that match FileExpression
function Get-DirSize
{
    param (
        [Parameter(Mandatory=$true)]
            [string]
            $Path,
            
            [hashtable]
            $ReturnObj,

            [string]
            $DirectoryExpression = '*',

            [string]
            $FileExpression = '*'
    )      

    try {
        if ( !(Test-Path $path) ) {
            Write-Output( "Path $path does not exist")
            return
        }
        $path
        Write-Output( "path=$path")
        Write-Output( "DirectoryExpression=$DirectoryExpression")
        Write-Output( "FileExpression=$FileExpression")
        
        [Decimal]$actualSize = 0
        #foreach ($item in (Get-ChildItem $directory -recurse | Where-Object {-not $_.PSIsContainer} | ForEach-Object {$_.FullName})) {
        #    $ReturnObj.result += ((Get-Item $item).length)
        #}
        if ( $DirectoryExpression -eq '*') {
            $DirectoryList = @($path)
        } else {
            $DirectoryList = [System.IO.Directory]::EnumerateDirectories( $path, $DirectoryExpression )
        }
        foreach ($directory in ($DirectoryList ) ) {
            $Directory
            foreach ($item in ([System.IO.Directory]::EnumerateFiles( $directory, $FileExpression, "AllDirectories" ) ) ) {
                $ReturnObj.result += ((Get-Item $item).length)
            }
        }        
    } catch {
        throw -1
    }
}

if ( !(Test-Path $rootpath) )
{
    Write-Error( "Path $rootpath does not exist")
    throw -1
}

$countObj = @{ result = 0 }
 
try {
    Get-DirSize -Path (Join-Path -Path $rootpath -ChildPath 'autodeploy') -ReturnObj $countObj
    Get-DirSize -Path (Join-Path -Path $rootpath -ChildPath 'connect') -ReturnObj $countObj
    Get-DirSize -Path (Join-Path -Path $rootpath -ChildPath 'connect64') -ReturnObj $countObj
    Get-DirSize -Path (Join-Path -Path $rootpath -ChildPath 'integrator\jsmadmin') -ReturnObj $countObj
    Get-DirSize -Path (Join-Path -Path $rootpath -ChildPath 'integrator\jsmcgi') -ReturnObj $countObj
    Get-DirSize -Path (Join-Path -Path $rootpath -ChildPath 'integrator\jsminstance') -ReturnObj $countObj
    Get-DirSize -Path (Join-Path -Path $rootpath -ChildPath 'x_win95\x_lansa\execute') -ReturnObj $countObj
    Get-DirSize -Path (Join-Path -Path $rootpath -ChildPath 'x_win95\x_lansa\web\vl') -ReturnObj $countObj
    Get-DirSize -Path (Join-Path -Path $rootpath -ChildPath 'x_win95\x_lansa\x_apps') -ReturnObj $countObj
    Get-DirSize -Path (Join-Path -Path $rootpath -ChildPath 'x_win95\x_lansa' ) -DirectoryExpression 'x_???' -ReturnObj $countObj 
    Get-DirSize -Path (Join-Path -Path $rootpath -ChildPath 'webserver\iisplugin') -ReturnObj $countObj
} catch {
    Write-Output("Error")
    cmd /c exit -1
    $LASTEXITCODE
    return
}

cmd /c exit $($countObj.result / 1KB)
$LASTEXITCODE