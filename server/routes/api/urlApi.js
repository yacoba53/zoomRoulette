const Schemas = require('../../models/Schemas');
var moment = require('moment');

module.exports = (app) => {
  app.get('/api/records', (req, res, next) => {
    var older_than = moment().subtract(2, 'hours').toDate();
    Schemas.find({ timestamp: { $gte: older_than } })
      .exec()
      .then((records) => res.json(records))
      .catch((err) => next(err));
  });

  app.post('/api/record', function (req, res, next) {
    const record = new Schemas({url: req.body.url});

    record.save()
      .then(() => res.json(record))
      .catch((err) => next(err));
  });

  app.delete('/api/records', function (req, res, next) {
    var older_than = moment().subtract(2, 'hours').toDate();
    Schemas.deleteMany({ timestamp: { $gte: older_than } })
      .exec()
      .then((records) => res.json())
      .catch((err) => next(err));
  });
};
