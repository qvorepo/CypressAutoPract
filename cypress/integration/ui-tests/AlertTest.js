/// <reference types="Cypress" />
describe('Alert Example', () => {
    it('Open SeleniumPractise Page', () => {
      cy.visit('https://www.rahulshettyacademy.com/AutomationPractice/');
     
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
         

    }) 

  })