@testsingleflow
Feature: Verify login and sign in functionality

Scenario Outline: Login with different combinations of username and password
  Given user is on the homepage
  When I enter "<username>" as username
  And I enter "<password>" as password
  And I click the login button
  Then I should see "<expected result>"

  Examples:
    | username           | password     | expected result                   |
    | test2@yopmail.com  | Aa@testing22 | Welcome to Your Account           |
    
