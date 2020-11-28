/// <reference types="Cypress" />
describe('Mouse Hover Test', () => {
    it('Open SeleniumPractise Page', () => {
      cy.visit('https://www.rahulshettyacademy.com/AutomationPractice/');
      Cypress.config("defaultCommandTimeout", 15000);
      cy.get('.mouse-hover-content').invoke('show');
      cy.contains('Top').click();
      cy.url().should('include', 'top');
     

    }) 

  })