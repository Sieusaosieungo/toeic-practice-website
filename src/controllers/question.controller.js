const validator = require('validator');

const CustomError = require('../errors/CustomError');
const errorCode = require('../errors/errorCode');
const questionService = require('../services/question.service');

const addBasicQuestionInfo = async (req, res) => {
  const { body, files } = req;
  const { part, level, scripts, paragraph } = body;

  if (!part) {
    throw new CustomError(errorCode.BAD_REQUEST, 'Hãy nhập part của câu hỏi');
  }
  if (!validator.isNumeric(part.toString())) {
    throw new CustomError(errorCode.BAD_REQUEST, 'part phải là một số');
  }
  if (!level) {
    throw new CustomError(errorCode.BAD_REQUEST, 'Hãy nhập level của câu hỏi');
  }

  const partNumber = Number.parseInt(part, 10);
  switch (partNumber) {
    case 1:
      if (!scripts) {
        throw new CustomError(errorCode.BAD_REQUEST, 'Hãy nhập scripts');
      }
      if (!files || !files.image) {
        throw new CustomError(
          errorCode.BAD_REQUEST,
          'Hãy thêm ảnh cho câu hỏi',
        );
      }
      if (!files || !files.audio) {
        throw new CustomError(
          errorCode.BAD_REQUEST,
          'Hãy thêm audio cho câu hỏi',
        );
      }
      break;
    case 2:
    case 3:
    case 4:
      if (!files || !files.audio) {
        throw new CustomError(
          errorCode.BAD_REQUEST,
          'Hãy thêm audio cho câu hỏi',
        );
      }
      if (!scripts) {
        throw new CustomError(errorCode.BAD_REQUEST, 'Hãy nhập scripts');
      }
      break;
    case 5:
      break;
    case 6:
    case 7:
      if (!paragraph) {
        throw new CustomError(
          errorCode.BAD_REQUEST,
          'Hãy thêm đoạn văn cho câu hỏi',
        );
      }
      break;
    default:
      throw new CustomError(errorCode.BAD_REQUEST, 'part không hợp lệ');
  }

  const rs = await questionService.addBasicQuestionInfo(body, files);
  res.send(rs);
};

const addSubQuestions = async (req, res) => {
  const { body } = req;
  const { idQuestion, subQuestions } = body;

  if (!idQuestion) {
    throw new CustomError(errorCode.BAD_REQUEST, 'idQuestion là bắt buộc');
  }
  if (!subQuestions || !Array.isArray(subQuestions)) {
    throw new CustomError(
      errorCode.BAD_REQUEST,
      'subQuestions phải là một mảng các câu hỏi',
    );
  }
  if (subQuestions.length === 0) {
    throw new CustomError(
      errorCode.BAD_REQUEST,
      'subQuestions phải chứa câu hỏi',
    );
  }

  const rs = await questionService.addSubQuestions(body);
  res.send(rs);
};

module.exports = {
  addBasicQuestionInfo,
  addSubQuestions,
};
