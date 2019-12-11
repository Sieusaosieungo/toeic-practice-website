const validator = require('validator');

const CustomError = require('../errors/CustomError');
const errorCode = require('../errors/errorCode');
const testService = require('../services/test.service');

const randomTest = async (req, res) => {
  const { user, query } = req;
  const { level } = query;

  if (!query || !level) {
    throw new CustomError(errorCode.BAD_REQUEST, 'Hãy thêm level để tạo để');
  }
  if (!validator.isNumeric(level)) {
    throw new CustomError(errorCode.BAD_REQUEST, 'level phải là một số');
  }
  if (level > 7 || level < 0) {
    throw new CustomError(
      errorCode.BAD_REQUEST,
      'level phải thuộc đoạn [0; 7]',
    );
  }

  const rs = await testService.randomTest(user, query);
  res.send(rs);
};

const submitResultPart = async (req, res) => {
  const { body } = req;
  const { idTest, part, results } = body;

  if (!idTest) {
    throw new CustomError(errorCode.BAD_REQUEST, 'Hãy thêm id của bài test');
  }
  if (!part) {
    throw new CustomError(
      errorCode.BAD_REQUEST,
      'Hãy thêm part muốn chấm điểm',
    );
  }
  if (!validator.isNumeric(part.toString())) {
    throw new CustomError(errorCode.BAD_REQUEST, 'part phải là một số');
  }
  if (part > 7 || part < 1) {
    throw new CustomError(errorCode.BAD_REQUEST, 'part phải thuộc đoạn [0; 7]');
  }
  if (!results) {
    throw new CustomError(
      errorCode.BAD_REQUEST,
      'Hãy thêm results - đáp án của thí sinh',
    );
  }

  const rs = await testService.submitResultPart(body);
  res.send(rs);
};

module.exports = {
  randomTest,
  submitResultPart,
};
