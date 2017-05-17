const fetch = require('node-fetch');
const { parseString } = require('xml2js');
require('dotenv').config();
const { idInArr } = require('./utils');

const addArea = (areas, competition) => {
  if (!idInArr(areas, competition.$.area_id)) {
    areas.push({
      id: competition.$.area_id,
      name: competition.$.area_name
    });
  }
};

const addCompetition = (competitions, competition) => {
  if (!idInArr(competitions, competition.$.competition_id)) {
    competitions.push({
      id: competition.$.competition_id,
      area_id: competition.$.area_id,
      name: competition.$.name
    });
  }
};

function transformAndInsertData(err, data) {
  if (err) {
    console.log('Unable to parse XML');
    process.exit();
  }

  const areas = [];
  const competitions = [];
  const matches = [];

  data.gsmrs.competition.forEach((competition) => {
    addArea(areas, competition);
    addCompetition(competitions, competition);
  });
  console.log(competitions)
}

fetch(process.env.DATA_URL)
  .then(res => res.text())
  .then(data => parseString(data, transformAndInsertData))
