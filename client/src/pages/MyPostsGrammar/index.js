import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { withCookies } from 'react-cookie';
import { Table, Button } from 'antd';

import config from '../../utils/config';

const columns = [
  {
    title: 'Tiêu đề bài đăng ngữ pháp',
    dataIndex: 'title',
    key: 'title',
  },
  {
    title: 'Topic của bài đăng ngữ pháp',
    dataIndex: 'idGrammarTopic',
    key: 'idGrammarTopic',
  },
  {
    title: 'Thao tác',
    key: 'action',
    render: () => <Button type="danger">Xóa</Button>,
  },
];

const MyPostsGrammar = ({
  cookies: {
    cookies: { accessToken },
  },
}) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios({
      method: 'GET',
      url: `${config.API_URL}/api/grammar`,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        idTopic: '5de0c6ef7f6d4b002423cef2',
        page: 1,
        records: 2,
      },
    })
      .then(res => {
        console.log(res.data.results.grammars.grammars);

        setPosts(res.data.results.grammars.grammars);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <Table dataSource={posts} columns={columns} />
    </div>
  );
};

export default withCookies(MyPostsGrammar);
