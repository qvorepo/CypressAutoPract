/// <reference types="Cypress" />
describe('Dropdown Select Example', () => {
    it('Dropdown Select Test', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/');
     
      cy.get('#txtUsername').clear().type('Admin');
      cy.get('#txtPassword').clear().type('admin123');
      cy.get('input[type=submit]').click();
     
      cy.get('#menu_directory_viewDirectory').click();
      cy.get('#searchDirectory_job_title').select('HR Manager');// This is the essense of the test/example.
         

    }) 

  })