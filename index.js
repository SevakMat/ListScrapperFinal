import express from 'express';
// const express = require('express');
import { scrap } from './scrap/scrap.js'
// const scrap = require('./scrap/scrap.js');

const app = express();
const port = 3000;

app.get('/getcars', async (req, res) => {
  const data = await scrap()
  console.log("success");
  res.send(data)
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});