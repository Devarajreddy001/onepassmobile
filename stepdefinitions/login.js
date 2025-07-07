
const { Given, When, Then,setDefaultTimeout } = require('@cucumber/cucumber');
const { chromium, firefox } = require('@playwright/test');
const config=require('../playwright.config');
const { expect } = require("@playwright/test");
const DEFAULT_TIMEOUT = 1000000000;
require('dotenv').config()
const assert = require('assert')

setDefaultTimeout(DEFAULT_TIMEOUT);

const {After}=require('../reusableComponent/hooks');

const {setupPage,setupBrowser,closeBrowser}=require('../fixtures/globalsetup');
const { Login } = require('../pages/network/loginpage');

// Global variables to store browser instance and page


let url=process.env.applicationUrl;
console.log(url)

//defining the values of the data used in the onboarding flow
//UserCollection




After(async function (testCase) {
   //The logic for taking a screenshot on failure is defined in hooks.js
    await closeBrowser()
   });




When('I enter {string} as username', async (username) => {
   const loginObject= new Login(page);
   await loginObject.clickLoginButton();
    loginObject.enterEmailLogin(username)
    await page.waitForTimeout(2000);
});

When('I enter {string} as password', async (password) => {
   
    const loginObject= new Login(page);
   await loginObject.enterpasswordLogin(password)
   await page.waitForTimeout(2000);

});

When('I click the login button', async () => {
   const loginObject= new Login(page);
   await loginObject.clickLoginButtonlogin()
   
});

Then('I should see {string}', async function (expectedMessage) {
    const loginObject = new Login(page);
    await expect(loginObject.WELCOME).toContainText(expectedMessage)
});