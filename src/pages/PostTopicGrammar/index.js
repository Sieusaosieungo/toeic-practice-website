import React, { useState } from 'react';
import { Input, Button, Row, Col, Spin, message } from 'antd';
import axios from 'axios';
import config from '../../utils/config';
import { withCookies } from 'react-cookie';
import './style.scss';

const PostTopicGrammar = ({
  cookies: {
    cookies: { accessToken },
  },
}) => {
  const [topic, setTopic] = useState({title : ""});
  const [submit, setSubmit] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setTopic({ ...topic, [name]: value });
  };

  console.log(topic)
  const checkHandle = () => {
    setSubmit(true);
    if(topic.title.length > 0 && topic.title.length <= 25) {
      handleUpload();
    }
  }
  const handleUpload = () => {
    setLoading(true);
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
        setTopic({title : ""});
        setLoading(false);
        message.success("Thêm tiêu đề ngữ pháp thành công");
      })
      .catch(err => {
        console.log(err); 
        setLoading(false);
        message.error("Thêm tiêu đề ngữ pháp thất bại")
      });
  };

  return (
    <Spin spinning={loading}>
    <div className="post-topic-grammar">
        <Row>
          <Col span={8} style={{lineHeight : "2.125"}}>Tiêu đề ngữ pháp: <span style={{color : "red"}}>*</span></Col>
          <Col span={16}>
            <Input name="title" value={topic.title} style={{width : "100%"}} onChange={handleChange} />
            {
              submit &&
              topic.title.length == 0 &&
              <small style={{display:"block",marginTop:".25rem", color:"red"}}>Vui lòng nhập tiêu đề ngữ pháp</small>
            }
            {
              submit &&
              topic.title.length > 25 &&
              <small style={{display:"block",marginTop:".25rem", color:"red"}}>Tiêu đồ Topic không được nhiều hơn  25 kí tự</small>
            }
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

export default withCookies(PostTopicGrammar);
