/// <reference types="Cypress" />


describe('File Read Example', function() {
  var fileContents='';

  it('Read a json file and print its contents in the logs.', function() {
    
   cy.readFile('./cypress/fixtures/Resume2.json').then((output)=>{
    fileContents=JSON.stringify(output);
    
    cy.log('fileContents ' + fileContents.toString());
    
   });
   
    
  }) ;//it

  });//describe