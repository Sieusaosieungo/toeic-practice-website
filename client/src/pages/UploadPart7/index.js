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
          `Đăng bài thành công. Bạn cần phải upload thêm 4 câu hỏi nhỏ.`,
        );
        setSubQuesPart7({ ...subQuesPart7, idQuestion: res.data.results._id });
      })
      .catch(err => console.log(err));
  };

  const handleUploadPart7Content = () => {
    axios({
      method: 'POST',
      url: `${config.API_URL}/api/questions/sub-questions`,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      data: subQuesPart7,
    })
      .then(res => {
        message.success('Bạn đã hoàn tất đăng câu hỏi.');
        setPart7({ ...part7, part: 7, level: 0, paragraph: '' });
        setSubQuesPart7({});
      })
      .catch(err => {
        message.error('Đăng câu hỏi lỗi. Mời bạn đăng lại.');
        console.log(err);
      });
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
            value={part7.level}
            disabled={!(subQuesPart7.idQuestion === undefined)}
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
          disabled={!(subQuesPart7.idQuestion === undefined)}
        />
        <div className="upload-part7-btn">
          <Button
            type="primary"
            onClick={handleUploadPart7Des}
            disabled={!(subQuesPart7.idQuestion === undefined)}
          >
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
            disabled={
              !subQuesPart7.idQuestion ||
              (subQuesPart7.subQuestions &&
                subQuesPart7.subQuestions.length === 4)
                ? true
                : false
            }
          />
        </div>
        <div className="upload-part7-raw">
          <div className="question-title">A:</div>
          <Input
            name="A"
            onChange={handleChangeSubQues}
            value={subQuesPart7Child.A}
            disabled={
              !subQuesPart7.idQuestion ||
              (subQuesPart7.subQuestions &&
                subQuesPart7.subQuestions.length === 4)
                ? true
                : false
            }
          />
        </div>
        <div className="upload-part7-raw">
          <div className="question-title">B:</div>
          <Input
            name="B"
            onChange={handleChangeSubQues}
            value={subQuesPart7Child.B}
            disabled={
              !subQuesPart7.idQuestion ||
              (subQuesPart7.subQuestions &&
                subQuesPart7.subQuestions.length === 4)
                ? true
                : false
            }
          />
        </div>
        <div className="upload-part7-raw">
          <div className="question-title">C:</div>
          <Input
            name="C"
            onChange={handleChangeSubQues}
            value={subQuesPart7Child.C}
            disabled={
              !subQuesPart7.idQuestion ||
              (subQuesPart7.subQuestions &&
                subQuesPart7.subQuestions.length === 4)
                ? true
                : false
            }
          />
        </div>
        <div className="upload-part7-raw">
          <div className="question-title">D:</div>
          <Input
            name="D"
            onChange={handleChangeSubQues}
            value={subQuesPart7Child.D}
            disabled={
              !subQuesPart7.idQuestion ||
              (subQuesPart7.subQuestions &&
                subQuesPart7.subQuestions.length === 4)
                ? true
                : false
            }
          />
        </div>
        <div className="upload-part7-raw">
          <div className="question-title">Answer:</div>
          <Input
            name="answer"
            onChange={handleChangeSubQues}
            value={subQuesPart7Child.answer}
            disabled={
              !subQuesPart7.idQuestion ||
              (subQuesPart7.subQuestions &&
                subQuesPart7.subQuestions.length === 4)
                ? true
                : false
            }
          />
        </div>
        <div className="upload-part7-raw">
          <div className="question-title">Tips:</div>
          <Input
            name="tips"
            onChange={handleChangeSubQues}
            value={subQuesPart7Child.tips}
            disabled={
              !subQuesPart7.idQuestion ||
              (subQuesPart7.subQuestions &&
                subQuesPart7.subQuestions.length === 4)
                ? true
                : false
            }
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
              message.warning(
                `Thêm câu hỏi nhỏ thành công. Bạn cần phải upload ${
                  subQuesPart7.subQuestions
                    ? Math.abs(subQuesPart7.subQuestions.length - 3)
                    : 3
                } thêm câu hỏi nhỏ.`,
              );
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
            disabled={
              subQuesPart7.subQuestions &&
              subQuesPart7.subQuestions.length === 4
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

export default withCookies(UploadPart7);
