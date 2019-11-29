const uploadImage = require('../utils/uploadImage');
const uploadAudio = require('../utils/uploadAudio');
const { ResponseResult } = require('../configs/config');
const CustomError = require('../errors/CustomError');
const errorCode = require('../errors/errorCode');
const {
  addBasicQuestionInfoDb,
  addSubQuestionsDb,
} = require('../db/question.db');

const addBasicQuestionInfo = async (body, files) => {
  const { image, audio } = files;
  let imageLink = null;
  let audioLink = null;

  if (image) {
    imageLink = await uploadImage(image, 'images/questions');
  }

  if (audio) {
    audioLink = await uploadAudio(audio, 'audios/questions');
  }

  const question = {
    ...body,
    image: imageLink,
    audio: audioLink,
  };

  const data = await addBasicQuestionInfoDb(question);
  if (!data) {
    throw new CustomError(
      errorCode.INTERNAL_SERVER_ERROR,
      'Không thể thêm mới câu hỏi',
    );
  }
  return new ResponseResult(1, data);
};

const addSubQuestions = async body => {
  const { subQuestions } = body;
  const { length } = subQuestions;
  const keys = ['idGrammarTopic', 'answer'];

  for (let i = 0; i < length; i += 1) {
    const subQuestion = subQuestions[i];
    if (typeof subQuestion !== 'object') {
      throw new CustomError(
        errorCode.BAD_REQUEST,
        `Câu hỏi thứ ${i + 1} phải là Object`,
      );
    }
    keys.forEach(key => {
      if (!(key in subQuestion)) {
        throw new CustomError(
          errorCode.BAD_REQUEST,
          `Câu hỏi thứ ${i + 1} phải có key ${key}`,
        );
      }
    });
  }

  const data = await addSubQuestionsDb(body);
  if (!data) {
    throw new CustomError(
      errorCode.INTERNAL_SERVER_ERROR,
      'Không thể thêm subQuestion',
    );
  }
  return new ResponseResult(1, data);
};

module.exports = {
  addBasicQuestionInfo,
  addSubQuestions,
};
