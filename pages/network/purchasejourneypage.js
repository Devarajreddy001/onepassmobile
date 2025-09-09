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
    this.CARDNICKNAME=page.locator("Card Nickname")
    this.CARDHOLDERNAME = page.locator("//*[@placeholder='Cardholder name']");
    this.CARDNUMBER = page.locator("//*[@placeholder='1234 1234 1234 1234']");
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



  async confirmEmail(email = this.generatedEmail) {
    await this.CONFIRMEMAIL.fill(email);
  }

 async selectTitle() {
    await this.TITLE.selectOption({ value: 'Mr' });
}

  async enterFirstName(firstName) {
    await this.FIRSTNAME.fill(firstName);
  }

  async enterLastName(lastName) {
    await this.LASTNAME.fill(lastName);
  }

  async enterDateOfBirth(dob) {
    await this.DATEOFBIRTH.fill(dob); // format should match expected format (e.g., "01/01/1990")
  }

  async enterPassword(password) {
    await this.PASSWORD.fill(password);
  }

  async confirmPassword(password) {
    await this.CONFIRMPASSWORD.fill(password);
  }

  async checkIAgree() {
    await this.IAGREE.check();
  }

  async clickCreateAccount() {
    await this.CREATEACCOUNT.click();
  }
 async clickIntitalCreateAccount() {
    await this.INTIALCREATEACCOUNT.click();
  }

 async enterEmailInYopmail(page) {
    const yopmailInput = page.locator("//*[@placeholder='Enter your inbox here']");
    await yopmailInput.fill(this.generatedEmail);
    await yopmailInput.press('Enter');
}

 

  async onepassMailFrame(page) {
       const onepassMailFrame = await page.frame('ifinbox').locator("(//*[text()='OnePass mobile'])").click();
   
  }
  
  async onepassInMailFrame(page,value){
      
    const onepassInMailFrameLocator = await page.frame('ifmail');
    const productRow = await onepassInMailFrameLocator.locator('table tr').getByText(`${value}`).first().click();
  }
};
