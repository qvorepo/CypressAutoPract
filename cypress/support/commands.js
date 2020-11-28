// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
import 'cypress-file-upload'
require('cypress-downloadfile/lib/downloadFileCommand');
//import 'crypto-js';

Cypress.Commands.add("selectProduct", (productName) => 
{ 
    cy.get('h4.card-title').each(($el, index, $list) =>{
        if($el.text().includes(productName))
        {
            cy.get('button.btn.btn-info').eq(index).click();
        }
  
      }); 

})



/**
 * Read a directory and read all of its file contents,
 * and combine all contents with the matched file name
 * Return the contents.
 */
Cypress.Commands.add("readDirAndCombineFileContents", (dateToSearchStr, serviceName) => {
    var allFilesContent='';
    const dirPath='C:/SPC/logs'
    const fileNamePrefix=serviceName+dateToSearchStr;
  
    cy.task('readDir', dirPath).then((resp) =>{
      for(var i=0; i<resp.length; i++)
      {
        if(resp[i].includes(fileNamePrefix)) 
        {
          const filePath=dirPath+'/'+ resp[i];
          cy.task('readFile', filePath).then((fileContent)=>{
  
            allFilesContent=allFilesContent+fileContent;
            return allFilesContent;
            
          });
        }
  
      }
    });
  });
  
  /**
   * Create UUIDV4
   */
  Cypress.Commands.add("getUuidv4", () => {
    return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
      (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
  });