import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import LoginPage from '../../support/pageObjects/LoginOrangehrm_PageObjects';

const loginPage=new LoginPage();

    Given('I open OrangeHRM homepage', () => {
      loginPage.launchPage();
      
    });
    When('I SignIn as user', () => {
      loginPage.signIn();

     });//When

    Then('The user name should be displayed', () => {
      loginPage.verifyWelcomeMessage();

    });//Then

    And('The Dashboard should be displayed', () => {
      loginPage.verifyDashboard();

    });//Then


