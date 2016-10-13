@ECHO OFF
SET _FIRST=%1
IF %_FIRST%== help GOTO help 
SET _SECOND=%2
SET /a _ANSWER=%_FIRST%+%_SECOND%
ECHO %_ANSWER%
goto:eof
:help
ECHO You selected help, I should write a help section. 
ECHO But really, use the file name "add_numbers" with two numbers after it
ECHO This magic program will display the results
ECHO Example: add_numbers 12 324
goto:eof