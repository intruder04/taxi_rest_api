const env = process.env.NODE_ENV || 'development';
const conf = require('../config/db.json')[env];
const { checkSdNumber } = require('../validation/index');

const queryAny = require('../models/dbmodel');

async function order(req, res, next) {
  try {
    const orderId = req.params.id;
    const validId = checkSdNumber(orderId);
    let result = {};

    if (validId) {
      [result] = await queryAny(`select * from ${conf.tables.orders} where sd_number = '${orderId}'`);
    } else {
      res.status(400)
      .json({
        status: 'error',
        error: 'Check id format',
      });
    }

    if (result) {
      res.status(200)
        .json({
          status: 'success',
          data: result,
        });
    } else {
      res.status(200)
        .json({
          status: 'not found',
        });
    }
  } catch (err) {
    next(err);
  }
}

module.exports = order;
