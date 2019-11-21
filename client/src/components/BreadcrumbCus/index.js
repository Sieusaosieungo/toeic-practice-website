import React from 'react';
import { Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';

import './style.scss';

const BreadcrumbCus = ({}) => {
  return (
    <div className="breadcrumb-cus">
      <Breadcrumb>
        <Breadcrumb.Item>Trang chủ</Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link to="">Học ngữ pháp</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link to="">Học từ mới</Link>
        </Breadcrumb.Item>
      </Breadcrumb>
    </div>
  );
};

export default BreadcrumbCus;
