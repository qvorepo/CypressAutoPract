/// <reference types="Cypress" />
describe('Combine Several Log files Into One', () => {

  /** 
 * Read a directory, get its files, combine all contents, then write to file.
 * @param dateToSearch
 * @param serviceName
 * output CombinedFile.txt
 */
it('Read a directory, get its files, combine all contents, then write to a file.', () => {
  const dateToSearch='20201023';
  const serviceName='Services_Gateway';

  cy.readDirAndCombineFileContents(dateToSearch, serviceName).then((output)=>{
    cy.writeFile('./cypress/fixtures/CombinedFile.txt', output ,{ timeout: 120000 });//2 minutes
  });

}) //End first it block



})