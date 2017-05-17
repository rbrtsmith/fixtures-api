const fetch = require('node-fetch');
const { parseString } = require('xml2js');
require('dotenv').config();

function transformAndInsertData(err, data) {
  console.log(data)
}

fetch(process.env.DATA_URL)
  .then(res => res.text())
  .then(data => parseString(data, transformAndInsertData))
