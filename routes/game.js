const express = require('express');
const gameController = require('../controllers/game');
const router = express.Router();

router.get('/game', gameController.getBlocks);

// router.get('/game/play', peopleController.getAddPeople);

module.exports = router;
