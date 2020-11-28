/// <reference types="Cypress" />


describe('File Download Test', function() {
  var fileContents='';

  /**
   * @param source download file name
   * @param folder where to store the download.
   * @param target download file name
   */
  it('File Download Example', function() {
    
    
    cy.downloadFile('https://upload.wikimedia.org/wikipedia/en/a/a9/Example.jpg','mydownloads','Example.jpg')
   
    
  }) ;//it

  });//describe