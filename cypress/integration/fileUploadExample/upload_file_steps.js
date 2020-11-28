import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';
import BerkeleyHomePage from '../../support/pageObjects/BerkeleyHomePage_PageObjects';

const berkeleyHomePage=new BerkeleyHomePage();

    Given('I visit Berkeley EDU homepage', () => {
      berkeleyHomePage.launchPage();
      
    });
    When('I select Choose File', () => {
      berkeleyHomePage.chooseFile();

     });//When

    Then('I enter notes about the file', () => {
      berkeleyHomePage.enterNotes();

    });//Then

    Then('I click on Press button', () => {
      berkeleyHomePage.clickPressButton();
  
      });//Then

    And('The file is uploaded successfully', () => {
      berkeleyHomePage.verifyUploadResults();

    });//Then


