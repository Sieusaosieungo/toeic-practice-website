import React, { useState, useRef } from 'react';
import { Button, Select, message, Input } from 'antd';
import axios from 'axios';
import config from '../../utils/config';
import { withCookies } from 'react-cookie';

import './style.scss';
import TextArea from 'antd/lib/input/TextArea';

const { Option } = Select;

const UploadPart4 = ({
  cookies: {
    cookies: { accessToken },
  },
}) => {
  const [part4, setPart4] = useState({
    part: 4,
    level: 0,
    audio: null,
    scripts: '',
  });
  const [subQuesPart4, setSubQuesPart4] = useState({});
  const [subQuesPart4Child, setSubQuesPart4Child] = useState({});
  const refInputFile = useRef(null);

  const handleUploadPart4Des = () => {
    const formData = new FormData();
    formData.set('part', part4.part);
    formData.set('level', part4.level);
    formData.set('audio', part4.audio);
    formData.set('scripts', part4.scripts);

    axios({
      method: 'POST',
      url: `${config.API_URL}/api/questions/basic-info`,
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'multipart/form-data',
      },
      data: formData,
    })
      .then(res => {
        message.success(
          `Đăng bài thành công. Bạn cần phải upload thêm 3 câu hỏi nhỏ.`,
        );
        setSubQuesPart4({ ...subQuesPart4, idQuestion: res.data.results._id });
      })
      .catch(err => console.log(err.response));
  };

  const handleUploadPart4Content = () => {
    axios({
      method: 'POST',
      url: `${config.API_URL}/api/questions/sub-questions`,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      data: subQuesPart4,
    })
      .then(res => {
        message.success('Bạn đã hoàn tất đăng câu hỏi.');
        setPart4({ part: 4, level: 0, audio: null });
        refInputFile.current.value = null;
        setSubQuesPart4({});
      })
      .catch(err => {
        window.location.reload();
        message.error('Đăng câu hỏi lỗi. Mời bạn đăng lại.');
        console.log(err.response);
      });
  };

  const handleChange = value => setPart4({ ...part4, level: value });
  const handleChangeScripts = e =>
    setPart4({ ...part4, scripts: e.target.value });
  const handleChangeAudio = e =>
    setPart4({ ...part4, audio: e.target.files[0] });

  const handleChangeSubQues = e => {
    const { name, value } = e.target;
    setSubQuesPart4Child({ ...subQuesPart4Child, [name]: value });
  };

  return (
    <div className="upload-part4">
      <div className="upload-part4-content">
        <div className="upload-part4-raw">
          <div>Chọn độ khó của câu hỏi:</div>
          <Select
            className="upload-part4-level"
            placeholder="Chọn độ khó của câu hỏi"
            onChange={handleChange}
            disabled={!(subQuesPart4.idQuestion === undefined)}
            value={part4.level}
          >
            <Option value={0}>0</Option>
            <Option value={1}>1</Option>
            <Option value={2}>2</Option>
            <Option value={3}>3</Option>
            <Option value={4}>4</Option>
            <Option value={5}>5</Option>
            <Option value={6}>6</Option>
            <Option value={7}>7</Option>
          </Select>
        </div>
        <div style={{ textAlign: 'center' }}>
          <label className="upload-btn-wrapper">
            <input
              type="file"
              required
              ref={refInputFile}
              onChange={handleChangeAudio}
              name="productAttachImages"
              disabled={!(subQuesPart4.idQuestion === undefined)}
            />
            <span>Chọn audio</span>
          </label>
        </div>
        <div
          style={{ marginTop: '1rem', display: 'flex', alignItems: 'center' }}
        >
          <span style={{ marginRight: '1rem' }}>Scripts: </span>
          <TextArea
            onChange={handleChangeScripts}
            name="scripts"
            style={{ flexGrow: '1' }}
            disabled={!(subQuesPart4.idQuestion === undefined)}
            value={part4.scripts}
          ></TextArea>
        </div>
        <div className="upload-part4-btn">
          <Button
            type="primary"
            onClick={handleUploadPart4Des}
            disabled={!(subQuesPart4.idQuestion === undefined)}
          >
            Đăng mô tả câu hỏi
          </Button>
        </div>
      </div>
      <br /> <hr /> <br />
      <div className="upload-part4-question">
        <div className="upload-part4-raw">
          <div className="question-title">Câu hỏi:</div>
          <Input
            name="question"
            onChange={handleChangeSubQues}
            value={subQuesPart4Child.question}
            disabled={
              !subQuesPart4.idQuestion ||
              (subQuesPart4.subQuestions &&
                subQuesPart4.subQuestions.length === 3)
                ? true
                : false
            }
          />
        </div>
        <div className="upload-part4-raw">
          <div className="question-title">A:</div>
          <Input
            name="A"
            onChange={handleChangeSubQues}
            value={subQuesPart4Child.A}
            disabled={
              !subQuesPart4.idQuestion ||
              (subQuesPart4.subQuestions &&
                subQuesPart4.subQuestions.length === 3)
                ? true
                : false
            }
          />
        </div>
        <div className="upload-part4-raw">
          <div className="question-title">B:</div>
          <Input
            name="B"
            onChange={handleChangeSubQues}
            value={subQuesPart4Child.B}
            disabled={
              !subQuesPart4.idQuestion ||
              (subQuesPart4.subQuestions &&
                subQuesPart4.subQuestions.length === 3)
                ? true
                : false
            }
          />
        </div>
        <div className="upload-part4-raw">
          <div className="question-title">C:</div>
          <Input
            name="C"
            onChange={handleChangeSubQues}
            value={subQuesPart4Child.C}
            disabled={
              !subQuesPart4.idQuestion ||
              (subQuesPart4.subQuestions &&
                subQuesPart4.subQuestions.length === 3)
                ? true
                : false
            }
          />
        </div>
        <div className="upload-part4-raw">
          <div className="question-title">D:</div>
          <Input
            name="D"
            onChange={handleChangeSubQues}
            value={subQuesPart4Child.D}
            disabled={
              !subQuesPart4.idQuestion ||
              (subQuesPart4.subQuestions &&
                subQuesPart4.subQuestions.length === 3)
                ? true
                : false
            }
          />
        </div>
        <div className="upload-part4-raw">
          <div className="question-title">Answer:</div>
          <Input
            name="answer"
            onChange={handleChangeSubQues}
            value={subQuesPart4Child.answer}
            disabled={
              !subQuesPart4.idQuestion ||
              (subQuesPart4.subQuestions &&
                subQuesPart4.subQuestions.length === 3)
                ? true
                : false
            }
          />
        </div>
        <div className="upload-part4-raw">
          <div className="question-title">Tips:</div>
          <Input
            name="tips"
            onChange={handleChangeSubQues}
            value={subQuesPart4Child.tips}
            disabled={
              !subQuesPart4.idQuestion ||
              (subQuesPart4.subQuestions &&
                subQuesPart4.subQuestions.length === 3)
                ? true
                : false
            }
          />
        </div>
        <div className="upload-part4-btn">
          <Button
            type="primary"
            onClick={() => {
              setSubQuesPart4({
                ...subQuesPart4,
                subQuestions: [
                  ...(subQuesPart4.subQuestions
                    ? subQuesPart4.subQuestions
                    : []),
                  subQuesPart4Child,
                ],
              });
              setSubQuesPart4Child({});
              message.success(
                `Thêm câu hỏi nhỏ thành công. Bạn cần phải upload ${
                  subQuesPart4.subQuestions
                    ? Math.abs(subQuesPart4.subQuestions.length - 2)
                    : 2
                } thêm câu hỏi nhỏ.`,
              );
            }}
            disabled={
              !subQuesPart4.idQuestion ||
              (subQuesPart4.subQuestions &&
                subQuesPart4.subQuestions.length === 3)
                ? true
                : false
            }
          >
            Thêm câu hỏi nhỏ
          </Button>
          <Button
            type="primary"
            onClick={handleUploadPart4Content}
            disabled={
              subQuesPart4.subQuestions &&
              subQuesPart4.subQuestions.length === 3
                ? false
                : true
            }
          >
            Đăng phần nội dung câu hỏi
          </Button>
        </div>
      </div>
    </div>
  );
};

export default withCookies(UploadPart4);
