@ECHO OFF
set "sc="
set /p "SC=Search Criteria: "
start "" /b "C:\Program Files (x86)\Google\Chrome\Application\Chrome.exe" "https://www.google.com/search?&q=%SC: =+%&btnI=1"