@echo off
set /p "message=Enter message: "

git pull origin main
git add .
git commit -m "%message%"
git push origin main