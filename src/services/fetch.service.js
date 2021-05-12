import puppeteer from 'puppeteer';

const getUrlContentService = async (url) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);
  // eslint-disable-next-line no-undef
  const htmlRawCode = await page.evaluate(() => `<html>${document.querySelector('html').innerHTML}</html>`);

  await browser.close();

  return htmlRawCode;
};

export default getUrlContentService;
