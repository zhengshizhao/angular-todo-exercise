var mongoose = require('mongoose');

var ActivitySchema = new mongoose.Schema({
  name: String,
  age_range: String
})

module.exports = mongoose.model('Activity', ActivitySchema);
