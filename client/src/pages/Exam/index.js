import React from 'react';
<<<<<<< HEAD
import {Row, Col} from 'antd';
import './style.scss'
const prefixCls = 'home';

const Exam = (props) => {
  return <div className={`${prefixCls}`}> 
    <div className="" style={{marginTop : "1.5em"}}>
      <Row>
        <Col span={8} offset={4}>Thông tin bài thi</Col>
      </Row>
      <Row>
        <Col span={8} offset={4}>Thời gian làm bài: 120 phút</Col>
      </Row>
      <Row>
        <Col span={8} offset={4}>Listening: 45 phút</Col>
      </Row>
      <Row>
        <Col span={8} offset={4}>Reading: 75 phút</Col>
      </Row>
      <div style={{textAlign : "center"}}>
        <button 
          onClick={() => props.history.push('/exam/intro')}
          className="ant-btn-primary ant-card-hoverable" 
        >
          Bắt đầu
        </button>
      </div>
      
    </div>
  </div>;
=======
import { Row, Col } from 'antd';
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
          <button
            onClick={() => props.history.push('/exam/intro')}
            className="ant-btn-primary ant-card-hoverable"
          >
            Bắt đầu
          </button>
        </div>
      </div>
    </div>
  );
>>>>>>> 14eef0a724087e2d0b8a84b3429c0f3bec406b00
};

export default Exam;
