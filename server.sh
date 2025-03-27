#!/bin/bash

# This script starts a simple HTTP server to view the website locally
# This helps avoid CORS issues when testing the site locally

echo "Starting local server at http://localhost:8000"
echo "Press Ctrl+C to stop the server"

# Python 3
python3 -m http.server 2>/dev/null || python -m SimpleHTTPServer 2>/dev/null