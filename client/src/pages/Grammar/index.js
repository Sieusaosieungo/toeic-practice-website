import React from 'react';
import { Row, Col, List, Tag, Table, Tabs } from 'antd';
import { Link } from 'react-router-dom';
import './style.scss';

import BreadcrumbCus from '../../components/BreadcrumbCus';

const prefixCls = 'grammar';
const { TabPane } = Tabs;

const data = [
  'Hiện tại đơn. Hiện tại tiếp diễn',
  'Hiện tại hoàn thành',
  'Quá khứ đơn',
  'Quá khứ tiếp diễn',
  'Tương lai đơn',
];

const columns_grammar_01 = [
  {
    title: '',
    dataIndex: 'name',
    key: 'name',
    render: name => <b>{name}</b>,
  },
  {
    title: 'Hiện tại đơn',
    dataIndex: 'verb',
    key: 'verb',
    render: data => (
      <div>
        <b>{data[0]}</b>
        <br />
        {data[1]}
      </div>
    ),
  },
  {
    title: 'Hiện tại tiếp diễn',
    dataIndex: 'verbing',
    key: 'verbing',
    render: data => (
      <div>
        <b>{data[0]}</b>
        <br />
        {data[1]}
      </div>
    ),
  },
];

const data_grammar_01 = [
  {
    key: '1',
    name: '+',
    verb: ['S + V(s/es)', 'He plays tennis.'],
    verbing: ['S + am/is/are + Ving', 'The children are playing football now.'],
  },
  {
    key: '1',
    name: '-',
    verb: ['S + do not/ does not + Vinf', "She doesn't play tennis."],
    verbing: [
      'S + am/is/are + not + Ving',
      'The children are not playing football now.',
    ],
  },
  {
    key: '1',
    name: '?',
    verb: ['Do/Does + S + Vinf?', 'Do you play tennis?'],
    verbing: [
      'Am/Is/Are + S + Ving?',
      'Are the children playing football now?',
    ],
  },
];

const Grammar = ({ location }) => {
  console.log('location grammar page: ', location);

  return (
    <div className={`${prefixCls}`}>
      <BreadcrumbCus />
      <div className={`${prefixCls}-content`}>
        <Row>
          <Col span={16} offset={4}>
            <Tabs
              defaultActiveKey="1"
              // onChange={callback}
              tabPosition="left"
            >
              <TabPane tab="Hiện tại đơn. Hiện tại tiếp diễn" key="1">
                <Row id="">
                  <h1>Hiện tại đơn. Hiện tại tiếp diễn</h1>
                </Row>
                <Row>
                  <Tag color="blue" style={{ marginBottom: '20px' }}>
                    Cấu trúc
                  </Tag>
                </Row>
                <Row>
                  <Table
                    columns={columns_grammar_01}
                    dataSource={data_grammar_01}
                    pagination={false}
                  />
                </Row>
              </TabPane>
              <TabPane tab="Hiện tại hoàn thành" key="2">
                <Row id="">
                  <h1>Hiện tại hoàn thành</h1>
                </Row>
                <Row>
                  <Tag color="blue" style={{ marginBottom: '20px' }}>
                    Cấu trúc
                  </Tag>
                </Row>
                <Row>
                  <b>
                    (+) S + has/have + PII.
                    <br />
                    (–) S + has/have + not + PII.
                    <br />
                    (?) Has/Have + S + PII?
                    <br />
                    Yes, S + has/have.
                    <br />
                    No, S + has/have + not.
                  </b>
                </Row>
              </TabPane>
              <TabPane tab="Quá khứ đơn" key="3">
                Content of Tab Pane 3
              </TabPane>
              <TabPane tab="Quá khứ tiếp diễn" key="4">
                Content of Tab Pane 4
              </TabPane>
              <TabPane tab="Tương lai đơn" key="5">
                Content of Tab Pane 5
              </TabPane>
            </Tabs>
          </Col>
        </Row>
        {
          // <Row>
          //   <Col span={6} offset={2}>
          //   	<Row style= {{paddingRight : "30px"}}>
          //   		<List
          //    bordered
          //    dataSource={data}
          //    renderItem={item => (
          //      <List.Item>
          //         <Link to="#">{item}</Link>
          //      </List.Item>
          //    )}
          //  />
          //   	</Row>
          //   </Col>
          //   <Col span={12}>
          //   	<Row id=""><h1>Hiện tại đơn. Hiện tại tiếp diễn</h1></Row>
          //   	<Row><Tag color="blue" style={{marginBottom : "20px"}}>Cấu trúc</Tag></Row>
          //   	<Row>
          //   		<Table columns={columns_grammar_01} dataSource={data_grammar_01} pagination={false}/>
          //   	</Row>
          //   </Col>
          // </Row>
        }
      </div>
    </div>
  );
};

export default Grammar;
