const express = require('express');
const gameController = require('../controllers/game');
const router = express.Router();

router.get('/', gameController.getBlocks);
router.post('/score',gameController.getScore);
router.get('/end',gameController.end);

module.exports = router;
