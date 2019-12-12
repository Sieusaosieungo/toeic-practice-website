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
          <b><h2>Part III: Short Conversations</h2></b>
        </Row>
        <Row>
          <b>Directions:</b> You will hear some conversations between two people. You will be asked to answer three questions about what the speakers say in each conversation. Select the best response to each question and mark the letter (A), (B), (C) or (D) on your answer sheet. The conversations will not be printed in your test book and will be spoken only one time.
        </Row>
        
        <Row style={{textAlign : "center", margin : "2em 0"}}>
          <Button 
            className="ant-btn-primary ant-card-hoverable" 
            onClick={() => props.history.push('/exam/part4?id=' + props.location.search.substring(4))}
          >Bắt đầu
          </Button>
        </Row>
      </div>
    </div>
  </div>
  )
};

export default Intro;
