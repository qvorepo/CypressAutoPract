//import { get } from "cypress/types/lodash";

//import { contains } from "cypress/types/jquery";

//const inputUserName = '//input[@id=\'txtUsername\']';
const inputFirstName='input[ng-model="fName"]';
const inputLastName='input[ng-model="lName"]';
const inputPostalCode='input[ng-model="postCd"]';
const addCustomerBtn='[type="submit"]';


class BankAddCustomer
{
    // launchPage()
    // {
    //     cy.visit('http://www.way2automation.com/angularjs-protractor/banking');
    // }

    validateTitle()
    {
        cy.title().contains('Protractor practice website - Banking App');
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

    submitCustomerDetails()
    {
        return cy.get(addCustomerBtn).click();
    }

    addCustomerDetails(firstName, lastName, postalCode)
    {
        this.getFirstNameInput().clear().type(firstName);
        this.getLastNameInput().clear().type(lastName);
        this.getPostalCodeInput().clear().type(postalCode);
    }

    validateAlert()
    {
        cy.on('window:alert', (alertText)=>{
            expect(alertText).contains("Customer added successfully with customer id :")
        })
    }

}
export default BankAddCustomer;