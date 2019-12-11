import React, { useState } from 'react';
import {Row, Col, Radio, Button} from 'antd';
import ReactAudioPlayer from 'react-audio-player';
import './style.scss'
import { connect } from "react-redux"; 
const prefixCls = 'home';

const Intro = (props) => {
  const radioStyle = {
    display: 'block',
    height: '30px',
    lineHeight: '30px',
  };
  const [resultsPart1, setResultsPart1] = useState([null,null,null,null,null,null,null,null,null,null]);

  console.log(props.exam)
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
          <b><h2>Part 1</h2></b>
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
                <img src="http://toeic24.vn/upload/img/part_1.png" />
              </Row>
              <Row>
                <b>{i + 1}. Select the answer</b>
              </Row>
              <Row>
                <Radio.Group onChange={(e) => onChange(e.target.value, i)}>
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
          <Button className="ant-btn-primary ant-card-hoverable" onClick={() => props.history.push('/exam/part2intro')}>Next</Button>
        </Row>
      </div>
    </div>
  </div>
  )
};

const mapStateToProps = ({ exam }) => {
  console.log(exam)
  return {
    exam
  };
};

export default connect(mapStateToProps)(Intro);
