/// <reference types="Cypress" />

describe('Random UUID Test', ()=>{

  it('Random UUID Example', function() {
    
	//const num=Math.random().toString().substr(2,8); // Output 86487918
	
	cy.getUuidv4().then((value)=>{
		cy.log("Random UUID " +value);
	});
	


  }) ;//it

  });//describe