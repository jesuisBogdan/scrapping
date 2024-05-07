import puppeteer from 'puppeteer';
import cheerio from 'cheerio';
const pageToScrap =
  'https://ms.ro/ro/informatii-de-interes-public/examene/examene-si-concursuri-nationale/';

// const myFunc = async () => {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();

//   await page.goto(pageToScrap);

//   const content = await page.content();

//   const $ = cheerio.load(content);
//   const textElements = $('Publicatia');
//   // .find('*')
//   // .contents()
//   // .filter(function () {
//   //   return (
//   //     this.nodeType === 3 &&
//   //     this.nodeValue.toLowerCase().includes('Publicatia')
//   //   );
//   // });

//   //   textElements.each((index, element) => {
//   //     console.log(element.nodeValue.trim());
//   //   });
//   console.log(textElements);

//   await browser.close();
// };
// myFunc();
/*
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto(
    'https://ms.ro/ro/informatii-de-interes-public/examene/examene-si-concursuri-nationale/'
  );

  await page.setViewport({ width: 1080, height: 1024 });

  await page.type(
    '.devsite-search-field',
    'automate beyond recorder'
  );

  const searchResultSelector = '.devsite-result-item-link';
  await page.waitForSelector(searchResultSelector);
  await page.click(searchResultSelector);

  const textSelector = await page.waitForSelector(
    'text/Customize and automate'
  );
  const fullTitle = await textSelector?.evaluate(
    (el) => el.textContent
  );

  console.log('The title of this blog post is "%s".', fullTitle);

  await browser.close();
})();
*/

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto(pageToScrap);

  const content = await page.content();

  const $ = cheerio.load(content);
  const links = $(
    "a:contains('publicatie'), a:contains('PUBLICAȚIE'), a:contains('Publicație')"
  );

  links.each((index, link) => {
    console.log($(link).text().trim());
    console.log($(link).attr('href'));
  });

  await browser.close();
})();
