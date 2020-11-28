//import { get } from "cypress/types/lodash";

//import { contains } from "cypress/types/jquery";

//const inputUserName = '//input[@id=\'txtUsername\']';
const selCustomer='[ng-model="custId"]';
const selCurrency='#currency';
const processBtn='[type="submit"]';

class BankOpenAccount
{

    // validateTitle()
    // {
    //     cy.title().contains('Protractor practice website - Banking App');
    // }

    selectCustomer(name)
    {
        return cy.get(selCustomer).select(name)
        //cy.log('Select a customer action to be completed.')
    }

    selectCurrency(currency)
    {
        return cy.get(selCurrency).select(currency)
    }

    submitOpenAccount()
    {
        return cy.get(processBtn).click();
    }

    validateAlert()
    {
        cy.on('window:alert', (alertText)=>{
            expect(alertText).contains(alertText)

        })
    }
}
export default BankOpenAccount;