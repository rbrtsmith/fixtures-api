const mongoose = require('mongoose');

const competitionSchema = new mongoose.Schema({
  id: String,
  area_id: String,
  name: String
});

module.exports = mongoose.model('Competition', competitionSchema);
