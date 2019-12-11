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
  const [resultsPart1, setResultsPart1] = useState([null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]);

  const onChange = (value, i) => {
    const change = Object.assign([], resultsPart1);
    change[i] = value;
    setResultsPart1(change);
  }
  return (
  <div className={`${prefixCls}`}> 
    <div className={`${prefixCls}-content`}>
      <div className="" style={{marginTop : "4em", padding : "3em 8em"}}>
        <Row style={{marginBottom : "1em"}}>
          <b><h2>Part 7</h2></b>
        </Row>
        <Row style={{marginBottom : "1em"}}>
          <b>Mark your answer on your answer sheet:</b>
        </Row>
        {
          ["","","","","","","","","","","",""].map(function(data, i) {
            return <div>
              <Row style={{textAlign : "center", margin : "2em 0"}}>
                Question {153 + 4 * i} - {153 + 4 * i + 3} refer to following conversation:
              </Row>
              <Row>
                Paragraph
              </Row>
              <Row>
                <b>{152 + 4 * i + 1}. Select the answer</b>
              </Row>
              <Row>
                <Radio.Group onChange={(e) => onChange(e.target.value, 4 * i)}>
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
                <b>{152 + 4 * i + 2}. Select the answer</b>
              </Row>
              <Row>
                <Radio.Group onChange={(e) => onChange(e.target.value, 4 * i + 1)}>
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
                <b>{152 + 4 * i + 3}. Select the answer</b>
              </Row>
              <Row>
                <Radio.Group onChange={(e) => onChange(e.target.value, 4 * i + 2)}>
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
                <b>{152 + 4 * i + 4}. Select the answer</b>
              </Row>
              <Row>
                <Radio.Group onChange={(e) => onChange(e.target.value, 4 * i + 3)}>
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
          })
        }
        
        <Row style={{textAlign : "center", margin : "2em 0"}}>
          <Button className="ant-btn-primary ant-card-hoverable" onClick={()=> console.log(1)}>Next</Button>
        </Row>
      </div>
    </div>
  </div>
  )
};

export default Intro;
