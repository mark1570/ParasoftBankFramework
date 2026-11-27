# ParasoftBankFramework

A Playwright and TypeScript automation framework for testing the ParaBank web application.

## Setup

```powershell
npm install
npx playwright install chrome
```

## Run Tests

```powershell
npx playwright test
```

Run a specific test file:

```powershell
npx playwright test tests/login.spec.ts
```

Open the HTML report:

```powershell
npx playwright show-report
```

## Project Structure

- `tests/` - Playwright test specifications
- `pages/` - Page Object classes
- `fixtures/` - Shared Playwright fixtures
- `utils/` - Test data and reusable utilities
- `playwright.config.ts` - Browser, environment, and test configuration
