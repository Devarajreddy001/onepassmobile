
const { Given, When, And,Then, BeforeAll, AfterAll, setDefaultTimeout } = require('@cucumber/cucumber');
const { chromium, firefox } = require('@playwright/test');
const config=require('../playwright.config');
const { expect } = require("@playwright/test");
const DEFAULT_TIMEOUT = 1000000000;
require('dotenv').config()

setDefaultTimeout(DEFAULT_TIMEOUT);

const {After}=require('../reusableComponent/hooks');

const {setupPage,setupBrowser,closeBrowser}=require('../fixtures/globalsetup');
const { NetworkHome } = require('../pages/network/networkHomePage');

// Global variables to store browser instance and page


let url=process.env.applicationUrl;
console.log(url)


//defining the values of the data used in the onboarding flow
//UserCollection
let actualUserFirstName = 'test';



After(async function (testCase) {
   //The logic for taking a screenshot on failure is defined in hooks.js
   
   });
Given('user is on the homepage', async () =>

{   
    await setupBrowser();
    await setupPage();
    const networkHomeObject= new NetworkHome(page);
      await page.goto(url);
      await page.waitForTimeout(5000);

 
      
 });

 When('user clicks on the network tab', async ()=>
  {
   const networkHomeObject= new NetworkHome(page);
   await networkHomeObject.clickNetworkDropdown()
   await page.waitForTimeout(2000);
});

When('clicks on the Network coverage', async ()=>
  {
   const networkHomeObject= new NetworkHome(page);
   await networkHomeObject.clickNetworkCoverage()
   await page.waitForTimeout(2000);
});

When('enters the text in the search', async ()=>
  {
   await page.waitForTimeout(4000);
   const networkHomeObject= new NetworkHome(page);
   await networkHomeObject.enterTextInIframe("141 abell road marsden park nsw")
   await page.waitForTimeout(2000);
});


 Then('user should be able to see the validation message', async ()=> {
   const networkHomeObject= new NetworkHome(page);
   const frame = await networkHomeObject.getIframe();
   const messageLocator = frame.locator(networkHomeObject.COVERAGE_MESSAGE_SELECTOR);
   await expect(messageLocator).toContainText("4G mobile coverage is available here. To use 4G, you'll need a 3G-ready phone.");
   await closeBrowser()
  
 });

 

 //Scenario2: verify Network status by passing some value

 When('clicks on the Network status', async ()=>
   {
    const networkHomeObject= new NetworkHome(page);
    await networkHomeObject.clickNetworkStatus()
    await page.waitForTimeout(2000);
 });
 
  Then('user should be able to see the validation message for network status search', async ()=> {
    const networkHomeObject= new NetworkHome(page);
    const frame = await networkHomeObject.getIframe();
    const messageLocator1 = frame.locator(networkHomeObject.STATUS_MESSAGE_SELECTOR1);
    await expect(messageLocator1).toContainText("We haven't had any reported mobile network issues in this area.");
    const messageLocator2 = frame.locator(networkHomeObject.STATUS_MESSAGE_SELECTOR2);
    await expect(messageLocator2).toContainText("We'll let you know here, when there is an issue with the mobile network, or we are working on any mobile towers near you.");
    await closeBrowser()
   
  });
 
  
 
 