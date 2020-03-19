var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const memberSchema = new Schema({
  name: String,
  location: String,
});

module.exports = mongoose.model('Member', memberSchema);