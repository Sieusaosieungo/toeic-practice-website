const {
  randomTestDb,
  submitResultPartDb,
  getTestByIdDb,
  finishTestDbV1,
  finishTestDbV2,
  randomPartDb,
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

const finishTestV1 = async body => {
  const data = await finishTestDbV1(body);

  if (!data) {
    throw new CustomError(
      errorCode.INTERNAL_SERVER_ERROR,
      `Không thể finish test`,
    );
  }
  return data;
};

const finishTestV2 = async (body, user) => {
  const data = await finishTestDbV2(body, user);

  if (!data) {
    throw new CustomError(
      errorCode.INTERNAL_SERVER_ERROR,
      `Không thể finish test`,
    );
  }
  return data;
};

const randomPart = async query => {
  const data = await randomPartDb(query);
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
  submitResultPart,
  getTestById,
  finishTestV1,
  finishTestV2,
  randomPart,
};
