import React, { useState, useRef } from 'react';
import { Button, Select, message, Input } from 'antd';
import axios from 'axios';
import config from '../../utils/config';
import { withCookies } from 'react-cookie';

import './style.scss';
import TextArea from 'antd/lib/input/TextArea';

const { Option } = Select;

const UploadPart3 = ({
  cookies: {
    cookies: { accessToken },
  },
}) => {
  const [part3, setPart3] = useState({
    part: 3,
    level: 0,
    audio: null,
  });
  const [subQuesPart3, setSubQuesPart3] = useState({});
  const [subQuesPart3Child, setSubQuesPart3Child] = useState({});
  const refInputFile = useRef(null);

  const handleUploadPart3Des = () => {
    const formData = new FormData();
    formData.set('part', part3.part);
    formData.set('level', part3.level);
    formData.set('audio', part3.audio);
    formData.set('scripts', part3.scripts);

    console.log('form data before upload des:');
    for (const [x, y] of formData.entries()) {
      console.log(x, y);
    }

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
        console.log('question after uploaded: ', res.data);
        setSubQuesPart3({ ...subQuesPart3, idQuestion: res.data.results._id });
      })
      .catch(err => console.log(err.response));
  };

  const handleUploadPart3Content = () => {
    console.log('Data before upload content:', subQuesPart3);

    axios({
      method: 'POST',
      url: `${config.API_URL}/api/questions/sub-questions`,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      data: subQuesPart3,
    })
      .then(res => {
        message.success('Bạn đã hoàn tất đăng câu hỏi.');
        console.log('Subquestion after uploaded: ', res.data);
        setPart3({ part: 3, level: 0, audio: '' });
        refInputFile.current.value = null;
        setSubQuesPart3({});
      })
      .catch(err => {
        message.error('Đăng câu hỏi lỗi. Mời bạn đăng lại.');
        window.location.reload();
        console.log(err.response);
      });
  };

  const handleChange = value => setPart3({ ...part3, level: value });
  const handleChangeScripts = e =>
    setPart3({ ...part3, scripts: e.target.value });
  const handleChangeAudio = e => {
    console.log('audio: ', e.target.files[0]);
    setPart3({ ...part3, audio: e.target.files[0] });
  };

  const handleChangeSubQues = e => {
    const { name, value } = e.target;
    setSubQuesPart3Child({ ...subQuesPart3Child, [name]: value });
  };

  return (
    <div className="upload-part3">
      <div className="upload-part3-content">
        <div className="upload-part3-raw">
          <div>Chọn độ khó của câu hỏi:</div>
          <Select
            className="upload-part3-level"
            placeholder="Chọn độ khó của câu hỏi"
            onChange={handleChange}
            disabled={!(subQuesPart3.idQuestion === undefined)}
            value={part3.level}
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
              onChange={handleChangeAudio}
              name="productAttachImages"
              ref={refInputFile}
              disabled={!(subQuesPart3.idQuestion === undefined)}
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
            disabled={!(subQuesPart3.idQuestion === undefined)}
            value={part3.scripts}
          ></TextArea>
        </div>
        <div className="upload-part3-btn">
          <Button
            type="primary"
            onClick={handleUploadPart3Des}
            disabled={!(subQuesPart3.idQuestion === undefined)}
          >
            Đăng mô tả câu hỏi
          </Button>
        </div>
      </div>
      <br /> <hr /> <br />
      <div className="upload-part3-question">
        <div className="upload-part3-raw">
          <div className="question-title">Câu hỏi:</div>
          <Input
            name="question"
            onChange={handleChangeSubQues}
            value={subQuesPart3Child.question}
            disabled={
              !subQuesPart3.idQuestion ||
              (subQuesPart3.subQuestions &&
                subQuesPart3.subQuestions.length === 3)
                ? true
                : false
            }
          />
        </div>
        <div className="upload-part3-raw">
          <div className="question-title">A:</div>
          <Input
            name="A"
            onChange={handleChangeSubQues}
            value={subQuesPart3Child.A}
            disabled={
              !subQuesPart3.idQuestion ||
              (subQuesPart3.subQuestions &&
                subQuesPart3.subQuestions.length === 3)
                ? true
                : false
            }
          />
        </div>
        <div className="upload-part3-raw">
          <div className="question-title">B:</div>
          <Input
            name="B"
            onChange={handleChangeSubQues}
            value={subQuesPart3Child.B}
            disabled={
              !subQuesPart3.idQuestion ||
              (subQuesPart3.subQuestions &&
                subQuesPart3.subQuestions.length === 3)
                ? true
                : false
            }
          />
        </div>
        <div className="upload-part3-raw">
          <div className="question-title">C:</div>
          <Input
            name="C"
            onChange={handleChangeSubQues}
            value={subQuesPart3Child.C}
            disabled={
              !subQuesPart3.idQuestion ||
              (subQuesPart3.subQuestions &&
                subQuesPart3.subQuestions.length === 3)
                ? true
                : false
            }
          />
        </div>
        <div className="upload-part3-raw">
          <div className="question-title">D:</div>
          <Input
            name="D"
            onChange={handleChangeSubQues}
            value={subQuesPart3Child.D}
            disabled={
              !subQuesPart3.idQuestion ||
              (subQuesPart3.subQuestions &&
                subQuesPart3.subQuestions.length === 3)
                ? true
                : false
            }
          />
        </div>
        <div className="upload-part3-raw">
          <div className="question-title">Answer:</div>
          <Input
            name="answer"
            onChange={handleChangeSubQues}
            value={subQuesPart3Child.answer}
            disabled={
              !subQuesPart3.idQuestion ||
              (subQuesPart3.subQuestions &&
                subQuesPart3.subQuestions.length === 3)
                ? true
                : false
            }
          />
        </div>
        <div className="upload-part3-raw">
          <div className="question-title">Tips:</div>
          <Input
            name="tips"
            onChange={handleChangeSubQues}
            value={subQuesPart3Child.tips}
            disabled={
              !subQuesPart3.idQuestion ||
              (subQuesPart3.subQuestions &&
                subQuesPart3.subQuestions.length === 3)
                ? true
                : false
            }
          />
        </div>
        <div className="upload-part3-btn">
          <Button
            type="primary"
            onClick={() => {
              setSubQuesPart3({
                ...subQuesPart3,
                subQuestions: [
                  ...(subQuesPart3.subQuestions
                    ? subQuesPart3.subQuestions
                    : []),
                  subQuesPart3Child,
                ],
              });
              setSubQuesPart3Child({});
              message.success(
                `Thêm câu hỏi nhỏ thành công. Bạn cần phải upload ${
                  subQuesPart3.subQuestions
                    ? Math.abs(subQuesPart3.subQuestions.length - 2)
                    : 2
                } thêm câu hỏi nhỏ.`,
              );
            }}
            disabled={
              !subQuesPart3.idQuestion ||
              (subQuesPart3.subQuestions &&
                subQuesPart3.subQuestions.length === 3)
                ? true
                : false
            }
          >
            Thêm câu hỏi nhỏ
          </Button>
          <Button
            type="primary"
            onClick={handleUploadPart3Content}
            disabled={
              subQuesPart3.subQuestions &&
              subQuesPart3.subQuestions.length === 3
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

export default withCookies(UploadPart3);
