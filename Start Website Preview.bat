@echo off
setlocal
cd /d "%~dp0"

start "Mallon Khan Website Preview" powershell -NoExit -ExecutionPolicy Bypass -NoProfile -Command "Set-Location -LiteralPath '%~dp0'; Write-Host 'Starting Mallon Khan website preview...'; Write-Host 'Keep this window open while you view the site.'; . '%~dp0preview-server.ps1'"

timeout /t 4 /nobreak >nul
start "" "http://127.0.0.1:4173/index.html"
