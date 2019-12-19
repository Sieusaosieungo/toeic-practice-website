import React, { useState, useRef } from 'react';
import { Button, Select, message, Input } from 'antd';
import axios from 'axios';
import config from '../../utils/config';
import { withCookies } from 'react-cookie';
import CKEditor from '@ckeditor/ckeditor5-react';
import CKEditorCustom from '../../components/CKEditorCustom';

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
    scripts: '',
  });
  const [subQuesPart2Child, setSubQuesPart2Child] = useState({});
  const refInputFile = useRef(null);

  const handleUploadPart2Des = async () => {
    const formData = new FormData();
    formData.set('part', part2.part);
    formData.set('level', part2.level);
    formData.set('audio', part2.audio);
    formData.set('scripts', part2.scripts);

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
        subQuestions: [subQuesPart2Child],
      },
    })
      .then(res => {
        message.success('Đăng bài thành công.');
        setPart2({ part: 2, level: 0, audio: null, scripts: '' });
        refInputFile.current.value = null;
        setSubQuesPart2Child({});
      })
      .catch(err => console.log(err.response));
  };

  const handleChange = value => setPart2({ ...part2, level: value });
  const handleChangeScripts = e =>
    setPart2({ ...part2, scripts: e.target.value });
  const handleChangeAudio = e => {
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
            value={part2.level}
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
            />
            <span>Chọn audio</span>
          </label>
        </div>
        <div className="upload-part2-raw">
          <div>Scripts:</div>
          <CKEditor
            editor={CKEditorCustom}
            data={part2.scripts}
            onChange={(event, editor) => {
              const data = editor.getData();
              setPart2({ ...part2, scripts: data });
            }}
          />
        </div>
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
          <Button type="primary" onClick={handleUploadPart2Des}>
            Đăng mô tả câu hỏi
          </Button>
        </div>
      </div>
    </div>
  );
};

export default withCookies(UploadPart2);
