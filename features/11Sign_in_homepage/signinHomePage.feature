
Feature: Verify Network coverage

  Scenario: verify Network coverage by passing some value
    Given user is on the homepage
    When user clicks on the network tab
    And clicks on the Network coverage
    And enters the text in the search
    Then user should be able to see the validation message

  Scenario: verify Network status by passing some value
    Given user is on the homepage
    When user clicks on the network tab
    And clicks on the Network status
    And enters the text in the search
    Then user should be able to see the validation message for network status search

  
