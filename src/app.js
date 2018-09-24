const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

const config = require('./config');

const app = express();

// Log requests to the console.
app.use(logger('dev'));

// auth middleware. Checks token in header
app.use(require('./middlewares/auth'));

// bodyparser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// routes
app.use(config.api_path, require('./routes'));

// If no route is matched by now, it must be a 404
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

module.exports = app;
