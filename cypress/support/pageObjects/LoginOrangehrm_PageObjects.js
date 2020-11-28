//import { get } from "cypress/types/lodash";

const inputUserName = '//input[@id=\'txtUsername\']';
const inputUserPassword='[id="txtPassword"]';
const submitBtn='[id="btnLogin"]';
const labelWelcome='[id="welcome"]';
const dashboard='.head h1';

class LoginOrangeHrmPage
{
    launchPage()
    {
        cy.visit('https://opensource-demo.orangehrmlive.com/');
    }

    enterUsername (args) {
        cy.xpath(inputUserName)
                .click()
                .clear()
                .type(args)
    }

    enterPassword (args) 
    {
        cy.get(inputUserPassword)
                .click()
                .clear()
                .type(args)
    }

    clickSubmit()
    {
        cy.get(submitBtn).click();
    }

    signIn()
    {
        cy.fixture('testData').then((data)=> {
            this.enterUsername(data.userName);
            this.enterPassword(data.password);
        });
        
        this.clickSubmit();
    }

    verifyWelcomeMessage()
    {
        cy.fixture('testData').then((data)=> {
            cy.get(labelWelcome).invoke('text').should('contain', `Welcome ${data.firstName}`);
        });
    }

    verifyDashboard()
    {
        cy.get(dashboard).invoke('text').should('equal', 'Dashboard');
    }

}
export default LoginOrangeHrmPage;