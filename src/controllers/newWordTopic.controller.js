const validator = require('validator');

const newWordTopicService = require('../services/newWordTopic.service');
const CustomError = require('../errors/CustomError');
const errorCode = require('../errors/errorCode');

const getAllTopics = async (req, res) => {
  const { page, records } = req.query;

  if (page) {
    if (!validator.isNumeric(page)) {
      throw new CustomError(errorCode.BAD_REQUEST, 'Số trang không hợp lệ');
    }
  }
  if (records) {
    if (!validator.isNumeric(records)) {
      throw new CustomError(errorCode.BAD_REQUEST, 'Số trang không hợp lệ');
    }
  }

  const {
    totalRecords,
    topics,
  } = await newWordTopicService.getAllNewWordTopics(page, records);

  res.send({
    status: 1,
    results: {
      totalRecords,
      topics,
    },
  });
};

module.exports = {
  getAllTopics,
};
