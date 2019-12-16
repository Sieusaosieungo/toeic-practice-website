import React, { useState } from 'react';
import { Input, Button, Row, Col, Spin, message } from 'antd';
import axios from 'axios';
import config from '../../utils/config';
import { withCookies } from 'react-cookie';
import './style.scss';

const UploadTopicNewword = ({
  cookies: {
    cookies: { accessToken },
  },
}) => {
  const [topic, setTopic] = useState({ title: '', image: null });
  const [submit, setSubmit] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = ({ target: { name, value, files } }) => {
    if (name === 'title') {
      setTopic({ ...topic, [name]: value });
    } else {
      setTopic({ ...topic, [name]: files[0] });
    }
  };

  console.log(topic);
  const checkHandle = () => {
    setSubmit(true);
    if (topic.title.length > 0 && topic.title.length <= 25) {
      handleUpload();
    }
  };
  const handleUpload = () => {
    const formData = new FormData();
    formData.set('title', topic.title);
    formData.set('image', topic.image);

    setLoading(true);
    axios({
      method: 'POST',
      url: `${config.API_URL}/api/new-word-topics`,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      data: formData,
    })
      .then(res => {
        console.log(res.data);
        setTopic({ title: '' });
        setLoading(false);
        message.success('Thêm tiêu đề từ mới thành công');
      })
      .catch(err => {
        console.log(err);
        setLoading(false);
        message.error('Thêm tiêu đề từ mới thất bại');
      });
  };

  return (
    <Spin spinning={loading}>
      <div className="post-topic-grammar">
        <Row>
          <div style={{ textAlign: 'center', margin: '1rem 0 1rem' }}>
            <label className="upload-btn-wrapper" style={{ width: '20%' }}>
              <input
                type="file"
                required
                onChange={handleChange}
                name="image"
              />
              <span>Chọn ảnh</span>
            </label>
          </div>
        </Row>
        <Row>
          <Col span={8} style={{ lineHeight: '2.125' }}>
            Tiêu đề từ mới: <span style={{ color: 'red' }}>*</span>
          </Col>
          <Col span={16}>
            <Input
              name="title"
              value={topic.title}
              style={{ width: '100%' }}
              onChange={handleChange}
            />
            {submit && topic.title.length === 0 && (
              <small
                style={{ display: 'block', marginTop: '.25rem', color: 'red' }}
              >
                Vui lòng nhập tiêu đề từ mới
              </small>
            )}
            {submit && topic.title.length > 25 && (
              <small
                style={{ display: 'block', marginTop: '.25rem', color: 'red' }}
              >
                Tiêu đề Topic không được nhiều hơn 25 kí tự
              </small>
            )}
          </Col>
        </Row>

        <div className="post-topic-grammar-btn">
          <Button type="primary" onClick={checkHandle}>
            Đăng
          </Button>
        </div>
      </div>
    </Spin>
  );
};

export default withCookies(UploadTopicNewword);
