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

module.exports = {
  randomTest,
};
