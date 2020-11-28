/// <reference types="Cypress" />
/**
 * This is an example of an assertion after file download.
 * Source:  https://viveknayyar.medium.com/e2e-testing-of-excel-downloads-with-cypress-d6e46ccdc232
 * Parse the excel file and assert the header row.
 */
describe('Excel File Content Assertion', () => {
    it('Excel File Content Test', () => {
      const data=[
        "Error Code", 
      "Count Prior To Fix", 
      "Count After Fix"
        ];

        // check for existence of the button on the ui and then click it
//cy.get("[data-test-id=export-template-btn")
//.should("be.visible")
//.click();

// arbitrary wait so that the download can complete
//cy.wait(2000);
const dirPath='mydownloads/ExcelData.xlsx'; 
cy.task('parseExcel', dirPath).then((jsonData) =>{
  expect(jsonData[0].data[0]).to.deep.eq(data);//Deeply equal

})
 
      

    }) 

  })