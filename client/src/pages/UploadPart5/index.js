import React, { useState } from 'react';
import { Button, Select, message, Input } from 'antd';
import axios from 'axios';
import config from '../../utils/config';
import { withCookies } from 'react-cookie';

import './style.scss';

const { Option } = Select;

const UploadPart5 = ({
  cookies: {
    cookies: { accessToken },
  },
}) => {
  const [part5, setPart5] = useState({
    part: 5,
    level: 0,
  });
  const [subQuesPart5Child, setSubQuesPart5Child] = useState({});

  const handleUploadPart5Content = async () => {
    const formData = new FormData();
    formData.set('part', part5.part);
    formData.set('level', part5.level);

    try {
      const res = await axios({
        method: 'POST',
        url: `${config.API_URL}/api/questions/basic-info`,
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'multipart/form-data',
        },
        data: formData,
      });

      axios({
        method: 'POST',
        url: `${config.API_URL}/api/questions/sub-questions`,
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        data: {
          idQuestion: res.data.results._id,
          subQuestions: [subQuesPart5Child],
        },
      })
        .then(res => {
          message.success('Đăng bài thành công.');
          setSubQuesPart5Child({});
          setPart5({ part: 5, level: 0 });
        })
        .catch(err => {
          window.location.reload();
          message.error('Đăng câu hỏi lỗi. Mời bạn đăng lại.');
          console.log(err);
        });
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = value => setPart5({ ...part5, level: value });

  const handleChangeSubQues = e => {
    const { name, value } = e.target;
    setSubQuesPart5Child({ ...subQuesPart5Child, [name]: value });
  };

  return (
    <div className="upload-part5">
      <div className="upload-part5-content">
        <div className="upload-part5-raw">
          <div>Chọn độ khó của câu hỏi:</div>
          <Select
            className="upload-part5-level"
            placeholder="Chọn độ khó của câu hỏi"
            onChange={handleChange}
            value={part5.level}
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
      </div>
      <div className="upload-part5-question">
        <div className="upload-part5-raw">
          <div className="question-title">Câu hỏi:</div>
          <Input
            name="question"
            onChange={handleChangeSubQues}
            value={subQuesPart5Child.question}
          />
        </div>
        <div className="upload-part5-raw">
          <div className="question-title">A:</div>
          <Input
            name="A"
            onChange={handleChangeSubQues}
            value={subQuesPart5Child.A}
          />
        </div>
        <div className="upload-part5-raw">
          <div className="question-title">B:</div>
          <Input
            name="B"
            onChange={handleChangeSubQues}
            value={subQuesPart5Child.B}
          />
        </div>
        <div className="upload-part5-raw">
          <div className="question-title">C:</div>
          <Input
            name="C"
            onChange={handleChangeSubQues}
            value={subQuesPart5Child.C}
          />
        </div>
        <div className="upload-part5-raw">
          <div className="question-title">D:</div>
          <Input
            name="D"
            onChange={handleChangeSubQues}
            value={subQuesPart5Child.D}
          />
        </div>
        <div className="upload-part5-raw">
          <div className="question-title">Answer:</div>
          <Input
            name="answer"
            onChange={handleChangeSubQues}
            value={subQuesPart5Child.answer}
          />
        </div>
        <div className="upload-part5-raw">
          <div className="question-title">Tips:</div>
          <Input
            name="tips"
            onChange={handleChangeSubQues}
            value={subQuesPart5Child.tips}
          />
        </div>
        <div className="upload-part5-btn">
          <Button type="primary" onClick={handleUploadPart5Content}>
            Đăng câu hỏi
          </Button>
        </div>
      </div>
    </div>
  );
};

export default withCookies(UploadPart5);
