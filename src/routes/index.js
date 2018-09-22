const express = require('express');
const event = require('../controllers');

const router = express.Router();

router.get('/events', event);

module.exports = router;
