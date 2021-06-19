
import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';
import HomePage from '../../support/pageObjects/BankHomePage_PageObjects';
import AddCustomerPage from '../../support/pageObjects/BankAddCustomer_PageObjects';
import OpenAccountPage from '../../support/pageObjects/BankOpenAccount_PageObjects';
import ManagerPage from '../../support/pageObjects/BankManagerPage_PageObjects';

const addCustomerPage=new AddCustomerPage();
const homePage=new HomePage();
const openAccountPage=new OpenAccountPage();
const managerPage=new ManagerPage();

    Given('I navigate to the website', () => {
        homePage.launchPage();
      
    });
    When('I click on Bank Manager Login Button', () => {
        homePage.loginAsBankManager();
     });//When

    And(`I see {string} in the title`, (title) => {
        //Protractor practice website - Banking App'
        homePage.validateTitle2('Protractor practice website - Banking App');
        
    });//Then

    And('I validate the page title', (title) => {
        //Protractor practice website - Banking App'
        homePage.validateTitle('Protractor practice website - Banking App');
        
    });//Then    

    And('I click on Add Customer Button', () => {
        managerPage.addCustomer();
      });

    And('I entered', (datatable) => {
        datatable.hashes().forEach(element => {
            addCustomerPage.addCustomerDetails(element.firstname, element.lastname, element.postcode);
        });
    });    
    
    And('I click on Add Customer Button to submit', () => {
        addCustomerPage.submitCustomerDetails();
    }); 

    And('I validate the alert text', () => {
        addCustomerPage.validateAlert();
    }); 


    /**
     * Open Account
     */
    And('I select Open Account button', ()=>{
        managerPage.openAccount();
    })

    And('I select Customer', () => {
        openAccountPage.selectCustomer('Harry Potter');
    }); 

    And('I select Currency', () => {
        openAccountPage.selectCurrency('Dollar');
    });

    And('I click on Process button', () => {
        openAccountPage.submitOpenAccount();
    }); 

    And('I validate the alert text', () => {
        openAccountPage.validateAlert();

    }); 


        
    


    


