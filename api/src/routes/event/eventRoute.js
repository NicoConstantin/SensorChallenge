const express = require('express');
const router = express.Router();
const { createEvents, readEvents, updateEvents, deleteEvents } = require("../../utils/controllers/eventControllers")

router.post('/',createEvents);
router.get('/',readEvents);
router.put('/',updateEvents);
router.delete('/',deleteEvents)

module.exports = router;