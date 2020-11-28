/// <reference types="Cypress" />
describe('Get Error Counts and Write to Excel', () => {
  var errorCounts='';

/** 
 * Read the excel input file for the error codes,
 * count prior to fix, and default third column value of 0.
 * @param ErrorCodes.xlxs
 * Output Excel file containing the same three columns.
 */
  it('Get error count matching the error codes in the ErrorCodes.xlxs spreadsheet and write to Excel.', () => {
    //Services_OrderRouter, Services_Gateway, Services_Health
    const currentDate=Cypress.moment().format('YYYY MM DD');
    const searchString='';
    let regExp = new RegExp(searchString, 'g');

    const file='./cypress/fixtures/ErrorCodes.xlsx';
    cy.task('readExcel', file).then((rows) =>{
      errorCounts=rows;
    });

    var file2='./cypress/fixtures/CombinedFile.txt';
    cy.readFile(file2).then((output)=>{

      const searchString='';
      let regExp = new RegExp(searchString, 'g');
      var countOfSearchString=0;
      errorCounts.forEach((errorCount, index)=>{
        //The first row is the header row, no need to search.
        if(index>0)
        {
          regExp=new RegExp(errorCount[0], 'g');
        let count = (output.match(regExp) || []).length;
        //countOfSearchString=countOfSearchString+ count;
        errorCount[2]=count;
        cy.log('index ' + index + ' searchString ' +  errorCount[0] + " count "+ errorCount[2]);

        }

      })//forEach errorCounts

      cy.task('writeToExcel', errorCounts).then((resp) =>{

      });

    });
       

  }) 

})