//import { get } from "cypress/types/lodash";

//import { contains } from "cypress/types/jquery";

//const inputUserName = '//input[@id=\'txtUsername\']';

const addCustomerBtn='[ng-click="addCust()"]';
const openAccountBtn='[ng-click="openAccount()"]';



class BankManagerPage
{
    // launchPage()
    // {
    //     cy.visit('http://www.way2automation.com/angularjs-protractor/banking');
    // }

    addCustomer()
    {
        cy.get(addCustomerBtn).click();
    }

    openAccount()
    {
        cy.get(openAccountBtn).click();
    }

}
export default BankManagerPage;