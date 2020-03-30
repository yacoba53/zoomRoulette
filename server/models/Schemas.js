const mongoose = require('mongoose');

const UrlSchema = new mongoose.Schema({
  url: { type: String, default: "" },
  active: { type: Boolean, default: true },
  timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Urls', UrlSchema);
