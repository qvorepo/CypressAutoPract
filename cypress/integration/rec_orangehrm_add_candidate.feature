Feature: Upload functionality test of the homepage

   Scenario: Upload resume in the recruitment tab of the Orange HRM homepage
      Given I open OrangeHRM homepage
      When I SignIn as user
      And I click on the Recruitement tab of the homepage
      And I click on Add button to add resume
      And I fill out details
      Then I successfully submit the candidate profile
