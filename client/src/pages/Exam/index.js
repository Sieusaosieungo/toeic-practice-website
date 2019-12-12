import React from 'react';
import { Row, Col, Button } from 'antd';
import './style.scss';
import { services} from "../../services"
import { connect} from 'react-redux';
const prefixCls = 'exam';

const Exam = props => {
  console.log(props)
  return (
    <div className={`${prefixCls}`}>
      <div className={`${prefixCls}-content`}>
        <h1>Thi thử</h1>
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
              onClick={() => {
                
                // props.dispatch({type : "EXAM", data})
                services.getExamTest({level : 2})
                  .then(res => {
                    sessionStorage.startTest = Date.now();
                    props.dispatch({type : "EXAM_TEST", data : res.data.questions})
                    props.history.push('/exam/intro?id=' + res.data.test._id);
                  })
              }}
              className="ant-btn-primary ant-card-hoverable"
              style={{marginBottom : "3em", marginTop : "2em"}}
            >
              Bắt đầu
            </Button>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default connect(null)(Exam);
