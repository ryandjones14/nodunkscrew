var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const memberSchema = new Schema({
  name: String,
  twitterHandle: String,
  city: String,
  state: String,
  country: String,
});

module.exports = mongoose.model('Member', memberSchema);