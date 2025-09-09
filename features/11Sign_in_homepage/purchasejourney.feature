@testsingleflow
Feature: Verify purchase journey

  Scenario: verify first purchase journey
    Given user is on the login screen
    When user clicks on buy a service button
    And clicks on the more info
    And clicks on buy now 
    And clicks on continues
    Then user should be able to see the address screen
