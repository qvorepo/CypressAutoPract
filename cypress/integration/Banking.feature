Feature:  Banking Feature

I want to validate Banking Scenarios

Background: 
    Given I navigate to the website

Scenario: Open Account
    When I click on Bank Manager Login Button
    And I see 'Protractor practice website - Banking App' in the title
    And I select Open Account button
    And I select Customer
    And I select Currency
    And I click on Process button
    And I validate the alert text

Scenario: Add Customer
    When I click on Bank Manager Login Button
    And I validate the page title
    And I click on Add Customer Button
    And I entered
        | firstname  | lastname  | postcode |
        | Jen        | Vo        | 98686    |
    And I click on Add Customer Button to submit
    And I validate the alert text

