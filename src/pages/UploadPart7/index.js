import React, { useState } from 'react';
import './style.scss';
import { Button, Select, message, Input } from 'antd';
import CKEditor from '@ckeditor/ckeditor5-react';
import CKEditorCustom from '../../components/CKEditorCustom';
import axios from 'axios';
import config from '../../utils/config';
import { withCookies } from 'react-cookie';

const { Option } = Select;

const UploadPart7 = ({
  cookies: {
    cookies: { accessToken },
  },
}) => {
  const [part7, setPart7] = useState({
    part: 7,
    level: 0,
    paragraph: '',
  });
  const [subQuesPart7, setSubQuesPart7] = useState({});
  const [subQuesPart7Child, setSubQuesPart7Child] = useState({});

  const handleUploadPart7Des = () => {
    const formData = new FormData();
    formData.set('part', part7.part);
    formData.set('level', part7.level);
    formData.set('paragraph', part7.paragraph);

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
        setSubQuesPart7({ ...subQuesPart7, idQuestion: res.data.results._id });
      })
      .catch(err => console.log(err));
  };

  const handleUploadPart7Content = () => {
    console.log('Data before upload content:', subQuesPart7);

    axios({
      method: 'POST',
      url: `${config.API_URL}/api/questions/sub-questions`,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      data: subQuesPart7,
    })
      .then(res => {
        message.success('Đăng bài thành công.');
        console.log('Subquestion after uploaded: ', res);
        setPart7({ part: 7, level: 0, paragraph: '' });
      })
      .catch(err => console.log(err));
  };

  const handleChange = value => setPart7({ ...part7, level: value });

  const handleChangeSubQues = e => {
    const { name, value } = e.target;
    setSubQuesPart7Child({ ...subQuesPart7Child, [name]: value });
  };

  return (
    <div className="upload-part7">
      <div className="upload-part7-content">
        <div className="upload-part7-raw">
          <div>Chọn độ khó của câu hỏi:</div>
          <Select
            className="upload-part7-level"
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
          data={part7.paragraph}
          onChange={(event, editor) => {
            const data = editor.getData();
            setPart7({ ...part7, paragraph: data });
          }}
        />
        <div className="upload-part7-btn">
          <Button type="primary" onClick={handleUploadPart7Des}>
            Đăng mô tả câu hỏi
          </Button>
        </div>
      </div>
      <br /> <hr /> <br />
      <div className="upload-part7-question">
        <div className="upload-part7-raw">
          <div className="question-title">Câu hỏi:</div>
          <Input
            name="question"
            onChange={handleChangeSubQues}
            value={subQuesPart7Child.question}
          />
        </div>
        <div className="upload-part7-raw">
          <div className="question-title">A:</div>
          <Input
            name="A"
            onChange={handleChangeSubQues}
            value={subQuesPart7Child.A}
          />
        </div>
        <div className="upload-part7-raw">
          <div className="question-title">B:</div>
          <Input
            name="B"
            onChange={handleChangeSubQues}
            value={subQuesPart7Child.B}
          />
        </div>
        <div className="upload-part7-raw">
          <div className="question-title">C:</div>
          <Input
            name="C"
            onChange={handleChangeSubQues}
            value={subQuesPart7Child.C}
          />
        </div>
        <div className="upload-part7-raw">
          <div className="question-title">D:</div>
          <Input
            name="D"
            onChange={handleChangeSubQues}
            value={subQuesPart7Child.D}
          />
        </div>
        <div className="upload-part7-raw">
          <div className="question-title">Answer:</div>
          <Input
            name="answer"
            onChange={handleChangeSubQues}
            value={subQuesPart7Child.answer}
          />
        </div>
        <div className="upload-part7-raw">
          <div className="question-title">Tips:</div>
          <Input
            name="tips"
            onChange={handleChangeSubQues}
            value={subQuesPart7Child.tips}
          />
        </div>
        <div className="upload-part7-btn">
          <Button
            type="primary"
            onClick={() => {
              setSubQuesPart7({
                ...subQuesPart7,
                subQuestions: [
                  ...(subQuesPart7.subQuestions
                    ? subQuesPart7.subQuestions
                    : []),
                  subQuesPart7Child,
                ],
              });
              setSubQuesPart7Child({});
              message.success('Thêm câu hỏi nhỏ thành công.');
            }}
            disabled={
              !subQuesPart7.idQuestion ||
              (subQuesPart7.subQuestions &&
                subQuesPart7.subQuestions.length === 4)
                ? true
                : false
            }
          >
            Thêm câu hỏi nhỏ
          </Button>
          <Button
            type="primary"
            onClick={handleUploadPart7Content}
            disabled={!subQuesPart7.idQuestion ? true : false}
          >
            Đăng phần nội dung câu hỏi
          </Button>
        </div>
      </div>
    </div>
  );
};

export default withCookies(UploadPart7);
