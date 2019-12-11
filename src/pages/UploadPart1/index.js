import React, { useState } from 'react';
import { Button, Select, message, Input } from 'antd';
import axios from 'axios';
import config from '../../utils/config';
import { withCookies } from 'react-cookie';

import './style.scss';
import TextArea from 'antd/lib/input/TextArea';

const { Option } = Select;

const UploadPart1 = ({
  cookies: {
    cookies: { accessToken },
  },
}) => {
  const [part1, setPart1] = useState({
    part: 1,
    level: 0,
    audio: null,
  });
  const [subQuesPart1, setSubQuesPart1] = useState({});
  const [subQuesPart1Child, setSubQuesPart1Child] = useState({});

  const handleUploadPart1Des = () => {
    const formData = new FormData();
    formData.set('part', part1.part);
    formData.set('level', part1.level);
    formData.set('audio', part1.audio);
    formData.set('scripts', part1.scripts);
    formData.set('image', part1.image);

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
        message.success('Đăng bài thành công.');
        console.log('question after uploaded: ', res.data);
        setSubQuesPart1({ ...subQuesPart1, idQuestion: res.data.results._id });
      })
      .catch(err => console.log(err.response));
  };

  const handleUploadPart1Content = () => {
    console.log('Data before upload content:', subQuesPart1);

    axios({
      method: 'POST',
      url: `${config.API_URL}/api/questions/sub-questions`,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      data: subQuesPart1,
    })
      .then(res => {
        message.success('Đăng bài thành công.');
        console.log('Subquestion after uploaded: ', res.data);
        setPart1({ part: 1, level: 0, audio: '' });
      })
      .catch(err => console.log(err.response));
  };

  const handleChange = value => setPart1({ ...part1, level: value });
  const handleChangeScripts = e =>
    setPart1({ ...part1, scripts: e.target.value });
  const handleChangeAudio = e => {
    console.log('audio: ', e.target.files[0]);
    setPart1({ ...part1, audio: e.target.files[0] });
  };
  const handleChangeImage = e => {
    console.log('image: ', e.target.files[0]);
    setPart1({ ...part1, image: e.target.files[0] });
  };

  const handleChangeSubQues = e => {
    const { name, value } = e.target;
    setSubQuesPart1Child({ ...subQuesPart1Child, [name]: value });
  };

  return (
    <div className="upload-part1">
      <div className="upload-part1-content">
        <div className="upload-part1-raw">
          <div>Chọn độ khó của câu hỏi:</div>
          <Select
            className="upload-part1-level"
            placeholder="Chọn độ khó của câu hỏi"
            onChange={handleChange}
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
          ></TextArea>
        </div>
        <div style={{ textAlign: 'center', marginTop: '1rem' }}>
          <label className="upload-btn-wrapper">
            <input
              type="file"
              required
              onChange={handleChangeImage}
              name="productAttachImages"
            />
            <span>Chọn ảnh</span>
          </label>
        </div>
        <div className="upload-part1-btn">
          <Button type="primary" onClick={handleUploadPart1Des}>
            Đăng mô tả câu hỏi
          </Button>
        </div>
      </div>
      <br /> <hr /> <br />
      <div className="upload-part1-question">
        <div className="upload-part1-raw">
          <div className="question-title">Answer:</div>
          <Input
            name="answer"
            onChange={handleChangeSubQues}
            value={subQuesPart1Child.answer}
          />
        </div>
        <div className="upload-part1-raw">
          <div className="question-title">Tips:</div>
          <Input
            name="tips"
            onChange={handleChangeSubQues}
            value={subQuesPart1Child.tips}
          />
        </div>
        <div className="upload-part1-btn">
          <Button
            type="primary"
            onClick={() => {
              setSubQuesPart1({
                ...subQuesPart1,
                subQuestions: [
                  ...(subQuesPart1.subQuestions
                    ? subQuesPart1.subQuestions
                    : []),
                  subQuesPart1Child,
                ],
              });
              setSubQuesPart1Child({});
              message.success('Thêm câu hỏi nhỏ thành công.');
            }}
            disabled={
              !subQuesPart1.idQuestion ||
              (subQuesPart1.subQuestions &&
                subQuesPart1.subQuestions.length === 1)
                ? true
                : false
            }
          >
            Thêm câu hỏi nhỏ
          </Button>
          <Button
            type="primary"
            onClick={handleUploadPart1Content}
            disabled={!subQuesPart1.idQuestion ? true : false}
          >
            Đăng phần nội dung câu hỏi
          </Button>
        </div>
      </div>
    </div>
  );
};

export default withCookies(UploadPart1);
