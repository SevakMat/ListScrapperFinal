import express from 'express';
import { parseScrapper } from "./Scrapper.js"

const app = express();
// const bodyParser = require('body-parser');



app.get('/start-scrapping', async function (req, res) {
  const data = await parseScrapper()
  res.send(data)
})

app.listen(3000, function () {
  console.log("server runing 3000 port")
})
