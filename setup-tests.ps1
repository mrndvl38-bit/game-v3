# setup-tests.ps1
# Small helper to initialize npm, install Jest, add a test script, and run tests.
# Run this from the project root in PowerShell.

function Abort($msg) {
    Write-Host "ERROR: $msg" -ForegroundColor Red
    exit 1
}

Write-Host "Checking for Node.js and npm..."
$node = Get-Command node -ErrorAction SilentlyContinue
$npm = Get-Command npm -ErrorAction SilentlyContinue
if (-not $node) { Abort "Node.js (node) is not found in PATH. Please install Node.js (LTS) from https://nodejs.org/ or use nvm-windows." }
if (-not $npm) { Abort "npm is not found in PATH. It should be installed with Node.js. Please ensure npm is available." }

Write-Host "Node and npm found. Versions:"
node -v
npm -v

Write-Host "Initializing npm (if package.json doesn't exist)..."
if (-not (Test-Path package.json)) {
    npm init -y
} else {
    Write-Host "package.json already exists, skipping npm init."
}

Write-Host "Installing Jest as a dev dependency..."
npm install --save-dev jest

Write-Host "Adding test script to package.json (""test"": ""jest"")..."
npm set-script test "jest"

Write-Host "Running tests (this will run Jest)..."
npm test

Write-Host "Done. If tests failed, review the output above and open an issue or ask for help." -ForegroundColor Green
