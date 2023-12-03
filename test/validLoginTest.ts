import { expect, assert} from 'chai';
import { WebDriver, Builder, By } from 'selenium-webdriver';
import * as chrome from 'selenium-webdriver/chrome';
import 'chromedriver';
import { Main } from '../src/components/main';
import { App } from '../src/app';
import { DataURL } from '../src/components/data/data';

let compMain = new Main();
let ObjApp: App;

describe('Test Case: Validate Successful Login', async function () {
    let driver: WebDriver;

    before(async function () {
        driver = await App.buildDriver();
        driver = await new Builder().forBrowser('chrome').build();
        ObjApp = new App(driver); // Pass the driver instance here
        await driver.manage().window().maximize(); // Maximize the browser window
    });

    after(async function () {
        await driver.quit(); // Close the driver after each test case
    });

    it('Step 1: Open Browser', async function () {
    await driver.get('https://www.saucedemo.com'); // Navigate to the website
    
    await ObjApp.verifyTitle();
    });

    it('Step 2: Input in the application with valid username', async function () {
    await ObjApp.insertText(By.id(compMain.userNameInput), 'standard_user');
    });

    it('Step 3: Input in the application with valid password', async function () {        
    await ObjApp.insertText(By.id(compMain.userPassInput), 'secret_sauce ');
    });

    it('Step 4: Click on the login button', async function () {
    await ObjApp.click(By.id(compMain.loginButtion));
    });
});
