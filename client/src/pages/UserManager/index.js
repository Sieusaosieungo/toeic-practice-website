import React, { useState, useEffect } from 'react';
import { Table, Divider, Tag } from 'antd';
import axios from 'axios';
import config from '../../utils/config';
import { withCookies } from 'react-cookie';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Email',
    dataIndex: 'email',
  },
  {
    title: 'Giới tính',
    dataIndex: 'gender',
    render: (gender) => {
      return gender === 'male' ? <span>Nam</span> : <span>Nữ</span>;
    }
  },
  {
    title: 'Thời điểm tạo',
    dataIndex: 'createdAt',
    align: 'center',
    render: dateString => {
      const date = new Date(dateString);
      return (
        <span style={{ textAlign: 'center', display: 'block' }}>
          {date.getDate() +
            ' - ' +
            (date.getMonth() + 1) +
            ' - ' +
            date.getFullYear()}
        </span>
      );
    },
  },
];

const UserManager = ({
  cookies: {
    cookies: { accessToken },
  },
}) => {
  const [users, setUsers] = useState('');
  useEffect(() => {
    console.log('abc');
    axios({
      method: 'GET',
      url: `${config.API_URL}/api/users/get-list`,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then(res => {
        setUsers(res.data.results.users.filter(user => user.role.id === 0));
      })
      .catch(err => {
        console.log(err.response.data.message);
      });
  }, []);

  return (
    <Table
      columns={columns}
      rowKey="_id"
      bordered
      className="table"
      dataSource={users}
      pagination={{ pageSize: 6 }}
    />
  );
};

export default withCookies(UserManager);
