/// <reference types="Cypress" />
describe('Task Command', () => {
  it('Should send execute something on node', () => {
    const query='select * from Persons';
    cy.task('queryDb', query).then((rows) => {
      //expect(rows).to.have.lengthOf(4);
      for(var i=0; i<rows.length; i++)
      {
        cy.log(rows[i].FirstName + " "+ rows[i].LastName + " " + rows[i].Age)
      }
      
      });
       
  }) 

  })