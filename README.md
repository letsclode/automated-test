# Automation Project

This project automates testing for multiple brands using Playwright.

## Project Structure

- `brands/` — Brand-specific configs and page objects
  - `brandA/` — Example brand
    - `config.ts` — Brand configuration
    - `pages/` — Page object files
      - `homePage.ts` — Home page object
- `core/` — Shared utilities
  - `apiClient.ts` — API client
  - `browser.ts` — Browser setup
  - `config.ts` — Core configuration
- `test/` — Test suites
  - `api/` — API tests
    - `brandA.test.ts` — API tests for brandA
  - `web/` — Web UI tests
    - `brandA.test.ts` — Web tests for brandA
    - `homePage.ts` — Web test page object
- `test-results/` — Test output/results
- `Dockerfile` — Container setup
- `package.json` — Project dependencies
- `playwright.config.ts` — Playwright configuration
- `tsconfig.json` — TypeScript configuration
- `PLAN.md` — Project planning notes

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```
2. Run tests:
   ```bash
   npx playwright test
   ```

## Technologies Used
- TypeScript
- Playwright
- Node.js
- Docker

## Docker
docker build -t automation-platform .
docker run --rm automation-platform

## License
MIT
