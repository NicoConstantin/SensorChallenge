const express = require('express');
const router = express.Router();
const { createSensors, readSensors, updateSensors,deleteSensors} = require("../../utils/controllers/sensorControllers")

router.post('/',createSensors);
router.get('/',readSensors);
router.put('/',updateSensors);
router.delete('/',deleteSensors);

module.exports = router;