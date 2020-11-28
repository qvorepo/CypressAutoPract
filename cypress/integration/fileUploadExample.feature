Feature: File Upload Example on Berkeley EDU Homepage

   Scenario: User upload files on the berkeley.edu website
      Given I visit Berkeley EDU homepage
      When I select Choose File
      Then I enter notes about the file
      Then I click on Press button
      Then The file is uploaded successfully
