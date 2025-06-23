const { chromium, firefox} = require('@playwright/test');
const config = require('../playwright.config');



let browser;

const url = process.env.applicationUrl;


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


// async function globalLogin() {
//   await setupBrowser();
//   await setupPage();
//   await page.goto(url);

//   const loginObject = new login(page);
//   await loginObject.clickSingin1();
//   await loginObject.clickPhonenumber();
//   await page.waitForTimeout(3000);
//   await loginObject.enterPhonenumber();
//   await loginObject.clickSignin2();
//   await page.waitForTimeout(5000);
//   const latestOtp = await connectToDatabase(randomMobileNumber);
//   await loginObject.enterOtp(latestOtp);
//   await page.waitForTimeout(1000);
//   await loginObject.clickLogin();
//   const visible = await loginObject.closeAdvertisementPopUpIntermittent.isVisible();
//   if(visible){
//     await loginObject.closeAdvertisement();
//   }
//   await loginObject.clickDownloadCrossIcon();


// }

module.exports = {
  setupBrowser,
  setupPage,
  closeBrowser,
  
};
