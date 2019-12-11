import React, { useState } from 'react';
import { Button, Select, message, Input } from 'antd';
import axios from 'axios';
import config from '../../utils/config';
import { withCookies } from 'react-cookie';

import './style.scss';
import TextArea from 'antd/lib/input/TextArea';

const { Option } = Select;

const UploadPart2 = ({
  cookies: {
    cookies: { accessToken },
  },
}) => {
  const [part2, setPart2] = useState({
    part: 2,
    level: 0,
    audio: null,
  });
  const [subQuesPart2, setSubQuesPart2] = useState({});
  const [subQuesPart2Child, setSubQuesPart2Child] = useState({});

  const handleUploadPart2Des = () => {
    const formData = new FormData();
    formData.set('part', part2.part);
    formData.set('level', part2.level);
    formData.set('audio', part2.audio);
    formData.set('scripts', part2.scripts);

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
        setSubQuesPart2({ ...subQuesPart2, idQuestion: res.data.results._id });
      })
      .catch(err => console.log(err.response));
  };

  const handleUploadPart2Content = () => {
    console.log('Data before upload content:', subQuesPart2);

    axios({
      method: 'POST',
      url: `${config.API_URL}/api/questions/sub-questions`,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      data: subQuesPart2,
    })
      .then(res => {
        message.success('Đăng bài thành công.');
        console.log('Subquestion after uploaded: ', res.data);
        setPart2({ part: 2, level: 0, audio: '' });
      })
      .catch(err => console.log(err.response));
  };

  const handleChange = value => setPart2({ ...part2, level: value });
  const handleChangeScripts = e =>
    setPart2({ ...part2, scripts: e.target.value });
  const handleChangeAudio = e => {
    console.log('audio: ', e.target.files[0]);
    setPart2({ ...part2, audio: e.target.files[0] });
  };

  const handleChangeSubQues = e => {
    const { name, value } = e.target;
    setSubQuesPart2Child({ ...subQuesPart2Child, [name]: value });
  };

  return (
    <div className="upload-part2">
      <div className="upload-part2-content">
        <div className="upload-part2-raw">
          <div>Chọn độ khó của câu hỏi:</div>
          <Select
            className="upload-part2-level"
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
        <div className="upload-part2-btn">
          <Button type="primary" onClick={handleUploadPart2Des}>
            Đăng mô tả câu hỏi
          </Button>
        </div>
      </div>
      <br /> <hr /> <br />
      <div className="upload-part2-question">
        <div className="upload-part2-raw">
          <div className="question-title">Answer:</div>
          <Input
            name="answer"
            onChange={handleChangeSubQues}
            value={subQuesPart2Child.answer}
          />
        </div>
        <div className="upload-part2-raw">
          <div className="question-title">Tips:</div>
          <Input
            name="tips"
            onChange={handleChangeSubQues}
            value={subQuesPart2Child.tips}
          />
        </div>
        <div className="upload-part2-btn">
          <Button
            type="primary"
            onClick={() => {
              setSubQuesPart2({
                ...subQuesPart2,
                subQuestions: [
                  ...(subQuesPart2.subQuestions
                    ? subQuesPart2.subQuestions
                    : []),
                  subQuesPart2Child,
                ],
              });
              setSubQuesPart2Child({});
              message.success('Thêm câu hỏi nhỏ thành công.');
            }}
            disabled={
              !subQuesPart2.idQuestion ||
              (subQuesPart2.subQuestions &&
                subQuesPart2.subQuestions.length === 1)
                ? true
                : false
            }
          >
            Thêm câu hỏi nhỏ
          </Button>
          <Button
            type="primary"
            onClick={handleUploadPart2Content}
            disabled={!subQuesPart2.idQuestion ? true : false}
          >
            Đăng phần nội dung câu hỏi
          </Button>
        </div>
      </div>
    </div>
  );
};

export default withCookies(UploadPart2);
