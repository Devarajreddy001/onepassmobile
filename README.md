# 🤖⚙️🔧🦾👩‍💻💻🎭 QA Automation

# Tech Stack
   ## Tool: Playwright🎭
   ## Language : JavaScript or TypeScript
   ## Reporting: Allure Reporting and Built-in Reports
   ## Framework: POM with BDD and cucumber 
   ## Version controller : Bitbucket
   
 

once after the clone is done run this command in the project folder 

```Shell
# Run from your project's root directory
npm i
```

## Running the Test

```sh
npx playwright test
```

## Allure Reports Installation

1) Installation of "allure-playwright" module
```sh
npm i -D @playwright/test allure-playwright
```

2) Installing Allure command line
Ref: https://www.npmjs. com/package/allure-command line

```sh
npm install -g allure-commandline --save-dev
```
(or)
```sh
sudo npm install -g allure-commandline --save-dev
```

3) playwright.config-js
```sh
reporter= l'allure-playwright', {outputFolder: 'my-allure-results'}]
```
(or)
```sh
npx playwright test --reporter=allure-playwright
```

## how to Run the test suit

Run the tests
```sh
npm test tests/Reporters.spec.js
```

## How to Generate and Open Allure Report 

1) Generate Allure Report:
```sh
allure generate allure-results -o allure-report --clean
```
Make sure Java is installed in this system 

2) Open Allure Report:
```sh
allure open allure-report
```

## Chrome Extensions

Playwright a chrome extension. You can record using Playwright Record directly on your browser. Just attach the tabs you want to record, by using the context menu or the action button.

install the extension

```sh
 Playwright CRX
```

then open the browser and start using it.

## Run the feature file

1) To run all the feature files
```sh
npm run test
```

2) To run a single feature file
```sh
 npx cucumber-js <relative-path> --require stepdefinitions
 npx cucumber-js features/01Sign_in/login.feature --require stepdefinitions
 ```