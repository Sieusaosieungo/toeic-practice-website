const validator = require('validator');

const CustomError = require('../errors/CustomError');
const errorCode = require('../errors/errorCode');
const newWordTopicService = require('../services/newWordTopic.service');

const getAllTopics = async (req, res) => {
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
  } = await newWordTopicService.getAllNewWordTopics(query);

  res.send({
    status: 1,
    results: {
      totalRecords,
      topics,
    },
  });
};

const addNewWordTopic = async (req, res) => {
  const { body, files } = req;
  const { title } = body;
  const { image } = files;

  if (!title) {
    throw new CustomError(errorCode.BAD_REQUEST, 'title is not defined');
  }
  if (!image) {
    throw new CustomError(errorCode.BAD_REQUEST, 'image is not defined');
  }

  await newWordTopicService.addNewWordTopic(body, files);

  res.send({
    status: 1,
  });
};

module.exports = {
  getAllTopics,
  addNewWordTopic,
};
