const pagination = {
  pageNumber: 1,
  recordNumber: 10,
};

const staticFilePath = `${__dirname}/../static`;

const ResponseResult = class {
  constructor(status = 1, results = {}) {
    this.status = status;
    this.results = results;
  }
};

/**
 * Toeic level
 */
const questionLevel = {
  BEGINNER: 0,
  ELEMENTARY: 1,
  // 246-380 TOEIC
  PRE_INTERMEDIATE: 2,
  LOWER_INTERMEDIATE: 3,
  // 381-540 TOEIC
  MID_INTERMEDIATE: 4,
  // 541-700 TOEIC
  UPPER_INTERMEDIATE: 5,
  // 701-910 TOEIC
  LOWER_ADVANCED: 6,
  // 911-990 TOEIC
  UPPER_ADVANDED: 7,
};

module.exports = {
  pagination,
  staticFilePath,
  ResponseResult,
  questionLevel,
};
