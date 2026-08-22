import { defineConfig, devices } from '@playwright/test';
import { defineBddConfig, cucumberReporter } from 'playwright-bdd';


const testDir = defineBddConfig({
  features: 'tests/features/**/*.feature',
  steps: [
    'tests/steps/**/*.ts',
    'tests/fixtures/**/*.ts',
  ],
});

export default defineConfig({
  testDir,

  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,

  reporter: [
    ['html', { open: 'never' }],
    cucumberReporter('json', { outputFile: 'reports/json/cucumber-report.json' }),
  ],

  use: {
    trace: 'on-first-retry',
    headless: false,
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
});