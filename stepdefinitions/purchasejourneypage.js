
const { Given, When, Then,setDefaultTimeout } = require('@cucumber/cucumber');
const { chromium, firefox } = require('@playwright/test');
const config=require('../playwright.config');
const { expect } = require("@playwright/test");
const DEFAULT_TIMEOUT = 1000000000;
require('dotenv').config()
const assert = require('assert')

setDefaultTimeout(DEFAULT_TIMEOUT);

const {After}=require('../reusableComponent/hooks');

const {setupPage,setupBrowser,closeBrowser,globalLogin}=require('../fixtures/globalsetup');
const { Purchasejourney } = require('../pages/network/purchasejourneypage');

// Global variables to store browser instance and page


let url=process.env.applicationUrl;
console.log(url)

//defining the values of the data used in the onboarding flow
//UserCollection




After(async function (testCase) {
   //The logic for taking a screenshot on failure is defined in hooks.js
    await closeBrowser()
   });



Given('user is on the login screen', async () => {
   await globalLogin()
});

When('user clicks on buy a service button', async () => {
   
   const purchaseObject= new Purchasejourney(page);
   await purchaseObject.clickBuyServiceButton();
   await page.waitForTimeout(5000);
    
});

When('clicks on the more info', async () => {
    const purchaseObject= new Purchasejourney(page);
   await purchaseObject.clickMoreInfo()
 

});

When('clicks on buy now', async () => {
    const purchaseObject= new Purchasejourney(page);
   await purchaseObject.clickBuyNow()
});

When('clicks on continues', async () => {
    const purchaseObject= new Purchasejourney(page);
   await purchaseObject.clickContinue()
   await purchaseObject.clickContinue()
});

Then('user should be able to see the address screen', async function () {
    console.log("pass")
});