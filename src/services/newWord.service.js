const uploadImage = require('../utils/uploadImage');
const { ResponseResult } = require('../configs/config');
const CustomError = require('../errors/CustomError');
const errorCode = require('../errors/errorCode');
const { addNewWordDb, getAllNewWordsInTopicDb } = require('../db/newWord.db');

const addNewWord = async (body, files) => {
  const { image } = files;

  const imageLink = await uploadImage(image, 'images/new-words');

  const word = {
    ...body,
    image: imageLink,
  };

  const data = await addNewWordDb(word);
  if (!data) {
    throw new CustomError(
      errorCode.INTERNAL_SERVER_ERROR,
      'Không thể thêm mới từ vựng',
    );
  }
  return new ResponseResult(1, data);
};

const getAllNewWordsInTopic = async query => {
  const data = await getAllNewWordsInTopicDb(query);
  if (!data) {
    throw new CustomError(
      errorCode.INTERNAL_SERVER_ERROR,
      'Không thể lấy từ mới',
    );
  }
  return new ResponseResult(1, data);
};

module.exports = {
  addNewWord,
  getAllNewWordsInTopic,
};
