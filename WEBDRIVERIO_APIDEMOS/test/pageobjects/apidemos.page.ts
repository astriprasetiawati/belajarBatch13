export class APIDemosPage {
    static appBtn(){
        return $('//android.widget.TextView[@content-desc="App"]');
    }

    static alertDialogsBtn(){
        return $('//android.widget.TextView[@content-desc="Alert Dialogs"]');
    }

     static textEntryDialog(){
        return $('//android.widget.Button[@content-desc="Text Entry dialog"]');
    }

    static searchBtn(){
        return $('//android.widget.TextView[@content-desc="Search"]');
    }

    static InvokeSearchBtn(){
        return $('//android.widget.TextView[@content-desc="Invoke Search"]');
    }

    static fillQueryField(){
        return $('//android.widget.TextView[@content-desc="Invoke Search"]');
    }

    static inputName(){
        return $('//android.widget.EditText[@resource-id="io.appium.android.apis:id/username_edit"]');
    }

    static inputPassword(){
        return $('//android.widget.EditText[@resource-id="io.appium.android.apis:id/password_edit"]');
    }

    static okBtn(){
        return $('//android.widget.Button[@resource-id="android:id/button1"]');
    }

}