import axios from "axios";
import cheerio from "cheerio";



async function scrapeData() {
  const url = "https://www.list.am/category/23/2";

  try {
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);
    const listItems = $(".gl a");

    const carId = [];

    listItems.each((idx, el) => {
      const obj = {
        id: el.attribs.href
      }
      carId.push(obj);
    });

    return JSON.stringify(carId)

  } catch (err) {
    console.error(err);
  }
}

export function scrap() {
  return scrapeData();
}
