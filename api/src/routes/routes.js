const express = require('express');
const router = express.Router();
const sensorRoute = require('./sensor/sensorRoute.js');
const eventRoute = require('./event/eventRoute.js');


router.use('/sensor', sensorRoute);
router.use('/event',eventRoute);

module.exports = router;