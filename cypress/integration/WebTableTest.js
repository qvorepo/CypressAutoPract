/// <reference types="Cypress" />
describe('Web Table EXample', () => {
    it('Open SeleniumPractise Page', () => {
      cy.visit('https://www.rahulshettyacademy.com/AutomationPractice/');
     
      cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1');
      cy.get('#checkBoxOption1').uncheck().should('not.be.checked');
      cy.get('input[type="checkbox"').check(['option1', 'option3']);

      //Web table
      cy.get('tr td:nth-child(2)').each(($el, index, $list)=> {
        const text= $el.text();
        if(text.includes('Python'))
        {
          cy.get('tr td:nth-child(2)').eq(index).next().then(function(price)
          {
            const priceText=price.text();
            expect(priceText).to.equal('25');
          })
        }

      });
         

    }) 

  })