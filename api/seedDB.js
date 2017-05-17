const fetch = require('node-fetch');
const { parseString } = require('xml2js');
require('dotenv').config();

function transformAndInsertData(err, data) {
  if (err) {
    console.log('Unable to parse XML');
    process.exit();
  }

  const areas = [];
  const competitions = [];
  const matches = [];

  data.gsmrs.competition.forEach((competition) => {
    if(!areas.find(item => item.id === competition.$.area_id)) {
      areas.push({
        id: competition.$.area_id,
        name: competition.$.area_name
      })
    }
  })
  console.log(areas)
}

fetch(process.env.DATA_URL)
  .then(res => res.text())
  .then(data => parseString(data, transformAndInsertData))
