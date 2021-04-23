const express = require('express');
const router = express.Router();

const NewsController = require('../app/controllers/NewsController');

// NewsController.index;

router.get('/:slug', NewsController.show);
router.get('/', NewsController.index);

module.exports = router;
