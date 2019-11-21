import React from 'react';
import {Row, Col, List} from 'antd';
import './style.scss'
const prefixCls = 'home';

const data = [
  'Hiện tại đơn. Hiện tại tiếp diễn',
  'Hiện tại hoàn thành',
  'Quá khứ đơn',
  'Quá khứ tiếp diễn',
  'Tương lai đơn',
];

const Grammar = ({}) => {
  return <div className={`${prefixCls}`}> 
    <div className="" style={{marginTop : "1.5em"}}>
      <Row>
        <Col span={6} offset={2}>
        	<Row style= {{paddingRight : "30px"}}>
        		<List
      
			      footer={<div>Footer</div>}
			      bordered
			      dataSource={data}
			      renderItem={item => (
			        <List.Item>
			           <a href="#">{item}</a>
			        </List.Item>
			      )}
			    />
        	</Row>
        </Col>
        <Col span={12}>
        	<Row id=""><h1>Hiện tại đơn. Hiện tại tiếp diễn</h1></Row>
        </Col>
      </Row>
      
    </div>
  </div>;
};

export default Grammar;
