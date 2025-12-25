const { Builder, By, until, Options} = require('selenium-webdriver');
const assert =require('assert');
const { time } = require('console');

describe('Google Search Test', function(){
    let driver;

    before(async function () {
        console.log('Di dalam before() hook')  
        driver = await new Builder().forBrowser('chrome').build();      
    });

    after(async function () {
        console.log('Di dalam after() hook')  
        await driver.quit();      
    });

    it('Visit Saucdemo dan cek page tittle', async function () {
        //driver = await new Builder().forBrowser('chrome').build();
        
        this.timeout(5000);
        await driver.get('https://www.saucedemo.com');
        const title = await driver.getTitle();
       
         // assert: memastikan object sama persis
        assert.strictEqual(title, 'Swag Labs');

        // inputs login
        let inputUsername = await driver.findElement(By.css('[data-test="username"]'))
        let inputPassword = await driver.findElement(By.xpath('//*[@data-test="password"]'))
        let buttonLogin = await driver.findElement(By.className('submit-button btn_action'))
        await inputUsername.sendKeys('standard_user')
        await inputPassword.sendKeys('secret_sauce')
        await buttonLogin.click()
       
    }).timeout(5000);

    it('Sorting Product From A to Z', async function() {
      
       this.timeout(3000);  
       let produk = await driver.findElement(By.css('[data-test="inventory-item-name"]'))
    
        // dropdown search
        let dropdownSort = await driver.findElement(By.xpath('//select[@data-test="product-sort-container"]'))
        await dropdownSort.click()
        let option = await driver.findElement(By.xpath('//option[text()="Name (A to Z)"]'));
        await option.click();

        // close browser
        // await driver.quit();
    
    }).timeout(3000);
});