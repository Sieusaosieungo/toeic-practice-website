const express = require('express');

const router = express.Router();
const asyncWrap = require('../middlewares/asyncWrap');
const { getAllTopics } = require('../controllers/newWordTopic.controller');

router.get('/', asyncWrap(getAllTopics));

module.exports = router;
