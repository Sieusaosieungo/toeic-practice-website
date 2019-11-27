const validator = require('validator');

const CustomError = require('../errors/CustomError');
const errorCode = require('../errors/errorCode');
const partService = require('../services/part.service');

const addPart = async (req, res) => {
  const { body } = req;
  const { title, numberQuestion } = body;

  if (!title) {
    throw new CustomError(errorCode.BAD_REQUEST, 'Hãy thêm tên part');
  }
  if (!numberQuestion) {
    throw new CustomError(
      errorCode.BAD_REQUEST,
      'Hãy thêm số câu hỏi của part',
    );
  }
  if (!validator.isNumeric(numberQuestion.toString())) {
    throw new CustomError(
      errorCode.BAD_REQUEST,
      'Số câu hỏi của part phải là một số',
    );
  }

  const rs = await partService.addPart(body);
  res.send(rs);
};

module.exports = {
  addPart,
};
