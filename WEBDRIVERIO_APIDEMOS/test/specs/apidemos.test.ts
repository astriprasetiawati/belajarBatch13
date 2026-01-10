import { APIDemosActions } from "../actions/apidemos.actions.ts";

const apiDemosActions = new APIDemosActions();

describe("ApiDemos", async() => {
    it("API Demos menu App - Alert Dialogs - Text Entry Dialogs", async() => {
        await apiDemosActions.waitForAppBtn();
        await apiDemosActions.clickAppBtn();
       // await apiDemosActions.ClickSearchBtn();
       //await apiDemosActions.ClickInvokeSearchBtn();
       // await apiDemosActions.fillQueryField("Hello");
       // await apiDemosActions.fillAppDataField("Hello");

       await apiDemosActions.alertDialogsBtn();
       await apiDemosActions.textEntryDialog();
       await apiDemosActions.inputName("astri");
       await apiDemosActions.inputPassword("astri12345678");
       await apiDemosActions.clickOkBtn();

      // expect (await apiDemosActions.inputName()).toEqual("astri");
      // expect (await apiDemosActions.inputPassword()).toEqual("astri12345678");

    });

});