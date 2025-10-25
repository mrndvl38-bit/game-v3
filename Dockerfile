# Dockerfile to run Jest tests in a container without installing Node locally
# Builds a minimal image that initializes npm (if needed), installs dev deps and runs tests.

FROM node:20-slim

# Create app directory
WORKDIR /app

# Copy project files
COPY . /app

# If package.json is missing, initialize it to allow installing dev deps
RUN if [ ! -f package.json ]; then npm init -y; fi

# Install dev dependencies (will add jest)
RUN npm install --no-audit --no-fund --save-dev jest

# Default command: run tests
CMD ["npm", "test"]
