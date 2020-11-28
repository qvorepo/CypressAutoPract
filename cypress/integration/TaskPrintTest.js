/// <reference types="Cypress" />
describe('Task Command Example', () => {
    it('Should send execute something on node', () => {
      cy.task('print', 'Hello World!').then((resp) =>{
        console.log(resp);
      });
         

    }) 

  })