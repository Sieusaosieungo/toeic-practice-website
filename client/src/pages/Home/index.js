import React from 'react';
import {Row, Col} from 'antd';
import './style.scss';

const prefixCls = 'home';

const Home = ({}) => {
  return <div className={`${prefixCls}`}> 
    <Row>
      <img width={window.screen.width} src="./banner-1.jpg" style={{marginTop : "0.5em"}}/>
    </Row>
    <div className="" style={{marginTop : "1.5em"}}>
      <div className="text-align-center"><h1>Tại sao chọn chúng tôi</h1></div>
      <Row>
        <Col className="icon-featured" span={8}>
          <h4>Rèn luyện từ vựng</h4>
          <img className="featured-icon" src="http://toeic24.vn/img/1.png"/>
          <p>Với nhiều chủ đề phong phú, đa dạng</p>
        </Col>
        <Col className="icon-featured" span={8}>
          <h4>Nâng cao ngữ pháp</h4>
          <img className="featured-icon" src="http://toeic24.vn/img/2.png"/>
          <p>Đầy đủ các dạng, các thì của ngữ pháp</p>
        </Col>
        <Col className="icon-featured" span={8}>
          <h4>Luyện thi đơn giản</h4>
          <img className="featured-icon" src="http://toeic24.vn/img/3.png"/>
          <p>Làm bài thi có chọn lọc và chất lượng</p>
        </Col>
      </Row>
      <div className="text-align-center"><button className="ant-btn-primary ant-card-hoverable" >Thi thử nào</button></div>
      
    </div>
  </div>;
};

export default Home;
