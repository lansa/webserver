"InitAllLansaevalRepo.ps1"

For ( $i = 2; $i -le 10; $i++) {
    git remote add lansaeval$($i) git@github.com:lansa/lansaeval$($i).git
    git remote get-url lansaeval$($i)
    git push --force lansaeval$($i)
    Write-Output( "*********************************************")
}