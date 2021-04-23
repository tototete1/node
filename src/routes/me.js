const express = require('express');
const router = express.Router();

const MeController = require('../app/controllers/MeController');

router.get('/store/courses', MeController.storeCourses);
router.get('/store/trash', MeController.trashCourses);

module.exports = router;
