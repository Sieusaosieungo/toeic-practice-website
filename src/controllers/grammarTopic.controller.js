const validator = require('validator');

const CustomError = require('../errors/CustomError');
const errorCode = require('../errors/errorCode');
const grammarTopicService = require('../services/grammarTopic.service');

async function getAllTopics(req, res) {
  const { query } = req;
  const { page, records } = query;

  if (page) {
    if (!validator.isNumeric(page)) {
      throw new CustomError(errorCode.BAD_REQUEST, 'page is invalid');
    }
  }
  if (records) {
    if (!validator.isNumeric(records)) {
      throw new CustomError(errorCode.BAD_REQUEST, 'records is invalid');
    }
  }

  const {
    totalRecords,
    topics,
  } = await grammarTopicService.getAllGrammarTopics(query);

  res.send({
    status: 1,
    results: {
      totalRecords,
      topics,
    },
  });
}

async function addGrammarTopic(req, res) {
  const { title } = req.body;
  const newTopic = await grammarTopicService.addGrammarTopic(title);
  res.send({
    status: 1,
    results: {
      newTopic,
    },
  });
}

module.exports = {
  getAllTopics,
  addGrammarTopic,
};
