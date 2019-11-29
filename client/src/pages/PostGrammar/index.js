import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { withCookies } from 'react-cookie';
import { Select, Button, Input, message } from 'antd';
import './style.scss';

import config from '../../utils/config';
import CKEditor from '@ckeditor/ckeditor5-react';
import CKEditorCustom from '../../components/CKEditorCustom';

const { Option } = Select;

const PostGrammar = ({
  cookies: {
    cookies: { accessToken },
  },
}) => {
  const [grammarTopics, setGrammarTopics] = useState([]);
  const [grammar, setGrammar] = useState({
    title: '',
    content: '',
    idGrammarTopic: '',
  });

  const handleChangeIdTopic = value => {
    setGrammar({ ...grammar, idGrammarTopic: value });
  };

  const handleChangeTitleGrammar = e => {
    const { name, value } = e.target;
    setGrammar({ ...grammar, [name]: value });
  };

  const handlePostGrammar = () => {
    axios({
      method: 'POST',
      url: `${config.API_URL}/api/grammar`,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      data: grammar,
    })
      .then(res => {
        message.success('Đăng bài thành công.');
        // setGrammarTopics(res.data.results.topics);
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    axios({
      method: 'GET',
      url: `${config.API_URL}/api/grammar-topics`,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then(res => {
        setGrammarTopics(res.data.results.topics);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="post-grammar">
      <div className="post-grammar-title">
        <div className="post-grammar-row">
          <div>Nhập tiêu đề ngữ pháp:</div>
          <Input
            className="post-grammar-input"
            placeholder="Nhập tiêu đề ngữ pháp"
            name="title"
            onChange={handleChangeTitleGrammar}
          />
        </div>
        <div className="post-grammar-row">
          <div>Chọn topic: </div>
          <Select
            className="post-grammar-input"
            onChange={handleChangeIdTopic}
            placeholder="Chọn topic cho ngữ pháp bạn muốn đăng"
          >
            {grammarTopics.map(({ _id, title }, index) => (
              <Option key={index} value={_id}>
                {title}
              </Option>
            ))}
          </Select>
        </div>
      </div>
      <CKEditor
        editor={CKEditorCustom}
        data={grammar.content}
        onChange={(event, editor) => {
          const data = editor.getData();
          setGrammar({ ...grammar, content: data });
        }}
      />
      <div className="post-grammar-btn">
        <Button type="primary" onClick={handlePostGrammar}>
          Đăng
        </Button>
      </div>
      <hr />
      <h1>Xem nội dung bài đăng trước khi đăng bài:</h1>
      <hr />
      <div
        style={{ marginTop: '2rem' }}
        className="ck-post-display"
        dangerouslySetInnerHTML={{ __html: grammar.content }}
      ></div>
    </div>
  );
};

export default withCookies(PostGrammar);
