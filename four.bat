@echo off

setlocal
:PROMPT
SET /P AREYOUSURE=若確認檔案無誤，請選擇Y，開始上傳檔案(Y/[N])?
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
