//import { get } from "cypress/types/lodash";

//const inputUserName = '//input[@id=\'txtUsername\']';
const recruitmentTab='[id="menu_recruitment_viewRecruitmentModule"]';
const addBtn='[name="btnAdd"]';



class RecOrangeHrmPage
{
    clickRecruitementTab()
    {
        cy.get(recruitmentTab).click();
    }

    clickAddBtn()
    {
        cy.get(addBtn).click();
    }



}
export default RecOrangeHrmPage;