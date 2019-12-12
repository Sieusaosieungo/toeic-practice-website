import React, { useState } from 'react';
import { Input, Button } from 'antd';
import axios from 'axios';
import config from '../../utils/config';
import { withCookies } from 'react-cookie';
import './style.scss';

const PostTopicGrammar = ({
  cookies: {
    cookies: { accessToken },
  },
}) => {
  const [topic, setTopic] = useState({});

  const handleChange = e => {
    const { name, value } = e.target;
    setTopic({ ...topic, [name]: value });
  };

  const handleUpload = () => {
    axios({
      method: 'POST',
      url: `${config.API_URL}/api/grammar-topics`,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      data: topic,
    })
      .then(res => {
        console.log(res.data);
        setTopic('');
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="post-topic-grammar">
      <div className="post-topic-grammar-row">
        <div>Tiêu đề topic:</div>
        <Input name="title" value={topic.title} onChange={handleChange} />
      </div>
      <div className="post-topic-grammar-btn">
        <Button type="primary" onClick={handleUpload}>
          Đăng
        </Button>
      </div>
    </div>
  );
};

export default withCookies(PostTopicGrammar);
