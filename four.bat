@echo off

setlocal
:PROMPT
SET /P AREYOUSURE=�Y�T�{�ɮ׵L�~�A�п��Y�A�}�l�W���ɮ�(Y/[N])?
IF /I "%AREYOUSURE%" NEQ "Y" GOTO END
echo Uploading blogs...
git add .
@ping 127.0.0.1 -n 3 -w 1000 > nul
git commit -m 'auto push test'
@ping 127.0.0.1 -n 3 -w 1000 > nul
git push
@ping 127.0.0.1 -n 3 -w 5000 > nul
:END
endlocal
echo Done!
