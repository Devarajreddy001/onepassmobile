const { expect } = require("@playwright/test");

exports.NetworkHome = class NetworkHome {
  constructor(page) {
    this.page = page;
    this.NETWORKDROPDOWN = page.locator("//*[text()='Network ']");
    this.NETWORKCOVERAGE = page.locator("//*[text()='Network Coverage']");
    this.NETWORKSTATUS = page.locator("//*[text()='Network Status']");

    // Just store the selector string, not a locator
    this.IFRAME_SELECTOR = 'iframe[src*="colesmobile-iframe-src.html"]';
    this.SEARCH_INPUT_SELECTOR = "//input[@id='sbuzz_search_input']";
    this.OPTION_SELECTOR = "//li[@role='option']";

    // Store iframe message locator as a string
    this.COVERAGE_MESSAGE_SELECTOR = "//div[contains(@class, 'MuiTypography-body2') and contains(text(),'4G mobile coverage')]";
    this.STATUS_MESSAGE_SELECTOR1 = "//*[@class='MuiTypography-root MuiTypography-body2 MuiTypography-alignLeft css-1lkc5x3']";
    this.STATUS_MESSAGE_SELECTOR2 = "//*[@class='MuiTypography-root MuiTypography-body2 MuiTypography-alignLeft css-c0vxkn']";



  }

  async clickNetworkDropdown() {
    await this.NETWORKDROPDOWN.click();
  }

  async clickNetworkCoverage() {
    await this.NETWORKCOVERAGE.click();
  }

  async clickNetworkStatus() {
    await this.NETWORKSTATUS.click();
  }

  async enterTextInIframe(text) {
    const frameElement = await this.page.$(this.IFRAME_SELECTOR);
    const frame = await frameElement.contentFrame();

    await frame.waitForSelector(this.SEARCH_INPUT_SELECTOR);
    await frame.fill(this.SEARCH_INPUT_SELECTOR, text);
    await frame.click(this.OPTION_SELECTOR);
  }

  async getIframe() {
    const frameElement = await this.page.$(this.IFRAME_SELECTOR);
    return await frameElement.contentFrame();
  }
};
