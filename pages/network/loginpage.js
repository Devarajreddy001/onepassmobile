const { expect } = require("@playwright/test");

exports.Login = class Login {
  constructor(page) {
    this.page = page;
    this.LOGINBUTTON = page.locator("//*[text()=' Log in ']");
    this.WELCOME= page.locator("//*[text()='Welcome to Your Account']");
    this.EMAILINPUT = page.locator("//*[@id='emailAddress']");
    this.EMAILINPUTLOGIN = page.locator("//input[@placeholder='Email']")
    this.PASSWORDINPUTLOGIN= page.locator("//input[@placeholder='Enter your password']")
    this.LOGINBUTTONLOGIN=page.locator("//button[@id='login-btn']")
    this.CONFIRMEMAIL = page.locator("//*[@id='emailConfirm']");
    this.TITLE = page.locator("//*[@id='title']");
    this.TITLEVALUE = page.locator("//*[@value='Mr']");
    this.FIRSTNAME = page.locator("//*[@id='firstName']");
    this.LASTNAME = page.locator("//*[@id='lastName']");
    this.DATEOFBIRTH = page.locator("//*[@id='dateOfBirth']");
    this.PASSWORD = page.locator("//*[@id='signup-password']");
    this.CONFIRMPASSWORD = page.locator("//*[@id='passwordConfirm']");
    this.IAGREE = page.locator("//*[@id='marketingConsent']");
    this.INTIALCREATEACCOUNT=page.locator("//*[text()='Create An Account']")
    this.CREATEACCOUNT = page.locator("//*[text()='CREATE AN ACCOUNT']");
    this.ACCOUNTCREATIONMESSAGE=page.locator("//*[@class='text-xl font-bold mb-4']");
    this.YOPMAILCONFIRMMESSAGE=page.locator("//*[@class='title']");
    this.WELCOMEMESSAGE= page.locator("//*[@class='welcome-title text-2xl font-semibold text-gray-800 mb-4 text-center']")

    this.generatedEmail = this.generateRandomEmail();
  }

  generateRandomEmail() {
    const randomNumber = 88;  // Generates a random 4-digit number
    return `test${randomNumber}@yopmail.com`;
}

  getGeneratedEmail() {
    return this.generatedEmail;
  }

  async clickLoginButton() {
    await this.LOGINBUTTON.click();
  }

  async clickLoginButtonlogin() {
    await this.LOGINBUTTONLOGIN.click();
  }

  async enterEmail(email = this.generatedEmail) {
    await this.EMAILINPUT.fill(email);
  }

  
 async enterEmailLogin(email) {
    await this.EMAILINPUTLOGIN.fill(email);
  }

   async enterpasswordLogin(password) {
    await this.PASSWORDINPUTLOGIN.fill(password);
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
