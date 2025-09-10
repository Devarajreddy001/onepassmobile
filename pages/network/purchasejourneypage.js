const { expect } = require("@playwright/test");

exports.Purchasejourney = class Purchasejourney {
  constructor(page) {
    this.page = page;
    this.BUYASERVICE = page.locator("//*[text()=' Buy a Service ']");
    this.MOREINFO= page.locator("(//*[text()=' More Info '])[1]");
    this.SELECTCIRCLE=page.locator("//*[@class='select-circle']")
    this.CONTINUEBUTTON=page.locator("//*[text()='CONTINUE ']")
    this.BUYNOW = page.locator("//*[text()='BUY NOW']");
    this.STREETADDRESS = page.locator("//*[@placeholder='Type your address']")
    this.STREETDROPDOWN= page.locator("//*[@class='p-6 pb-6 cursor-pointer transition duration-200 ease-in-out hover:bg-spc-web-mid-2 address']")
    this.CARDNICKNAME=page.locator("//*[@id='cardNickname']");
    this.CARDHOLDERNAME = page.locator("//*[@placeholder='Cardholder name']");
    //this.CARDNUMBER = page.locator("//*[@placeholder='1234 1234 1234 1234']");
    //this.CARDNUMBER = page.locator("//*[@data-elements-stable-field-name='cardNumber']");
    this.CARDNUMBER = page.locator("//*[@aria-label='Credit or debit card number']");

    
    this.CARDEXPIRY = page.locator("//*[@id='card-expiry-element']");
    this.CVC = page.locator("//*[@name='cvc']");
    
  }

  

  async clickBuyServiceButton() {
    await this.BUYASERVICE.click();
  }

  async clickMoreInfo() {
    await this.MOREINFO.click();
  }

 async clickBuyNow() {
    await this.BUYNOW.click();
  }

  async enterAddress() {
    await this.STREETADDRESS.fill("141 abell road marsden park nsw");
  }

  
 async clickStreetDropdown() {
    await this.STREETDROPDOWN.click();
  }

   async clickContinue() {
    await this.SELECTCIRCLE.click()
    await this.CONTINUEBUTTON.click();
  }

   async clickContinueOnDeliveryMethodPage() {
    
    await this.CONTINUEBUTTON.click();
  }

  async enterNickName(){
    await this.CARDNICKNAME.fill("Test Card nick Name")
  }

   async enterCardHolderName(){
    await this.CARDHOLDERNAME.fill("Test Arun")
  }

  async enterCardNumber(){
    await this.CARDNUMBER.click();
    await this.CARDNUMBER.fill("4000 0003 6000 0006")
  }


  async enterCardExpiry(){
    await this.CARDEXPIRY.fill("11/29")
  }

  async enterCardCVV(){
    await this.CVC.fill("234")
  }

  async clickContinueOnPaymentMethodPage() {
    
    await this.CONTINUEBUTTON.click();
  }
};
