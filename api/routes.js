const express = require('express');
const { getAllAreas } = require('./controller');

const router = express.Router();

router.get('/', getAllAreas);

module.exports = router
