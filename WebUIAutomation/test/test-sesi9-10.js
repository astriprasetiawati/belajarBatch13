// const { Builder, By, until, Options} = require('selenium-webdriver');
// const assert =require('assert');
// const { time } = require('console');
import { Builder, By} from 'selenium-webdriver';
import assert from 'assert';
import { time } from 'console';
//import chrome from 'selenium-webdriver/chrome.js';
import fs from 'fs';
import { PNG } from "pngjs";
import pixelmatch from "pixelmatch";
import PageLogin from '../pages/page_login.js';

describe('Login test', function(){
    let driver;

    this.timeout(60000);

    before(async function () {
        console.log('Di dalam before() hook')  
        driver = await new Builder().forBrowser('chrome').build();      
    });

    after(async function () {
        console.log('Di dalam after() hook')  
        await driver.quit();      
    });

    it('Visit Saucdemo dan Login', async function () {
        //driver = await new Builder().forBrowser('chrome').build();
        
        await driver.get('https://www.saucedemo.com');
        const title = await driver.getTitle();
       
         // assert: memastikan object sama persis
        assert.strictEqual(title, 'Swag Labs');

        // inputs login
        // let inputUsername = await driver.findElement(By.css('[data-test="username"]'))
        let inputUsernamePOM = await driver.findElement(PageLogin.inputUsername)
        
        //let inputPassword = await driver.findElement(By.xpath('//*[@data-test="password"]'))
        let inputPasswordPOM = await driver.findElement(PageLogin.inputPassword)
        
        //let buttonLogin = await driver.findElement(By.className('submit-button btn_action'))
        let buttonLoginPOM = await driver.findElement(PageLogin.buttonLogin)
        
        await inputUsernamePOM.sendKeys('standard_user')
        await inputPasswordPOM.sendKeys('secret_sauce')
        await buttonLoginPOM.click()
       
    });

    it('Sorting Product From A to Z', async function() {
      
        let produk = await driver.findElement(By.css('[data-test="inventory-item-name"]'))
    
        // dropdown search
        let dropdownSort = await driver.findElement(By.xpath('//select[@data-test="product-sort-container"]'))
        await dropdownSort.click()
        let option = await driver.findElement(By.xpath('//option[text()="Name (A to Z)"]'));
        await option.click();

        // close browser
        // await driver.quit();
    
    });

});