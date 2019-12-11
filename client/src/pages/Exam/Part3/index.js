import React, { useState } from 'react';
import {Row, Col, Radio, Button} from 'antd';
import ReactAudioPlayer from 'react-audio-player';
import './style.scss'
const prefixCls = 'home';

const Intro = (props) => {
  const radioStyle = {
    display: 'block',
    height: '30px',
    lineHeight: '30px',
  };
  const [resultsPart1, setResultsPart1] = useState([null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]);

  const onChange = (value, i) => {
    const change = Object.assign([], resultsPart1);
    change[i] = value;
    setResultsPart1(change);
  }
  console.log(resultsPart1)
  return (
  <div className={`${prefixCls}`}> 
    <div className={`${prefixCls}-content`}>
      <div className="" style={{marginTop : "4em", padding : "3em 8em"}}>
        <Row style={{marginBottom : "1em"}}>
          <b><h2>Part 3</h2></b>
        </Row>
        <Row style={{marginBottom : "1em"}}>
          <b>Mark your answer on your answer sheet:</b>
        </Row>
        <Row style={{textAlign : "center"}}>
          <ReactAudioPlayer
            src="http://toeic24.vn/upload/audio/part_i_intro.mp3"
            controls
            style={{width : "50%"}}
          />
        </Row>
        {
          ["","","","","","","","","",""].map(function(data, i) {
            return <div>
              <Row style={{textAlign : "center", margin : "2em 0"}}>
                Question {41 + 3 * i} - {41 + 3 * i + 2} refer to following conversation:
              </Row>
              <Row>
                <b>{41 + 3 * i}. How does the woman feel?</b>
              </Row>
              <Row>
                <Radio.Group onChange={(e) => onChange(e.target.value, 3 * i)}>
                  <Radio style={radioStyle} value={1}>
                    Option A
                  </Radio>
                  <Radio style={radioStyle} value={2}>
                    Option B
                  </Radio>
                  <Radio style={radioStyle} value={3}>
                    Option C
                  </Radio>
                  <Radio style={radioStyle} value={4}>
                    Option D
                  </Radio>
                </Radio.Group>
              </Row>
              <Row>
                <b>{41 + 3 * i + 1}. How does the woman feel?</b>
              </Row>
              <Row>
                <Radio.Group onChange={(e) => onChange(e.target.value, 3 * i + 1)}>
                  <Radio style={radioStyle} value={1}>
                    Option A
                  </Radio>
                  <Radio style={radioStyle} value={2}>
                    Option B
                  </Radio>
                  <Radio style={radioStyle} value={3}>
                    Option C
                  </Radio>
                  <Radio style={radioStyle} value={4}>
                    Option D
                  </Radio>
                </Radio.Group>
              </Row>
              <Row>
                <b>{41 + 3 * i + 2}. How does the woman feel?</b>
              </Row>
              <Row>
                <Radio.Group onChange={(e) => onChange(e.target.value, 3 * i + 2)}>
                  <Radio style={radioStyle} value={1}>
                    Option A
                  </Radio>
                  <Radio style={radioStyle} value={2}>
                    Option B
                  </Radio>
                  <Radio style={radioStyle} value={3}>
                    Option C
                  </Radio>
                  <Radio style={radioStyle} value={4}>
                    Option D
                  </Radio>
                </Radio.Group>
              </Row>
            </div>
            // return <div>
            //   <Row style={{marginTop : "1em"}}>
            //     <Col span={8}>
            //       <b>{10 + 3 * i + 1}.</b><br/>
            //       <Radio.Group onChange={(e) => onChange(e.target.value, 3 * i)}>
            //         <Radio style={radioStyle} value={1}>
            //           A
            //         </Radio>
            //         <Radio style={radioStyle} value={2}>
            //           B
            //         </Radio>
            //         <Radio style={radioStyle} value={3}>
            //           C
            //         </Radio>
            //       </Radio.Group>
            //     </Col>
            //     <Col span={8}>
            //       <b>{10 + 3 * i + 2}.</b><br/>
            //       <Radio.Group onChange={(e) => onChange(e.target.value, 3 * i + 1)}>
            //         <Radio style={radioStyle} value={1}>
            //           A
            //         </Radio>
            //         <Radio style={radioStyle} value={2}>
            //           B
            //         </Radio>
            //         <Radio style={radioStyle} value={3}>
            //           C
            //         </Radio>
            //       </Radio.Group>
            //     </Col>
            //     <Col span={8}>
            //       <b>{10 + 3 * i + 3}.</b><br/>
            //       <Radio.Group onChange={(e) => onChange(e.target.value, 3 * i + 2)}>
            //         <Radio style={radioStyle} value={1}>
            //           A
            //         </Radio>
            //         <Radio style={radioStyle} value={2}>
            //           B
            //         </Radio>
            //         <Radio style={radioStyle} value={3}>
            //           C
            //         </Radio>
            //       </Radio.Group>
            //     </Col>
            //   </Row>
            // </div>
          })
        }
        
        <Row style={{textAlign : "center", margin : "2em 0"}}>
          <Button className="ant-btn-primary ant-card-hoverable" onClick={() => props.history.push('/exam/part4intro')}>Next</Button>
        </Row>
      </div>
    </div>
  </div>
  )
};

export default Intro;
