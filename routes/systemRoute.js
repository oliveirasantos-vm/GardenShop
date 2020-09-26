const express = require('express');
const router = express.Router();

const systemController = require('../controllers/systemController');

router.get('/', systemController.homePage);

router.get('*', systemController.error404);

module.exports = router;