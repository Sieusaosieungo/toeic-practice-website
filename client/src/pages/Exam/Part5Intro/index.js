import React from 'react';
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
  return (
  <div className={`${prefixCls}`}> 
    <div className={`${prefixCls}-content`}>
      <div className="" style={{marginTop : "4em", padding : "3em 8em"}}>
        <Row style={{marginBottom : "1em"}}>
          <b><h2>Part V: Incomplete Sentences</h2></b>
        </Row>
        <Row>
          <b>Directions:</b> A word or pharse is missing in each of the sentences below. Four answer choices are given below each sentence. Select the best answer to complete the sentence. Then mark the letter (A), (B), (C) or (D) on your answer sheet.
        </Row>
        <Row style={{marginTop : "1em"}}>
          <h3>EXAMPLE:</h3>
        </Row>
        <Row style={{marginTop : "1em"}}>
          The mother held her newborn ____
        </Row>
        <Row style={{marginTop : "1em"}}>
          <Radio.Group  value={3}>
            <Radio style={radioStyle} key={1} value={1}>
              A. loving
            </Radio>
            <Radio style={radioStyle} key={2} value={2}>
              B. lovely
            </Radio>
            <Radio style={radioStyle} key={3} value={3}>
              <b>C. lovingly</b>
            </Radio>
            <Radio style={radioStyle} key={4} value={4}>
              D. love
            </Radio>
          </Radio.Group>
        </Row>
        <Row style={{marginTop : "1em"}}>
          Correct answer (C)
        </Row>
        <Row style={{textAlign : "center", margin : "2em 0"}}>
          <Button 
            className="ant-btn-primary ant-card-hoverable" 
            onClick={() => props.history.push('/exam/part5?id=' + props.location.search.substring(4))}
          >Bắt đầu
          </Button>
        </Row>
      </div>
    </div>
  </div>
  )
};

export default Intro;
