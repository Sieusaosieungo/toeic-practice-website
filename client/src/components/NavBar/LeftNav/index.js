import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

import './styles.scss';

const SearchInput = ({ mode = 'horizontal' }) => {
  return (
    <Menu mode={mode} selectedKeys={[]}>
      <Menu.Item key={'hoc-tu-moi'}>
        <Link to="/hoc-tu-moi">Học từ mới</Link>
      </Menu.Item>
    </Menu>
  );
};
export default SearchInput;
