// @ts-check
const { devices } = require('@playwright/test');

const config = {
  testDir: './tests',
  retries: 1,
  workers: 3,
  /* Maximum time one test can run for. */
  //10-
  timeout: 30 * 1000,
  expect: {
    timeout: 5000
  },

  reporter: "html",
  projects: [
    {
      name: 'chrome',
      use: {

        browserName: 'chromium',
        headless: false,
        screenshot: 'on',
        video: 'retain-on-failure',
        ignoreHttpsErrors: true,
        trace: 'on',//off,on
        // ...devices['']
        //   viewport : {width:720,height:720}
      }
    }
  ]
};

module.exports = config;