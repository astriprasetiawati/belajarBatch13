import { Builder, By} from 'selenium-webdriver';
import assert from 'assert';
import { time } from 'console';
import fs from 'fs';
import { PNG } from "pngjs";
import pixelmatch from "pixelmatch";
import PageLogin from '../pages/page_login.js';

describe('Login Test', function(){
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

    // hook afterEach buat screenshot jika test gagal
    afterEach(async function() {
        if (this.currentTest.state === 'failed') {
            let ss_full = await driver.takeScreenshot();
            fs.writeFileSync("ss failed: " + this.currentTest.title + ".png", Buffer.from(ss_full, "base64"));
        }
    });

    it('Visit Saucdemo, login POM, visual halaman login', async function () {
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

        // screenshot keadaan login page sekarang, current.png
        let screenshot = await driver.takeScreenshot();
        let imgBuffer = Buffer.from(screenshot, "base64");
        fs.writeFileSync("current_login.png", imgBuffer);

        // ambil baseline untuk komparasi
        // jika belum ada baseline, jadikan current.png sebagai baseline
        if (!fs.existsSync("baseline_login.png")) {
            fs.copyFileSync("current_login.png", "baseline_login.png");
            console.log("Baseline image saved.");
        }

        // Compare baseline.png dan current.png apakah sama
        let img1 = PNG.sync.read(fs.readFileSync("baseline_login.png"));
        let img2 = PNG.sync.read(fs.readFileSync("current_login.png"));
        let { width, height } = img1;
        let diff = new PNG({ width, height });

        let numDiffPixels = pixelmatch(img1.data, img2.data, diff.data, width, height, { threshold: 0.1 });

        fs.writeFileSync("diff_login.png", PNG.sync.write(diff));

        if (numDiffPixels > 0) {
            console.log(`Visual differences found! Pixels different: ${numDiffPixels}`);
        } else {
            console.log("No visual differences found.");
        }

        await buttonLoginPOM.click()
       
    });

    it('Cek Visual halaman list produk', async function () {

        // screenshot keadaan list product page sekarang, current_product.png
        let screenshot1 = await driver.takeScreenshot();
        let imgBuffer1 = Buffer.from(screenshot1, "base64");
        fs.writeFileSync("current_product.png", imgBuffer1);

        // ambil baseline untuk komparasi
        // jika belum ada baseline, jadikan current_product.png sebagai baseline_product
        if (!fs.existsSync("baseline_product.png")) {
            fs.copyFileSync("current_product.png", "baseline_product.png");
            console.log("Baseline product image saved.");
        }

        // Compare baseline_product.png dan current_product.png apakah sama
        let img1 = PNG.sync.read(fs.readFileSync("baseline_product.png"));
        let img2 = PNG.sync.read(fs.readFileSync("current_product.png"));
        let { width, height } = img1;
        let diff = new PNG({ width, height });

        let numDiffPixels = pixelmatch(img1.data, img2.data, diff.data, width, height, { threshold: 0.1 });

        fs.writeFileSync("diff_product.png", PNG.sync.write(diff));

        if (numDiffPixels > 0) {
            console.log(`Visual differences found! Pixels different: ${numDiffPixels}`);
        } else {
            console.log("No visual differences found.");
        }
    })
});