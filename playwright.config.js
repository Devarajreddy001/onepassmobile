// @ts-check
const { defineConfig } = require('@playwright/test');


const config = defineConfig({
  // testDir: './stepdefinitions',
  retries :0,
  
  /* Maximum time one test can run for. */
  timeout: 100 * 1000,
  expect: {
  
    timeout: 500000
  },
  workers: 4,
fullyParallel:true,
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
 
  use: {

    browserName : 'chromium',
    headless :false,
    screenshot : 'only-on-failure',
    viewport: { width: 1300, height: 650},
   
  },
  
 
   // Configure reporters
   reporter: [
    ['allure-playwright', { outputDir: 'my-allure-results' }],
  ],

  
 

});







module.exports = config;