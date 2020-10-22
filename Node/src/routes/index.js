const express = require('express');
const router = express.Router();
const TempController = require('../controllers/index');

router.post('/enviar', TempController.index);

module.exports = router;