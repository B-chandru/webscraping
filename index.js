const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://b-chandru.github.io/mj_maker/'); //give the url of the website to take screenshot
  await page.screenshot({ path: `./img/${new Date().getMilliseconds()}.png` , fullPage: true});
  await browser.close();
})();