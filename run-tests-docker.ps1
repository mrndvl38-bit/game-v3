# run-tests-docker.ps1
# Build and run the Docker image that runs the test suite.
# Usage: run from project root in PowerShell

param(
    [string]$ImageName = "game-v3-test",
    [switch]$RemoveAfter = $true
)

function Abort($msg) {
    Write-Host "ERROR: $msg" -ForegroundColor Red
    exit 1
}

# Check Docker availability
$docker = Get-Command docker -ErrorAction SilentlyContinue
if (-not $docker) { Abort "Docker is not installed or not in PATH. Install Docker Desktop for Windows and ensure 'docker' command works." }

Write-Host "Building Docker image: $ImageName"
$build = docker build -t $ImageName .
if ($LASTEXITCODE -ne 0) { Abort "Docker build failed" }

Write-Host "Running tests inside container..."
# Run container and stream logs
$runArgs = @("run", "--rm", $ImageName)
$proc = Start-Process -FilePath docker -ArgumentList $runArgs -NoNewWindow -Wait -PassThru
if ($proc.ExitCode -ne 0) { Abort "Tests failed inside Docker (container exit code $($proc.ExitCode))" }

Write-Host "Docker tests completed (exit code $($proc.ExitCode))" -ForegroundColor Green
