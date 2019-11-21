const validator = require('validator');

const CustomError = require('../errors/CustomError');
const errorCode = require('../errors/errorCode');
const uploadImage = require('../utils/uploadImage');
const {
  getAllNewWordTopicsDb,
  addNewWordTopicDb,
} = require('../db/newWordTopic.db');

const getAllNewWordTopics = async query => {
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
  const { totalRecords, topics } = await getAllNewWordTopicsDb(query);

  return {
    totalRecords,
    topics,
  };
};

const addNewWordTopic = async (title, image) => {
  if (!title) {
    throw new CustomError(errorCode.BAD_REQUEST, 'title is not defined');
  }
  if (!image) {
    throw new CustomError(errorCode.BAD_REQUEST, 'image is not defined');
  }

  const imageLink = await uploadImage(image, '/image/topic');

  const topic = {
    title,
    image: imageLink,
  };

  await addNewWordTopicDb(topic);
};

module.exports = {
  getAllNewWordTopics,
  addNewWordTopic,
};
