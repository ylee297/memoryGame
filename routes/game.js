const express = require('express');
const gameController = require('../controllers/game');
const router = express.Router();

router.get('/', gameController.gameStart);
router.get('/leaderboard', gameController.getScores);
router.post('/recordscore',gameController.addScore);
router.get('/end',gameController.end);

module.exports = router;
