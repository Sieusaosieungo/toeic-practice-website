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
          <b><h2>Part VII: Reading Comprehension</h2></b>
        </Row>
        <Row>
          <b>Directions:</b> In this part you will read a selection of texts, such as magezine and newspaper articles, letters, and advertisements. Each text is followed by several questions. Select the best answer for each question and mark the letter (A), (B), (C) or (D) on your answer sheet.
        </Row>
        <Row style={{marginTop : "1em"}}>
          <h3>EXAMPLE:</h3>
        </Row>
        <Row style={{marginTop : "1em"}}>
          Are you someone who enjoys trying new things and does not feel uncomfortable in new environment? Then why not get paid for it? CULTURE magazine is looking for individuals to go to new clubs, event, etc and write about the cultural scene they observe in these place. Interested? Send your resume to CULTURE@hotmail.com. Please no phone calls.
        </Row>
        <Row style={{marginTop : "1em"}}>
          <b>What type of person would be best qualified for this job?</b>
        </Row>
        <Row style={{marginTop : "1em"}}>
          Correct answer (D)
        </Row>
        <Row style={{marginTop : "1em"}}>
          <Radio.Group  value={4}>
            <Radio style={radioStyle} key={1} value={1}>
              A. a homebody
            </Radio>
            <Radio style={radioStyle} key={2} value={2}>
              B. an introvert
            </Radio>
            <Radio style={radioStyle} key={3} value={3}>
              C. a clumsy person
            </Radio>
            <Radio style={radioStyle} key={4} value={4}>
              <b>D. a risk-taker</b>
            </Radio>
          </Radio.Group>
        </Row>
        <Row style={{marginTop : "1em"}}>
          Correct answer (D)
        </Row>
        <Row style={{textAlign : "center", margin : "2em 0"}}>
          <Button 
            className="ant-btn-primary ant-card-hoverable" 
            onClick={() => props.history.push('/exam/part7?id=' + props.location.search.substring(4))}
          >Bắt đầu
          </Button>
        </Row>
      </div>
    </div>
  </div>
  )
};

export default Intro;
