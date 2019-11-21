import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

import './styles.scss';

const LeftNav = ({ mode = 'horizontal' }) => {
  return (
    <Menu mode={mode} defaultSelectedKeys={['hoc-ngu-phap']}>
      <Menu.Item key={'trang-chu'}>
        <Link to="/">Trang chủ</Link>
      </Menu.Item>
      <Menu.Item key={'hoc-tu-moi'}>
        <Link to="/hoc-tu-moi">Học từ mới</Link>
      </Menu.Item>
      <Menu.Item key={'hoc-ngu-phap'}>
        <Link to="/grammar">Học ngữ pháp</Link>
      </Menu.Item>
      <Menu.Item key={'thi-thu'}>
        <Link to="/exam">Thi thử</Link>
      </Menu.Item>
    </Menu>
  );
};
export default LeftNav;
