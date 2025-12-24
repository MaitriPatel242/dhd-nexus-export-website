#!/bin/bash
echo "Starting local web server..."
echo ""
echo "Your website will be available at: http://localhost:8000"
echo ""
echo "Press Ctrl+C to stop the server"
echo ""

# Try Python 3 first, then Python 2, then PHP
if command -v python3 &> /dev/null; then
    python3 -m http.server 8000
elif command -v python &> /dev/null; then
    python -m http.server 8000
elif command -v php &> /dev/null; then
    php -S localhost:8000
else
    echo "Please install Python or PHP to run a local server."
    echo "Or use VS Code's Live Server extension."
fi

