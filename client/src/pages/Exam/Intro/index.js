import React from 'react';
import {Row, Col, Radio, Button, Icon, Modal, Statistic} from 'antd';
import ReactAudioPlayer from 'react-audio-player';
import './style.scss'
import BackwardTimer from '../../../utils/countdown'
const prefixCls = 'home';
const { Countdown } = Statistic;

const Intro = (props) => {
  const radioStyle = {
    display: 'block',
    height: '30px',
    lineHeight: '30px',
  };
  return (
  <div className={`${prefixCls}`} style={{position : "relative"}}> 
    <BackwardTimer onchange={() => {props.history.push("/")}} 
    finishAll={() => {
      props.history.push('/exam/finish?id=' + props.location.search.substring(4));
    }}/>
    <div className={`${prefixCls}-content`}>
      <div className="" style={{marginTop : "4em", padding : "3em 8em"}}>
        <Row style={{marginBottom : "1em"}}>
          <b><h2>Part I: Picture Description</h2></b>
        </Row>
        <Row>
          <b>Directions:</b> For each question, you will see a picture and you will hear four short statements. The statements will be spoken just one time. They will not be printed in your test book so you must listen carefully to understand what the speaker says. When you hear the four statements, look at the picture and choose the statement that best describes what you see in the picture. Choose the best answer A, B, C or D
        </Row>
        <Row style={{textAlign : "center", margin : "2em 0"}}>
          <img src="http://toeic24.vn/upload/img/part_1.png" style={{width : "70%"}}/>
        </Row>
        <Row style={{textAlign : "center"}}>
          <ReactAudioPlayer
            src="http://toeic24.vn/upload/audio/part_i_intro.mp3"
            controls
            style={{width : "50%"}}
          />
        </Row>
        <Row>
          <h2>EXAMPLE:</h2>
        </Row>
        <Row>
          Now listen to the four statements.
        </Row>
        <Row>
          Statement (D) best describes what you see in the picture.
        </Row>
        <Row>
          Therefore, you should choose answer (D).
        </Row>
        <Row>
          <Radio.Group  value={4}>
            <Radio style={radioStyle} key={1} value={1}>
              Option A
            </Radio>
            <Radio style={radioStyle} key={2} value={2}>
              Option B
            </Radio>
            <Radio style={radioStyle} key={3} value={3}>
              Option C
            </Radio>
            <Radio style={radioStyle} key={4} value={4}>
              Option D
            </Radio>
          </Radio.Group>
        </Row>
        <Row style={{textAlign : "center", margin : "2em 0"}}>
          <Button 
            className="ant-btn-primary ant-card-hoverable" 
            onClick={() => props.history.push('/exam/part1?id=' + props.location.search.substring(4))}
          >Bắt đầu
          </Button>
        </Row>
      </div>
    </div>
  </div>
  )
};

export default Intro;
