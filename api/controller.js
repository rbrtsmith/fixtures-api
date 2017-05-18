const mongoose = require('mongoose');

const Area = mongoose.model('Area');
const Competition = mongoose.model('Competition');
const Match = mongoose.model('Match');

exports.getAllAreas = async (req, res) => {
  try {
    const areas = await Area.find();
    res.json(areas);
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);
  }
};

exports.getCompetitions = async (req, res) => {
  try {
    const competitions = await Competition.find({ area_id: req.params.id });
    res.json(competitions);
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);
  }
};

exports.getMatches = async (req, res) => {
  try {
    const matches = await Match.find({ competition_id: req.params.id });
    res.json(matches);
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);
  }
};
