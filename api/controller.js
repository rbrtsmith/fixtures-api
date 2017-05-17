const mongoose = require('mongoose');
const Area = mongoose.model('Area');

exports.getAllAreas = async (req, res) => {
  try {
    const areas = await Area.find();
    res.json(areas);
  } catch (err) {
    console.error(err);
  }
}

exports.getCompetitions = (req, res) => {
  res.send(req.params.id)
}

exports.getMatches = (req, res) => {
  res.send(req.params.id)
}
