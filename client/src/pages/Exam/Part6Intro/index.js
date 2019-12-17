import React from 'react';
import {Row, Col, Radio, Button} from 'antd';
import BackwardTimer from '../../../utils/countdown'
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
    <BackwardTimer onchange={() => {props.history.push("/")}}/>
    <div className={`${prefixCls}-content`}>
      <div className="" style={{marginTop : "4em", padding : "3em 8em"}}>
        <Row style={{marginBottom : "1em"}}>
          <b><h2>Part VI: Text Completion</h2></b>
        </Row>
        <Row>
          <b>Directions:</b> Read the texts that follow. A word or pharse is missing in some of the sentences. Four answer choices are given below each of the sentences. Select the best answer to complete the text. Then mark the letter (A), (B), (C) or (D) on your answer sheet.
        </Row>
        <Row style={{textAlign : "center", margin : "2em 0"}}>
          <Button 
            className="ant-btn-primary ant-card-hoverable" 
            onClick={() => props.history.push('/exam/part6?id=' + props.location.search.substring(4))}
          >Bắt đầu
          </Button>
        </Row>
      </div>
    </div>
  </div>
  )
};

export default Intro;
