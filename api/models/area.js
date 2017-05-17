const mongoose = require('mongoose');

const areaSchema = new mongoose.Schema({
  id: String,
  name: String
});

module.exports = mongoose.model('Area', areaSchema);
