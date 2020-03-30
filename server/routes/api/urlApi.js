const Schemas = require('../../models/Schemas');
var moment = require('moment');

module.exports = (app) => {
  app.get('/api/records', (req, res, next) => {
    Schemas.find()
      .exec()
      .then((records) => res.json(records))
      .catch((err) => next(err));
  });

  app.post('/api/record', function (req, res, next) {
    const record = new Schemas();

    record.save()
      .then(() => res.json(record))
      .catch((err) => next(err));
  });

  app.delete('/api/records', function (req, res, next) {
    var older_than = moment().subtract(5, 'minutes').toDate();
    Schemas.deleteMany({ timestamp: { $lte: older_than } })
      .exec()
      .then((records) => res.json())
      .catch((err) => next(err));
  });
};
