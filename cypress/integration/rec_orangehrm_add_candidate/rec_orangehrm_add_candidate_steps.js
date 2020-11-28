import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import LoginPage from '../../support/pageObjects/LoginOrangehrm_PageObjects';
import RecHomePage from '../../support/pageObjects/RecOrangeHrm_PageObjects';
import RecAddCandidatePage from '../../support/pageObjects/RecOrangeHrmAddCandidate_PageObjects';


const loginPage=new LoginPage();
const recHomePage=new RecHomePage();
const recAddCandidatePage=new RecAddCandidatePage();

    Given('I open OrangeHRM homepage', () => {
        loginPage.launchPage();
      
    });
    When('I SignIn as user', () => {
        loginPage.signIn();

     });//When

    Then('I click on the Recruitement tab of the homepage', () => {
        recHomePage.clickRecruitementTab();

    });//Then

    And('I click on Add button to add resume', () => {
        recHomePage.clickAddBtn();

    });

    And('I fill out details', () => {
        recAddCandidatePage.enterFirstName('Jane');
        recAddCandidatePage.enterMiddleName('T.');
        recAddCandidatePage.enterLastName('Doe');
        recAddCandidatePage.enterEmail('a@b.com');
        recAddCandidatePage.enterContactNumber('360-090-1111');
        recAddCandidatePage.selectVacancy('Senior QA Lead');
        recAddCandidatePage.uploadResume();
        recAddCandidatePage.enterKeywords('QA Analyst/Quality Engineering Resume');
        recAddCandidatePage.addComments('This is my QA resume');
        recAddCandidatePage.clickConsent();
        recAddCandidatePage.clickSaveButton();

    });

    Then('I successfully submit the candidate profile', () => {
        recAddCandidatePage.verifyProfileSubmission();

    });      




