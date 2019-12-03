import React from 'react';
import { Row, Col, List, Tag, Table, Tabs , Spin} from 'antd';
import { Link } from 'react-router-dom';
import './style.scss';

import BreadcrumbCus from '../../components/BreadcrumbCus';

import { services } from '../../services' 
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

class Grammar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading : false
    }
  }

  componentDidMount() {
    // this.setState({loading : true})
    // console.log(this.props)
    // services.getGrammarTopics()
    //   .then(res => {
    //     console.log(res)
    //   })
  }
  render() {
    return (
      <div className={`${prefixCls}`}>
      <Spin spinning={this.state.loading} style={{flexGrow : 1, display : "block"}} class="123">
        {
          // <BreadcrumbCus location={this.props.location} />
      }
        <div className={`${prefixCls}-content`}>
          <Row>
            <Col span={24}>
              <Tabs
                defaultActiveKey="0"
                // onChange={callback}
                tabPosition="left"
              >
                {
                  JSON.parse(sessionStorage.grammar_topics).results.topics.map(function(data, i) {
                    console.log(data.title)
                    return <TabPane tab={data.title} key={i}>
                      <Row id="">
                        <h1>{data.title}</h1>
                      </Row>
                      <Row>
                        {
                          JSON.parse(sessionStorage.grammar).map(function(grammar, i) {
                            if(grammar.id == data._id) {
                              return <div>
                                {
                                  grammar.data.grammars.map(function(gra, i) {
                                    console.log(gra.title)
                                    return <div>
                                      <Row>
                                        <Tag color="blue" style={{ marginBottom: '20px', fontSize : "120%" }}>
                                          {gra.title}
                                        </Tag>
                                      </Row>
                                      <Row style={{ marginBottom: '20px' }}>
                                        <div
                                          dangerouslySetInnerHTML={{ __html: gra.content }}
                                        >
                                          
                                        </div>
                                      </Row>
                                    </div>
                                  })
                                }
                              </div>
                            }
                          })
                        }
                      </Row>
                      
                    </TabPane>
                  })
                }
              </Tabs>
            </Col>
          </Row>
          {
            // <Row>
            //   <Col span={6} offset={2}>
            //    <Row style= {{paddingRight : "30px"}}>
            //      <List
            //    bordered
            //    dataSource={data}
            //    renderItem={item => (
            //      <List.Item>
            //         <Link to="#">{item}</Link>
            //      </List.Item>
            //    )}
            //  />
            //    </Row>
            //   </Col>
            //   <Col span={12}>
            //    <Row id=""><h1>Hiện tại đơn. Hiện tại tiếp diễn</h1></Row>
            //    <Row><Tag color="blue" style={{marginBottom : "20px"}}>Cấu trúc</Tag></Row>
            //    <Row>
            //      <Table columns={columns_grammar_01} dataSource={data_grammar_01} pagination={false}/>
            //    </Row>
            //   </Col>
            // </Row>
          }
        </div>
    </Spin>
      </div>
    );
  }
  
};

export default Grammar;
