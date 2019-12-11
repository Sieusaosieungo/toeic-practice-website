import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import { useLocation} from "react-router";

import './styles.scss';

const LeftNav = ({ mode = 'horizontal' }) => {
  let location = useLocation().pathname.substring(1);
  location = location == "" ? "dashboard" : location
  return (
    <Menu mode={mode} defaultSelectedKeys={[`${location}`]}>
      <Menu.Item key={'dashboard'}>
        <Link to="/">Trang chủ</Link>
      </Menu.Item>
      <Menu.Item key={'new-word'}>
        <Link to="/new-word">Học từ mới</Link>
      </Menu.Item>
      <Menu.Item key={'grammar'}>
        <Link to="/grammar">Học ngữ pháp</Link>
      </Menu.Item>
      <Menu.Item key={'exam'}>
        <Link to="/exam">Thi thử</Link>
      </Menu.Item>
    </Menu>
  );
};
export default LeftNav;
