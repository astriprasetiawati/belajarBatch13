import { APIDemosPage } from "../pageobjects/apidemos.page";

export class APIDemosActions{
    async waitForAppBtn(){
        await APIDemosPage.appBtn().waitForDisplayed({timeout: 5000});
    }

    async clickAppBtn(){
        await APIDemosPage.appBtn().click();
    }

    async alertDialogsBtn(){
        await APIDemosPage.alertDialogsBtn().click();
    }

    async textEntryDialog(){
        await APIDemosPage.textEntryDialog().click();
    }

    async ClickSearchBtn(){
        await APIDemosPage.searchBtn().click();
    }

    async ClickInvokeSearchBtn(){
        await APIDemosPage.InvokeSearchBtn().click();
    }

    async fillQueryField(query: string){
        await APIDemosPage.fillQueryField().setValue(query);
    }

    async inputName(query: string){
        await APIDemosPage.inputName().setValue(query);
    }

    async inputPassword(query: string){
        await APIDemosPage.inputPassword().setValue(query);
    }

     async clickOkBtn(){
        await APIDemosPage.okBtn().click();
    }

}