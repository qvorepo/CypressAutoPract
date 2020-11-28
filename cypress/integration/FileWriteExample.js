/// <reference types="Cypress" />
describe('File Write Example', () => {
    it('File Write Test', () => {
     
      var errorCounts = [
        ['\"103-ServiceChecker-8\"', 9],
        ['Device is unhealthy because:', 15],
        ['All critical services are healthy', 2],
        ['\"103-ServiceHealthCheckActor-3\"', 1]
      ];//End errorCount

      var searchString0='Device is unhealthy because:';

      for(var i=0; i<errorCounts.length; i++ )
      {
        var searchString=errorCounts[i][0];
        if(searchString.includes(searchString0))
        {
          errorCounts[i][1]=1972;
          
        }
        cy.log(errorCounts[i])
      }//End for loop

      cy.writeFile('./cypress/fixtures/errorCount.json', JSON.stringify(errorCounts));



    }) 

  })