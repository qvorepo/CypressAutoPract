/// <reference types="Cypress" />
import 'cypress-iframe';

describe('iFrame Example', () => {
    it('Open SeleniumPractise Page', () => {
      cy.visit('https://www.rahulshettyacademy.com/AutomationPractice/');
     
      cy.frameLoaded("[name='iframe-name']");
      cy.iframe().find('a[href*="mentorship"]').eq(0).click();
      //cy.iframe().contains("Mentorship can be a significant part of your overall career success").should('have.length',1);
      cy.iframe().find('h1.pricing-title').should('have.length',2);
    }) 

  })