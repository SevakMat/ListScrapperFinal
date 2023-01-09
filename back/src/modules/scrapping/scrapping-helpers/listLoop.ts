import axios from "axios"
import cheerio from "cheerio"
import { SCRAPPER_LOOP_COUNT } from "../constants/index.js";

// const sleep = (milliseconds) => {
//   return new Promise(resolve =>
//     setTimeout(resolve, milliseconds))
// };
const getHTML = async (url) => {
  const { data } = await axios.get(url);
  return cheerio.load(data);
}

export const listLoop = async (pageUrl) => {
  const statements = [];

  for (let j = 0; j < SCRAPPER_LOOP_COUNT; j++) {

    let pageCount = 1;
    console.log("SCRAPPER_LOOP_COUNT", j);
    for (let page = 1; page <= pageCount; page++) {
      // add number of page
      let tempUrl = pageUrl.replace(
        `https://www.list.am/en/category/23`,
        `https://www.list.am/en/category/23/${page}`
      );
      // get a link of car
      const $ = await getHTML(tempUrl);

      $('.gl a').each((i, element: any) => {
        let carLink = element.attribs.href.split('/')[3];


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
    console.log(statements.length);
    if (j == 0) {
      //ste petqa tanel db um push anel 

    } else {
      // ste petqa db ic berel u hamematel 
    }


    // await sleep(PER_PAGE_DELAHY);
  }
  return JSON.stringify(statements)

}


