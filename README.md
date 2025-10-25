# Evolution Simulation: Apes → Humans

This is a small browser-based agent simulation that demonstrates simple evolutionary dynamics. Agents ("apes") move, eat food, reproduce with mutation, and over time population averages (speed, vision, intelligence) may shift. When averages cross thresholds the UI will label the population as "Ape", "Hominin", or "Human".

How to run
 Open `index.html` in your browser (double-click or use "Open with" → your browser), or serve the project root with a static server.

Controls

Notes & extensions

Files
 - `names.js` — helper functions (name/role/event generation)

Running tests
- A small Jest test suite has been added to `__tests__/names.test.js` to validate helper functions.
- To initialize and run tests on Windows PowerShell we've included a helper script `setup-tests.ps1` in the project root. It will:
	- Check that Node and npm are installed and available in PATH.
	- Run `npm init -y` if `package.json` is missing.
	- Install Jest as a dev dependency.
	- Add a `test` script to `package.json` that runs `jest`.
	- Run `npm test`.

Usage (PowerShell):
```powershell
# from project root
.\setup-tests.ps1
# if your policy blocks scripts:
powershell -ExecutionPolicy Bypass -File .\setup-tests.ps1
```

Manual npm steps (if you prefer):
```powershell
npm init -y
npm install --save-dev jest
npm set-script test "jest"
npm test
```
Running tests with Docker (no Node install required)
- If you have Docker installed, you can build an image that runs the tests without installing Node locally.
- A `Dockerfile` and `run-tests-docker.ps1` script are included in the project root.

Build and run (PowerShell):
```powershell
# from project root
.\run-tests-docker.ps1
```

The Dockerfile will initialize npm (if `package.json` is missing), install Jest as a dev dependency, and run `npm test` inside the container.

Troubleshooting
- Ensure Docker Desktop is installed and the `docker` command is available in PowerShell.
- If the build or tests fail, check the container logs printed to your terminal and paste them here if you want help debugging.

License: MIT-style (feel free to reuse and modify)
