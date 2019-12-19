import React, { useState, useEffect, useRef } from 'react';
import { Button, Select, message, Input } from 'antd';
import axios from 'axios';
import config from '../../utils/config';
import { withCookies } from 'react-cookie';

import TextArea from 'antd/lib/input/TextArea';
import './style.scss';

const { Option } = Select;

const UploadNewword = ({
  cookies: {
    cookies: { accessToken },
  },
}) => {
  const [newword, setNewword] = useState({});
  const [newwordTopics, setNewwordTopics] = useState([]);
  const refUploadNewword = useRef(null);

  const handleChangeIdTopic = value => {
    setNewword({ ...newword, idNewWordTopic: value });
  };

  const handleSubmitImage = ({ target: { files, name } }) => {
    setNewword({ ...newword, [name]: files[0] });
  };
  const handleChange = ({ target: { value, name } }) => {
    setNewword({ ...newword, [name]: value });
  };

  const handleSubmit = () => {
    const formData = new FormData();
    formData.set('newWord', newword.newWord);
    formData.set('meaning', newword.meaning);
    formData.set('idNewWordTopic', newword.idNewWordTopic);
    formData.set('image', newword.image);
    formData.set('example', newword.example);

    axios({
      method: 'POST',
      url: `${config.API_URL}/api/new-words`,
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'multipart/form-data',
      },
      data: formData,
    })
      .then(res => {
        message.success('Đăng từ mới thành công.');
        setNewword({});
        refUploadNewword.current.value = null;
      })
      .catch(err => console.log(err.response));
  };

  useEffect(() => {
    axios({ method: 'GET', url: `${config.API_URL}/api/new-word-topics` })
      .then(res => {
        console.log(res.data.results);

        setNewwordTopics(res.data.results.topics);
      })
      .catch(e => console.log(e));
  }, []);

  return (
    <div className="upload-newword">
      <div
        className="upload-newword-raw"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(12,1fr)',
          marginBottom: '2rem',
        }}
      >
        <span>Chọn topic: </span>
        <Select
          style={{ gridColumn: '3/11' }}
          onChange={handleChangeIdTopic}
          placeholder="Chọn topic cho từ mới bạn muốn đăng"
          value={newword.idNewWordTopic}
        >
          {newwordTopics.map(({ _id, title }, index) => (
            <Option key={index} value={_id}>
              {title}
            </Option>
          ))}
        </Select>
      </div>
      <div className="upload-newword-content">
        <div style={{ textAlign: 'center', margin: '1rem 0 1rem' }}>
          <label className="upload-btn-wrapper">
            <input
              type="file"
              required
              onChange={handleSubmitImage}
              name="image"
              ref={refUploadNewword}
            />
            <span>Chọn ảnh</span>
          </label>
        </div>
      </div>
      <div className="upload-newword-question">
        <div className="upload-newword-raw">
          <span className="question-title" style={{ gridColumn: '1/2' }}>
            Newword:
          </span>
          <Input
            style={{ gridColumn: '2/4' }}
            name="newWord"
            onChange={handleChange}
            value={newword.newWord}
          />
          <span className="question-title" style={{ gridColumn: '5/6' }}>
            Meaning:
          </span>
          <Input
            style={{ gridColumn: '6/8' }}
            name="meaning"
            onChange={handleChange}
            value={newword.meaning}
          />
        </div>
        <div className="upload-newword-raw">
          <span className="question-title" style={{ gridColumn: '1/2' }}>
            Example:
          </span>
          <Input
            style={{ gridColumn: '2/8' }}
            name="example"
            onChange={handleChange}
            value={newword.example}
          />
        </div>
        <div className="upload-newword-btn">
          <Button type="primary" onClick={handleSubmit}>
            Đăng phần nội dung câu hỏi
          </Button>
        </div>
      </div>
    </div>
  );
};

export default withCookies(UploadNewword);
