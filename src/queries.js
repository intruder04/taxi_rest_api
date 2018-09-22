const env = process.env.NODE_ENV || 'development';
const dbconfig = require('./config/dbconfig.json')[env];
const pgp = require('pg-promise')();

const dbString = `${dbconfig.dialect}://${dbconfig.username}@${dbconfig.host}/${dbconfig.database}`;

const db = pgp(dbString);

if (env !== 'production') {
  console.log('dbstring - ', dbString);
}

module.exports = db;
