import express from 'express';
import { parseScrapper } from "./Scrapper.js"

const app = express();
// const bodyParser = require('body-parser');

const data = await parseScrapper()


app.get('/start-scrapping', async function (req, res) {
  res.send(data)
})

app.listen(3000, function () {
  console.log("server runing 3000 port")
})
