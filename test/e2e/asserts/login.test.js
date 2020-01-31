//import puppeteer from 'puppeteer';
const puppeteer = require('puppeteer');

const app = 'https://app.clickup.com/';
let browser;

test('The user should be logged', async () => {
  jest.setTimeout(30000);
  browser = await puppeteer.launch(
    {
      headless: false
    }
  );
  const page = await browser.newPage();
  await page.goto(app);
  await page.click('input#email-input');
  await page.type('input#email-input', 'mauricio.iriarte@jalasoft.com');
  await page.click('input#password-input');
  await page.type('input#password-input', '1234Qwert');
  await page.click('button#login-submit');
  await page.screenshot({path: './test/e2e/screenshots/login.png'});
});