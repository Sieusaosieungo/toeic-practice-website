import React, { useState, useRef } from 'react';
import { Button, Select, message, Input } from 'antd';
import axios from 'axios';
import config from '../../utils/config';
import { withCookies } from 'react-cookie';
import CKEditor from '@ckeditor/ckeditor5-react';
import CKEditorCustom from '../../components/CKEditorCustom';

import TextArea from 'antd/lib/input/TextArea';
import './style.scss';

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
    scripts: '',
  });
  const [subQuesPart1Child, setSubQuesPart1Child] = useState({});
  const refInputAudio = useRef(null);
  const refInputImage = useRef(null);

  const handleUploadPart1Des = async () => {
    const formData = new FormData();

    formData.set('part', part1.part);
    formData.set('level', part1.level);
    formData.set('audio', part1.audio);
    formData.set('scripts', part1.scripts);
    formData.set('image', part1.image);

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
        subQuestions: [subQuesPart1Child],
      },
    })
      .then(res => {
        message.success('Đăng bài thành công.');
        setPart1({ part: 1, level: 0, audio: '' });
        refInputAudio.current.value = null;
        refInputImage.current.value = null;
        setSubQuesPart1Child({});
      })
      .catch(err => console.log(err.response));
  };

  const handleChange = value => setPart1({ ...part1, level: value });

  const handleChangeScripts = e =>
    setPart1({ ...part1, scripts: e.target.value });

  const handleChangeAudio = ({ target: { files } }) =>
    setPart1({ ...part1, audio: files[0] });

  const handleChangeImage = ({ target: { files } }) =>
    setPart1({ ...part1, image: files[0] });

  const handleChangeSubQues = ({ target: { name, value } }) =>
    setSubQuesPart1Child({ ...subQuesPart1Child, [name]: value });

  return (
    <div className="upload-part1">
      <div className="upload-part1-content">
        <div className="upload-part1-raw">
          <div>Chọn độ khó của câu hỏi:</div>
          <Select
            className="upload-part1-level"
            placeholder="Chọn độ khó của câu hỏi"
            onChange={handleChange}
            value={part1.level}
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
              ref={refInputAudio}
            />
            <span>Chọn audio</span>
          </label>
        </div>
        <div style={{ textAlign: 'center', marginTop: '1rem' }}>
          <label className="upload-btn-wrapper">
            <input
              type="file"
              required
              onChange={handleChangeImage}
              name="productAttachImages"
              ref={refInputImage}
            />
            <span>Chọn ảnh</span>
          </label>
        </div>
        <div className="upload-part1-raw">
          <div>Scripts:</div>
          <CKEditor
            editor={CKEditorCustom}
            data={part1.scripts}
            onChange={(event, editor) => {
              const data = editor.getData();
              setPart1({ ...part1, scripts: data });
            }}
          />
        </div>
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
          <Button type="primary" onClick={handleUploadPart1Des}>
            Đăng câu hỏi
          </Button>
        </div>
      </div>
    </div>
  );
};

export default withCookies(UploadPart1);
