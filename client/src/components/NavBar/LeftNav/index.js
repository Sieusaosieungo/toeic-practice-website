import React from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router';

import './styles.scss';
import SubMenu from 'antd/lib/menu/SubMenu';

const LeftNav = ({ mode = 'horizontal' }) => {
  let location = useLocation().pathname.substring(1);
  location = location == '' ? 'dashboard' : location;
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
      <SubMenu
        key="test"
        title={
          <Link
            to="#"
            className="submenu-title-wrapper"
            style={{
              fontWeight: '500',
              color: 'rgba(0, 0, 0, 0.65)',
            }}
          >
            Luyện tập
          </Link>
        }
      >
        <Menu.Item key={'practice-part1'}>
          <Link to="/practice/part1">Luyện tập part 1</Link>
        </Menu.Item>
        <Menu.Item key={'practice-part2'}>
          <Link to="/practice/part2">Luyện tập part 2</Link>
        </Menu.Item>
        <Menu.Item key={'practice-part3'}>
          <Link to="/practice/part3">Luyện tập part 3</Link>
        </Menu.Item>
        <Menu.Item key={'practice-part4'}>
          <Link to="/practice/part4">Luyện tập part 4</Link>
        </Menu.Item>
        <Menu.Item key={'practice-part5'}>
          <Link to="/practice/part5">Luyện tập part 5</Link>
        </Menu.Item>
        <Menu.Item key={'practice-part6'}>
          <Link to="/practice/part6">Luyện tập part 6</Link>
        </Menu.Item>
        <Menu.Item key={'practice-part7'}>
          <Link to="/practice/part7">Luyện tập part 7</Link>
        </Menu.Item>
      </SubMenu>
    </Menu>
  );
};
export default LeftNav;
