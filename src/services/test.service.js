const { randomTestDb } = require('../db/test.db');
const CustomError = require('../errors/CustomError');
const errorCode = require('../errors/errorCode');

const randomTest = async (user, query) => {
  const data = await randomTestDb(user, query);
  if (!data) {
    throw new CustomError(
      errorCode.INTERNAL_SERVER_ERROR,
      'Không thể tạo đề mới',
    );
  }
  return data;
};

module.exports = {
  randomTest,
};
