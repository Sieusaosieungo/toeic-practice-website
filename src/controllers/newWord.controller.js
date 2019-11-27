const CustomError = require('../errors/CustomError');
const errorCode = require('../errors/errorCode');
const newWordService = require('../services/newWord.service');

const addNewWord = async (req, res) => {
  const { body, files } = req;
  const { newWord, meaning, idNewWordTopic } = body;

  if (!idNewWordTopic) {
    throw new CustomError(errorCode.BAD_REQUEST, 'idNewWordTopic là bắt buộc');
  }
  if (!newWord) {
    throw new CustomError(errorCode.BAD_REQUEST, 'Hãy thêm tên từ mới');
  }
  if (!meaning) {
    throw new CustomError(errorCode.BAD_REQUEST, 'Hãy thêm nghĩa cho từ mới');
  }
  if (!files || !files.image) {
    throw new CustomError(errorCode.BAD_REQUEST, 'Hãy thêm ảnh cho từ mới');
  }

  const rs = await newWordService.addNewWord(body, files);
  res.send(rs);
};

module.exports = {
  addNewWord,
};
