//import { get } from "cypress/types/lodash";

//import { contains } from "cypress/types/jquery";

//const inputUserName = '//input[@id=\'txtUsername\']';
const inputUploadFile='[name="upfile"]';
const inputNote='[name="note"]';
const submitBtn='[type="submit"]';
const uploadResultsHeading='h1';


class BerkeleyHomepage
{
    launchPage()
    {
        cy.visit('https://cgi-lib.berkeley.edu/ex/fup.html');
    }

    enterNotes()
    {
        cy.get(inputNote).clear().type('This is my resume');
    }

    clickPressButton()
    {
        cy.get(submitBtn).click();
    }

    chooseFile()
    {
        const fileName='Resume.txt';
        cy.readFile('.//cypress//fixtures//Resume.txt').then((fileContent)=>{
            cy.get(inputUploadFile).attachFile({fileContent, fileName, mimeType: 'application/txt' });
            
        });
    }

    verifyUploadResults()
    {
        
        cy.get(uploadResultsHeading).invoke('text').then((heading)=>{
            expect(heading).to.equal('File Upload Results');
        });
        cy.get('p').first().invoke('text').then((results)=>{
            expect(results).to.contain('You\'ve uploaded a file.');
        });
    }

}
export default BerkeleyHomepage;