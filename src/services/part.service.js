const { ResponseResult } = require('../configs/config');
const CustomError = require('../errors/CustomError');
const errorCode = require('../errors/errorCode');
const { addPartDb, getAddPartsDb } = require('../db/part.db');

const addPart = async body => {
  const data = await addPartDb(body);
  if (!data) {
    throw new CustomError(
      errorCode.INTERNAL_SERVER_ERROR,
      'Không thể thêm mới part',
    );
  }
  return new ResponseResult(1, data);
};

module.exports = {
  addPart,
  getAddPartsDb,
};
