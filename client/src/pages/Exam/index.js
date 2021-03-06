import React from 'react';
import { Row, Col, Button } from 'antd';
import './style.scss';
const prefixCls = 'exam';

const Exam = props => {
  return (
    <div className={`${prefixCls}`}>
      <div className="" style={{ marginTop: '1.5em' }}>
        <Row>
          <Col span={8} offset={4}>
            Thông tin bài thi
          </Col>
        </Row>
        <Row>
          <Col span={8} offset={4}>
            Thời gian làm bài: 120 phút
          </Col>
        </Row>
        <Row>
          <Col span={8} offset={4}>
            Listening: 45 phút
          </Col>
        </Row>
        <Row>
          <Col span={8} offset={4}>
            Reading: 75 phút
          </Col>
        </Row>
        <div style={{ textAlign: 'center' }}>
          <Button
            onClick={() => props.history.push('/exam/intro')}
            className="ant-btn-primary ant-card-hoverable"
          >
            Bắt đầu
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Exam;
