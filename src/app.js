const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

// routes import
const routes = require('./routes/index');

const app = express();

// Log requests to the console.
app.use(logger('dev'));

// bodyparser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// routes
app.use('/api/v1/', routes);

// If no route is matched by now, it must be a 404
app.use((req, res, next) => {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

module.exports = app;
