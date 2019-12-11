import React, { useState } from 'react';
import './style.scss';
import { Button, Select, message, Input } from 'antd';
import CKEditor from '@ckeditor/ckeditor5-react';
import CKEditorCustom from '../../components/CKEditorCustom';
import axios from 'axios';
import config from '../../utils/config';
import { withCookies } from 'react-cookie';

import './style.scss';

const { Option } = Select;

const UploadPart6 = ({
  cookies: {
    cookies: { accessToken },
  },
}) => {
  const [part6, setPart6] = useState({
    part: 6,
    level: 0,
    paragraph: '',
  });
  const [subQuesPart6, setSubQuesPart6] = useState({});
  const [subQuesPart6Child, setSubQuesPart6Child] = useState({});

  const handleUploadPart6Des = () => {
    const formData = new FormData();
    formData.set('part', part6.part);
    formData.set('level', part6.level);
    formData.set('paragraph', part6.paragraph);

    console.log('form data before upload des:', accessToken);
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
        setSubQuesPart6({ ...subQuesPart6, idQuestion: res.data.results._id });
      })
      .catch(err => console.log(err));
  };

  const handleUploadPart6Content = () => {
    console.log('Data before upload content:', subQuesPart6);

    axios({
      method: 'POST',
      url: `${config.API_URL}/api/questions/sub-questions`,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      data: subQuesPart6,
    })
      .then(res => {
        message.success('Đăng bài thành công.');
        console.log('Subquestion after uploaded: ', res);
        setPart6({ part: 6, level: 0, paragraph: '' });
      })
      .catch(err => console.log(err));
  };

  const handleChange = value => setPart6({ ...part6, level: value });

  const handleChangeSubQues = e => {
    const { name, value } = e.target;
    setSubQuesPart6Child({ ...subQuesPart6Child, [name]: value });
  };

  return (
    <div className="upload-part6">
      <div className="upload-part6-content">
        <div className="upload-part6-raw">
          <div>Chọn độ khó của câu hỏi:</div>
          <Select
            className="upload-part6-level"
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
        <CKEditor
          editor={CKEditorCustom}
          data={part6.paragraph}
          onChange={(event, editor) => {
            const data = editor.getData();
            setPart6({ ...part6, paragraph: data });
          }}
        />
        <div className="upload-part6-btn">
          <Button type="primary" onClick={handleUploadPart6Des}>
            Đăng mô tả câu hỏi
          </Button>
        </div>
      </div>
      <br /> <hr /> <br />
      <div className="upload-part6-question">
        <div className="upload-part6-raw">
          <div className="question-title">Câu hỏi:</div>
          <Input
            name="question"
            onChange={handleChangeSubQues}
            value={subQuesPart6Child.question}
          />
        </div>
        <div className="upload-part6-raw">
          <div className="question-title">A:</div>
          <Input
            name="A"
            onChange={handleChangeSubQues}
            value={subQuesPart6Child.A}
          />
        </div>
        <div className="upload-part6-raw">
          <div className="question-title">B:</div>
          <Input
            name="B"
            onChange={handleChangeSubQues}
            value={subQuesPart6Child.B}
          />
        </div>
        <div className="upload-part6-raw">
          <div className="question-title">C:</div>
          <Input
            name="C"
            onChange={handleChangeSubQues}
            value={subQuesPart6Child.C}
          />
        </div>
        <div className="upload-part6-raw">
          <div className="question-title">D:</div>
          <Input
            name="D"
            onChange={handleChangeSubQues}
            value={subQuesPart6Child.D}
          />
        </div>
        <div className="upload-part6-raw">
          <div className="question-title">Answer:</div>
          <Input
            name="answer"
            onChange={handleChangeSubQues}
            value={subQuesPart6Child.answer}
          />
        </div>
        <div className="upload-part6-raw">
          <div className="question-title">Tips:</div>
          <Input
            name="tips"
            onChange={handleChangeSubQues}
            value={subQuesPart6Child.tips}
          />
        </div>
        <div className="upload-part6-btn">
          <Button
            type="primary"
            onClick={() => {
              setSubQuesPart6({
                ...subQuesPart6,
                subQuestions: [
                  ...(subQuesPart6.subQuestions
                    ? subQuesPart6.subQuestions
                    : []),
                  subQuesPart6Child,
                ],
              });
              setSubQuesPart6Child({});
              message.success('Thêm câu hỏi nhỏ thành công.');
            }}
            disabled={
              !subQuesPart6.idQuestion ||
              (subQuesPart6.subQuestions &&
                subQuesPart6.subQuestions.length === 3)
                ? true
                : false
            }
          >
            Thêm câu hỏi nhỏ
          </Button>
          <Button
            type="primary"
            onClick={handleUploadPart6Content}
            disabled={!subQuesPart6.idQuestion ? true : false}
          >
            Đăng phần nội dung câu hỏi
          </Button>
        </div>
      </div>
    </div>
  );
};

export default withCookies(UploadPart6);
