@echo off
where node >nul 2>&1 || (echo Install Node.js from nodejs.org first & pause & exit /b)
call npm install
call npm run build
echo Done - open the dist folder
pause
