const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

const token = require('./config/secret');

const app = express();

// Log requests to the console.
app.use(logger('dev'));

app.use((req, res, next) => {
  const headerToken = req.header('token');
  console.log(headerToken);
  if (headerToken !== token) {
    res.status(200)
          .json({
            status: 'error',
            message: 'Wrong token',
          });
  }
  next();
});

// bodyparser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// routes
app.use('/api/v1/', require('./routes'));

// If no route is matched by now, it must be a 404
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

module.exports = app;
