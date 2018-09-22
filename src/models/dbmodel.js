const env = process.env.NODE_ENV || 'development';
const conf = require('../config/db.json')[env];
const promise = require('bluebird');

const options = {
  promiseLib: promise,
};

const pgp = require('pg-promise')(options);

const dbString = `${conf.db.dialect}://${conf.db.username}:${conf.db.password}@${conf.db.host}:${conf.db.port}/${conf.db.database}`;

const db = pgp(dbString);

if (env !== 'production') {
  console.log('dbstring - ', dbString);
}

async function queryAny(query) {
  try {
    const result = await db.one(query);
    return result;
  } catch (err) {
    throw new Error(err);
  }
}

module.exports = queryAny;
