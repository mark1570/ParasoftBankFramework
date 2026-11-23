import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * See https://playwright.dev/docs/test-configuration.
 */

export default defineConfig({
  testDir: './tests',
  use: {
    baseURL: 'https://parabank.parasoft.com/parabank/',
    headless: false,
    screenshot: 'only-on-failure',
    trace: 'retain-on-failure',
  },
  projects: [
    {
      name: 'chrome',
      use: {
        ...devices['Desktop Chrome'],
        channel: 'chrome',
        viewport: null,
        deviceScaleFactor: undefined,
        launchOptions: { args: ['--start-maximized'] },
      },
    },
  ],
});