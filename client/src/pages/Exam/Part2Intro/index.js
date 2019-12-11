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
          <b><h2>Part II: Question - Response</h2></b>
        </Row>
        <Row>
          <b>Directions:</b> In this part of the test, you will hear a question or statement spoken in English, followed by three responses, also spoken in English. The question or statement and the responses will be spoken just one time. They will not be printed in your test book, so you must listen carefully. You are to choose the best response to each question or statement. Now listen to a sample question.
        </Row>
        <Row style={{textAlign : "center", margin : "2em 0"}}>
        </Row>
        <Row style={{textAlign : "center"}}>
          <ReactAudioPlayer
            src="http://toeic24.vn/upload/audio/part_ii_intro.mp3"
            controls
            style={{width : "50%"}}
          />
        </Row>
        
        <Row style={{marginTop : "1em"}}>
          You will hear:
        </Row>
        <Row style={{marginTop : "1em"}}>
          <b>Why are you late?</b>
        </Row>
        
        <Row style={{marginTop : "1em"}}>
          <Radio.Group  value={4}>
            <Radio style={radioStyle} key={1} value={1}>
              A. I hope I won't be
            </Radio>
            <Radio style={radioStyle} key={2} value={2}>
              <b>B. My car broke down</b>
            </Radio>
            <Radio style={radioStyle} key={3} value={3}>
              C. He alway is
            </Radio>
            
          </Radio.Group>
        </Row>

        <Row style={{marginTop : "1em"}}>
          The best response is choice B. "My car broke down". Therefore, you should choose B.
        </Row>
        <Row style={{textAlign : "center", margin : "2em 0"}}>
          <Button 
            className="ant-btn-primary ant-card-hoverable" 
            onClick={() => props.history.push('/exam/part3')}
          >Bắt đầu
          </Button>
        </Row>
      </div>
    </div>
  </div>
  )
};

export default Intro;
