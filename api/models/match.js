const mongoose = require('mongoose');

const matchSchema = new mongoose.Schema({
  id: String,
  area_id: String,
  competition_id: String,
  name: String,
  team_a_name: String,
  team_b_name: String,
  timestamp: Date
});

module.exports = mongoose.model('Match', matchSchema);
