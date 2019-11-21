<<<<<<< HEAD
import React from "react";
import { Input } from "antd";

import "./styles.scss";
=======
import React from 'react';
import { Input } from 'antd';

import './styles.scss';
>>>>>>> 14eef0a724087e2d0b8a84b3429c0f3bec406b00

const { Search } = Input;

const SearchInput = () => {
  const onSearch = value => {
    console.log(value);
  };

  return (
    <Search
<<<<<<< HEAD
      placeholder="Input product name"
=======
      placeholder="Nhập tên từ mới"
>>>>>>> 14eef0a724087e2d0b8a84b3429c0f3bec406b00
      onSearch={onSearch}
      enterButton
      onPressEnter={onSearch}
    />
  );
};
export default SearchInput;
