const mongoose = require('mongoose');

const UrlSchema = new mongoose.Schema({
  url: { type: String, default: "" },
  timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Urls', UrlSchema);
