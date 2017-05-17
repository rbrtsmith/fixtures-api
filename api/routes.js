const express = require('express');
const { getAllAreas, getCompetitions, getMatches } = require('./controller');

const router = express.Router();

router.get('/', getAllAreas);
router.get('/areas', getAllAreas);
router.get('/areas/:id/competitions', getCompetitions);
router.get('/competitions/:id/matches', getMatches);

module.exports = router;
