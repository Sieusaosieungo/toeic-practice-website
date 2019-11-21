const express = require('express');

const router = express.Router();
const asyncWrap = require('../middlewares/asyncWrap');
const {
  getAllTopics,
  addNewWordTopic,
} = require('../controllers/newWordTopic.controller');

router.get('/', asyncWrap(getAllTopics));
router.post('/', asyncWrap(addNewWordTopic));

module.exports = router;
