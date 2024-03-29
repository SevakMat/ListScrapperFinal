import axios from "axios"
import cheerio from "cheerio"
import { SCRAPPER_LOOP_COUNT } from "../constants/index.js";
const statements = [];

const sleep = (milliseconds) => {
  return new Promise(resolve =>
    setTimeout(resolve, milliseconds))
};
const getHTML = async (url) => {
  const { data } = await axios.get(url);
  return cheerio.load(data);
}

export const listLoop = async (pageUrl, categoryNumber) => {


  for (let j = 0; j < SCRAPPER_LOOP_COUNT; j++) {
    console.log("is a loop -", j);
    // number of page
    let pageCount = 1;


    //  loof for change a pages
    for (let page = 1; page <= pageCount; page++) {
      console.log("page---", page)
      // add number of page
      let tempUrl = pageUrl.replace(`https://www.list.am/en/category/${categoryNumber}`, `https://www.list.am/en/category/${categoryNumber}/${page}`);
      // get a link of car
      const $ = await getHTML(tempUrl);
      $('.gl a').each((i, element) => {
        let carLink = element.attribs.href.split('/')[3];
        // console.log(element.attribs.href)
        if (j == 0) {
          statements.push(carLink);
        }
        else if (!statements.includes(carLink)) {
          statements.push(carLink);
          console.log('link of new car - ', carLink);
        }
      })
      // check is it last page
      if ($(".dlf").eq(0).text().includes('Next >')) {
        pageCount++;
      }
    }
    console.log(statements);
    // await sleep(PER_PAGE_DELAHY);
  }
  return JSON.stringify(statements)

}


