const { chromium, firefox} = require('@playwright/test');
const config = require('../playwright.config');



let browser;

const url = process.env.applicationUrl;
const { Login } = require('../pages/network/loginpage');


async function setupBrowser() {
  browser = await (config.use.browserName === 'firefox' ? firefox.launch(config.use) : chromium.launch(config.use));
}

async function setupPage() {
  const context = await browser.newContext(config.use,{ timeout: 60000 });
  page = await context.newPage();
  //console.log("Viewport size:", await page.viewportSize());
  await context.tracing.start({ screenshots: true, snapshots: true });
  
}


async function closeBrowser() {
  if (browser) {
    await browser.close();
  }
}


async function globalLogin() {
  await setupBrowser();
  await setupPage();
  const loginObject = new Login(page);
  await page.goto(url);
  await loginObject.clickLoginButton();
  loginObject.enterEmailLogin("test3@yopmail.com")
  await page.waitForTimeout(2000);
  await loginObject.enterpasswordLogin("Aa@devraj22")
  await page.waitForTimeout(2000);
  await loginObject.clickLoginButtonlogin()


}

module.exports = {
  setupBrowser,
  setupPage,
  closeBrowser,
  globalLogin
  
};
