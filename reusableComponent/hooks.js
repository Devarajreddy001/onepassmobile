const { After, Status, AfterAll } = require('@cucumber/cucumber');



let consoleLog = null;
let failedApiCalls = new Set(); // Use a Set to store unique API calls
let hasFailed = false;
let failedScenarios = [];


//devslackid:C078NNRE1UK
//prodslackid:C0774U5ALDS
After(async function (testCase) {
 this.page = page || page1 || page2;

  // Listen for console events
  if (page) {
  page.on('console', msg => {
    const type = msg.type();
    const text = msg.text();
    const location = msg.location();

    // Capture only the latest console log
    consoleLog = `Console ${type}: ${text} at ${location.url}:${location.lineNumber}:${location.columnNumber}`;
  });

  // Listen for response events
  page.on('response', async response => {
    const status = response.status();
    const url = response.url();
    
    if (status >= 400) {
      // Store unique API call in the Set
      const apiCall = `Failed API call: ${status} ${url}`;
      failedApiCalls.add(apiCall);
    }
  });
};

  if (testCase.result.status === Status.FAILED) {
    const screenshotPath = `screenshots/${Date.now()}_failure.png`;
    const screenshot = await this.page.screenshot({ path: screenshotPath });
    this.attach(screenshot, 'image/png');
    console.log(`Screenshot captured on failure: ${screenshotPath}`);

    hasFailed = true;
    // Get and store the name of the failed scenario
    const failedScenarioName = testCase.pickle.name;
    failedScenarios.push(failedScenarioName);

  }
});

// // AfterAll hook to run after all scenarios
AfterAll(async function () {
 

  let finalReportMsg = '';
  if (hasFailed) {
    finalReportMsg = `Some tests failed. Please check the test report here`;
  } else {
    finalReportMsg = `All tests passed successfully! Please check the test report here: `;
  }

  
});

module.exports = {
  After,
  AfterAll,
};