/// <reference types="Cypress" />
describe('Task Command', () => {
    it('Read Directory Test', () => {

      const fileArr=new Array();
      const fileNamePrefix='.json';
      const dirPath='C:/Users/Mamga/Projects/CypressAutomationPractice'
      cy.task('readDir', dirPath).then((resp) =>{
        console.log(resp);
        if(resp.length>0)
        {
          cy.log('Files and subdirectories in ' + dirPath);
          for (var i=0; i<resp.length; i++)
          {
            if(resp[i].includes(fileNamePrefix)){
              fileArr.push(resp[i]);
              cy.log('File name ' + resp[i] + " is in index " + i)
              
            }
            
          }
          cy.log('There are ' + fileArr.length + " files in the " + dirPath + ' directory.')
        }




      });
         

    }) 

  })