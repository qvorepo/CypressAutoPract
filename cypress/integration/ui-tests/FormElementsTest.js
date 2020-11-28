/// <reference types="Cypress" />
describe('Form Element Example', () => {
    it('Open SeleniumPractise Page', () => {
      cy.visit('https://www.rahulshettyacademy.com/AutomationPractice/');
     
      cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1');
      cy.get('#checkBoxOption1').uncheck().should('not.be.checked');
      cy.get('input[type="checkbox"').check(['option1', 'option3']);

      cy.get('#dropdown-class-example').select('option2').should('have.value', 'option2');

      cy.get('#autocomplete').type('Ind');
      cy.get('#ui-id-1 li').each(($el, index, $list) => {
        if($el.text()=='India')
        {
          $el.click();
        }
      });
      //Assertion
      cy.get('#autocomplete').should('have.value', 'India');

      //Assertion elements for visible/invible
      cy.get('#displayed-text').should('be.visible');
      
      //Hide the text
      cy.get('#hide-textbox').click();
      cy.get('#displayed-text').should('not.be.visible');

      //Show the text
      
      cy.get('#show-textbox').click();
      cy.get('#displayed-text').should('be.visible');

      cy.get('input[type="radio"][value="radio2"]').click();

      

         

    }) 

  })