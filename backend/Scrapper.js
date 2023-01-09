import { listLoop } from './helpers/index.js'
import { TEST_URL } from './constants/index.js'


export async function parseScrapper(req, res) {
  return startScrapping(TEST_URL);
};


// "https://www.list.am/category/23?bid=7"
const startScrapping = async (pageUrl) => {
  // add en for english
  if (!pageUrl.includes('en')) {
    pageUrl = pageUrl.replace('https://www.list.am', 'https://www.list.am/en');
  }
  let categoryUrl = pageUrl.slice(pageUrl.indexOf('category'), pageUrl.indexOf('?'));
  let categoryList = categoryUrl.split('/');
  let categoryNumber = categoryList[1];
  console.log("cat_url", categoryUrl)
  console.log("categoryList", categoryList)
  console.log("categoryNumber", categoryNumber);

  if (categoryList[2]) {
    pageUrl = pageUrl.replace(`https://www.list.am/en/category/${categoryNumber}/${categoryList[2]}`, `https://www.list.am/en/category/${categoryNumber}`);
  }
  console.log(pageUrl)
  return listLoop(pageUrl, categoryNumber);
}
