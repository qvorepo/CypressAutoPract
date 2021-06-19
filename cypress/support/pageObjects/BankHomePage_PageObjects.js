//import { get } from "cypress/types/lodash";

//import { contains } from "cypress/types/jquery";

//const inputUserName = '//input[@id=\'txtUsername\']';
const bankManagerLoginBtn='[ng-click="manager()"]';

class HomePage
{
    launchPage()
    {
        cy.visit('http://www.way2automation.com/angularjs-protractor/banking');
    }

    validateTitle(title)
    {
        cy.title().should('include', title);
        
    }

    validateTitle2(title)
    {
        cy.title().should('include', title);
        
    }

    getFirstNameInput()
    {
        return cy.get(inputFirstName);

    }

    getLastNameInput()
    {
        return cy.get(inputLastName);

    }
    getPostalCodeInput()
    {
        return cy.get(inputPostalCode);

    }

    loginAsBankManager()
    {
        return cy.get(bankManagerLoginBtn).click();
    }

}
export default HomePage;