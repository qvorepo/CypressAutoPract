/// <reference types="Cypress" />
describe('Manipulae DOM Example', () => {
    it('Open SeleniumPractise Page', () => {
      const url ="https://www.rahulshettyacademy.com/AutomationPractice/";
      cy.visit(url);
     
      cy.get('#alertbtn').click();
      cy.get('input[value="Confirm"]').click();
      
      cy.on('window:alert', (str) => {
        //Mocha
        expect(str).to.equal('Hello , share this practice page and share your knowledge');
      })

      cy.on('window:confirm', (str) =>{
        //Mocha
        expect(str).to.equal('Hello , Are you sure you want to confirm?');
      })

      cy.get('#opentab').invoke('removeAttr','target').click();
      cy.url().should('include','www.rahulshettyacademy.com/#/index');

      cy.go('back');
      cy.url().should('include', url);
         
    

    }) //for it

  })//for describe