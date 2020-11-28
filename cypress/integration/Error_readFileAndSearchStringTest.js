/// <reference types="Cypress" />
describe('Task Command', () => {
    it('Read File Test', () => {
      const path='.//cypress//fixtures//Resume.txt';
      const searchPhrase='My Resume';
      const searchPhrase1='\"103-ServiceChecker-8\"';
      cy.task('readFile', path).then((resp) =>{
        console.log(resp);
        if(resp.includes(searchPhrase))
        {
          cy.log('"' + searchPhrase +'"' +  ' phrase exists in file ' + path);
        }

        //var temp = "103-ServiceChecker-8";
var count = (resp.match(/103-ServiceChecker-8/g) || []).length;

cy.log('Phrase "103-ServiceChecker-8" exists ' + count + ' times in the file.');
       

      });
         

    }) 

  })