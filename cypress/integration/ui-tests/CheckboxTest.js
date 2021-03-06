/// <reference types="Cypress" />
describe('Checkbox Example', () => {
    it('Open SeleniumPractise Page', () => {
      cy.visit('https://www.rahulshettyacademy.com/AutomationPractice/');
     
      cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1');
      cy.get('#checkBoxOption1').uncheck().should('not.be.checked');
      cy.get('input[type="checkbox"').check(['option1', 'option3']);


         

    }) 

  })