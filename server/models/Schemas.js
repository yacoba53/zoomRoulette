const mongoose = require('mongoose');

const UrlSchema = new mongoose.Schema({
  id: Number,
  url: String,
  timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Urls', UrlSchema);
