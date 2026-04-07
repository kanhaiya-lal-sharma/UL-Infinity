


// @ts-check
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,

  // 🔥 MULTIPLE REPORTERS
  reporter: [
    ['line'],                 // console output
    ['html', { open: 'never' }],  // HTML report
    ['allure-playwright']     // Allure report
  ],

  use: {
    baseURL: 'https://dev-vas.universityliving.com/',

    headless: false,

    launchOptions: {
      slowMo: 1000
    },

    screenshot: 'only-on-failure', // 📸 fail pe
    video: 'on',                  // 🎥 har test
    trace: 'on-first-retry',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});