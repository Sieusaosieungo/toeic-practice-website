const express = require('express');

const router = express.Router();
const asyncWrap = require('../middlewares/asyncWrap');
const { addPart, getAllParts } = require('../controllers/part.controller');

router.post('/', asyncWrap(addPart));
router.get('/', asyncWrap(getAllParts));

module.exports = router;
