@ECHO OFF

IF [%1]==[] GOTO help
SET _FIRST=%1

IF %_FIRST%==help GOTO help

SET _SECOND=%2

SET /a _ANSWER=%_FIRST%+%_SECOND%

ECHO %_ANSWER%

GOTO:eof

:help

ECHO Use the file name "add_numbers" with two numbers after it
ECHO Example: add_numbers 12 324

GOTO:eof