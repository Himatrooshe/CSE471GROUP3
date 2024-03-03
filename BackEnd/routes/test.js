const express = require('express');
const router = express.Router();
const sampleController = require('../controllers/sampleController');

router.get('/test', sampleController.test);

module.exports = router;
