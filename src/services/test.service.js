const {
  randomTestDb,
  submitResultPartDb,
  getTestByIdDb,
} = require('../db/test.db');
const CustomError = require('../errors/CustomError');
const errorCode = require('../errors/errorCode');
const { numberQuestions } = require('../configs/config');

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

const submitResultPart = async body => {
  const { part, results } = body;

  if (!Array.isArray(results)) {
    throw new CustomError(
      errorCode.BAD_REQUEST,
      `results phải là một mảng các đáp án của thí sinh`,
    );
  }

  const keyNumberQuestions = numberQuestions.NQPrefix + part.toString();
  if (results.length !== numberQuestions[keyNumberQuestions]) {
    throw new CustomError(
      errorCode.BAD_REQUEST,
      `results phải là một mảng đáp án của ${numberQuestions[keyNumberQuestions]} câu hỏi`,
    );
  }

  const keysCheck = ['idQuestion', 'userAnswer'];
  results.forEach((result, index) => {
    keysCheck.forEach(key => {
      if (!(key in result)) {
        throw new CustomError(
          errorCode.BAD_REQUEST,
          `results[${index}] phải có key ${key}`,
        );
      }
    });

    if (!Array.isArray(result.userAnswer)) {
      throw new CustomError(
        errorCode.BAD_REQUEST,
        `result[${index}].userAnswer phải là một mảng các đáp án của sub-questions`,
      );
    }
  });

  const data = await submitResultPartDb(body);
  if (!data) {
    throw new CustomError(
      errorCode.INTERNAL_SERVER_ERROR,
      `Không thể submit part ${part}`,
    );
  }
  return data;
};

const getTestById = async query => {
  const data = await getTestByIdDb(query);

  if (!data) {
    throw new CustomError(
      errorCode.INTERNAL_SERVER_ERROR,
      `Không thể lấy test`,
    );
  }
  return data;
};

module.exports = {
  randomTest,
  submitResultPart,
  getTestById,
};
