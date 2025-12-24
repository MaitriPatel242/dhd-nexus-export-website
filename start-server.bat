@echo off
echo ========================================
echo   Local Web Server Starter
echo ========================================
echo.
echo Checking for available server options...
echo.

REM Try Node.js first (npx doesn't require installation)
where npx >nul 2>&1
if %errorlevel% == 0 (
    echo Found Node.js! Starting server...
    echo.
    echo Your website will be available at: http://localhost:8000
    echo Press Ctrl+C to stop the server
    echo.
    npx -y http-server -p 8000
    goto :end
)

REM Try Python
where python >nul 2>&1
if %errorlevel% == 0 (
    echo Found Python! Starting server...
    echo.
    echo Your website will be available at: http://localhost:8000
    echo Press Ctrl+C to stop the server
    echo.
    python -m http.server 8000
    goto :end
)

REM Try PHP
where php >nul 2>&1
if %errorlevel% == 0 (
    echo Found PHP! Starting server...
    echo.
    echo Your website will be available at: http://localhost:8000
    echo Press Ctrl+C to stop the server
    echo.
    php -S localhost:8000
    goto :end
)

REM No server found
echo.
echo ========================================
echo   No Server Found!
echo ========================================
echo.
echo Please use one of these options:
echo.
echo 1. VS CODE (EASIEST):
echo    - Install VS Code
echo    - Install "Live Server" extension
echo    - Right-click contact.html ^> Open with Live Server
echo.
echo 2. NODE.JS:
echo    - Install Node.js from nodejs.org
echo    - Then run: npx http-server -p 8000
echo.
echo 3. ONLINE:
echo    - Upload to Netlify Drop: netlify.com/drop
echo    - Or use GitHub Pages
echo.
echo See QUICK_START.md for detailed instructions.
echo.
pause

:end

