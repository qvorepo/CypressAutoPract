/// <reference types="Cypress" />
describe('Copy Directory Example', () => {
  
  it('Copy Directory', () => {
    //const srcDir='C:/SPC/logs';
   // const targetDir='C:/Logs_Copy/logs';

    cy.task('copyDir').then((resp) =>{

    });
       
  }) 

})