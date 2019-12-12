import React, { useState, useEffect } from 'react';
import {Row, Col, Radio, Button} from 'antd';
import ReactAudioPlayer from 'react-audio-player';
import { services} from "../../../services"
import { config } from '../../../utils/config'
import { connect } from "react-redux"; 
import './style.scss'
const prefixCls = 'home';

const Intro = (props) => {
  const radioStyle = {
    display: 'block',
    height: '30px',
    lineHeight: '30px',
  };

  const [dataPart1, setDataPart1] = useState([
  
]);
  useEffect(() => {
    if(props.exam.part1 == undefined) {
      services.getExamTestById({id : props.location.search.substring(4)})
        .then(res => {
          setDataPart1(res.data.questions.part5);
          var question = res.data.questions;
          props.dispatch({type : "EXAM_TEST", data : question})
        })
      

    }
    else {
      setDataPart1(props.exam.part5);
    }
  }, []);

  const [resultsPart1, setResultsPart1] = useState([null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]);

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
          <b><h2>Part 5</h2></b>
        </Row>
        <Row style={{marginBottom : "1em"}}>
          <b>Mark your answer on your answer sheet:</b>
        </Row>
        {
          dataPart1.length > 0 &&
          dataPart1.map(function(data, i) {
            return <div>
              <Row>
                <b>{100 + i + 1}. {data.subQuestions[0].question}</b>
              </Row>
              <Row>
                <Radio.Group onChange={(e) => onChange(e.target.value, i)}>
                  <Radio style={radioStyle} value={1}>
                    {data.subQuestions[0].A}
                  </Radio>
                  <Radio style={radioStyle} value={2}>
                    {data.subQuestions[0].B}
                  </Radio>
                  <Radio style={radioStyle} value={3}>
                    {data.subQuestions[0].C}
                  </Radio>
                  <Radio style={radioStyle} value={4}>
                    {data.subQuestions[0].D}
                  </Radio>
                </Radio.Group>
              </Row>
            </div>
          })
        }
        
        <Row style={{textAlign : "center", margin : "2em 0"}}>
          <Button className="ant-btn-primary ant-card-hoverable" onClick={() => props.history.push('/exam/part6intro?id=' + props.location.search.substring(4))}>Next</Button>
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