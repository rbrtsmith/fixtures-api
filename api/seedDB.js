const fetch = require('node-fetch');
const { parseString } = require('xml2js');
require('dotenv').config();
const mongoose = require('mongoose');
const AreaModel = require('./models/area');
const CompetitionModel = require('./models/competition');
const MatchModel = require('./models/match');

const { idInArr, buildUTCTimestamp } = require('./utils');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.DB);

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

const addMatches = (matches, competition) => {
  competition.season[0].round[0].match &&
    competition.season[0].round[0].match.forEach(match => {
      const timestamp = buildUTCTimestamp(match.$.date_utc, match.$.time_utc)
      if (!idInArr(matches, match.$.match_id)) {
        matches.push({
          id: match.$.match_id,
          area_id: competition.$.area_id,
          competition_id: competition.$.competition_id,
          team_a_name: match.$.team_A_name,
          team_b_name: match.$.team_B_name,
          timestamp
        });
      }
    });
};

const pushData = (areas, competitions, matches) => {
  Promise.all([
    AreaModel.insertMany(areas),
    CompetitionModel.insertMany(competitions),
    MatchModel.insertMany(matches)
  ])
  .then(() => console.log('Successfully seeded the DB'))
  .catch(err => console.error(err))
  .then(() => process.exit());
};

const transformAndInsertData = (err, data) => {
  if (err) {
    console.log(`Unable to parse XML: ${process.env.DATA_URL}`);
    process.exit();
  }

  const areas = [];
  const competitions = [];
  const matches = [];

  data.gsmrs.competition.forEach((competition) => {
    addArea(areas, competition);
    addCompetition(competitions, competition);
    addMatches(matches, competition);
  });

  pushData(areas, competitions, matches);
}

fetch(process.env.DATA_URL)
  .then(res => res.text())
  .then(data => parseString(data, transformAndInsertData));
