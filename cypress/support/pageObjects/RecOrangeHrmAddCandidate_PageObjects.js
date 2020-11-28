//import { get } from "cypress/types/lodash";

//const inputUserName = '//input[@id=\'txtUsername\']';
const inputAddCandidate_firstName='#addCandidate_firstName';
const inputAddCandidate_middleName='#addCandidate_middleName';
const inputAddCandidate_lastName='#addCandidate_lastName';
const inputAddCandidate_email='#addCandidate_email';
const inputAddCandidate_contactNumber='input[name*="contactNo"]';// Name contails contactNo
const selectAddCandidate_vacancy='#addCandidate_vacancy';//Vacancy
const chooseFileBtn='[type="file"]';
const inputAddCandidate_keywords='input[name*="keyWords"]';
const inputAddCandidate_comment='#addCandidate_comment';
const checkAddCandidate_consentToKeepData='#addCandidate_consentToKeepData';
const saveButton='input[value="Save"]';
const strSuccessfulMsg='Successfully Saved';


class RecOrangeHrmAddCandidatePage
{
    enterFirstName (firstName)
    {
        return cy.get(inputAddCandidate_firstName).clear().type(firstName);
    }

    enterMiddleName (middleName)
    {
        return cy.get(inputAddCandidate_middleName).clear().type(middleName);
    }

    enterLastName (lastName)
    {
        return cy.get(inputAddCandidate_lastName).clear().type(lastName);
    }

    enterEmail(email)
    {
        return cy.get(inputAddCandidate_email).clear().type(email);
    }

    enterContactNumber(number)
    {
        return cy.get(inputAddCandidate_contactNumber).clear().type(number);
    }

    selectVacancy(title)
    {
        return cy.get(selectAddCandidate_vacancy).select(title);

    }

    uploadResume()
    {
        const fileName='Resume.txt';
        cy.readFile('.//cypress//fixtures//Resume.txt').then((fileContent)=>{
            cy.get(chooseFileBtn).attachFile({fileContent, fileName, mimeType: 'application/txt' });
            
        });
    }

    enterKeywords(keywords)
    {
        cy.get(inputAddCandidate_keywords).clear().type(keywords)

    }

    addComments(comments)
    {
        cy.get(inputAddCandidate_comment).clear().type(comments)
    }

    clickConsent()
    {
        cy.get(checkAddCandidate_consentToKeepData).click();
    }

    clickSaveButton()
    {
        cy.get(saveButton).click();
    }

    verifyProfileSubmission()
    {
        cy.contains(strSuccessfulMsg).should('contain', strSuccessfulMsg);
    }
   

}
export default RecOrangeHrmAddCandidatePage;