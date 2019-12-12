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
          console.log(res)
          setDataPart1(res.data.questions.part6);
          var question = res.data.questions;
          props.dispatch({type : "EXAM_TEST", data : question})
        })
      
    }
    else {
      setDataPart1(props.exam.part7);
    }
  }, []);

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
          dataPart1.length > 0 &&
          dataPart1.map(function(data, i) {
            return <div>
              <Row style={{textAlign : "center", margin : "2em 0"}}>
                Question {153 + 4 * i} - {153 + 4 * i + 3} refer to following conversation:
              </Row>
              <Row>
                {data.paragraph}
              </Row>
              <Row>
                <b>{152 + 4 * i + 1}. {data.subQuestions[0].question}</b>
              </Row>
              <Row>
                <Radio.Group onChange={(e) => onChange(e.target.value, 4 * i)}>
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
              <Row>
                <b>{152 + 4 * i + 2}. {data.subQuestions[1].question}</b>
              </Row>
              <Row>
                <Radio.Group onChange={(e) => onChange(e.target.value, 4 * i + 1)}>
                  <Radio style={radioStyle} value={1}>
                    {data.subQuestions[1].A}
                  </Radio>
                  <Radio style={radioStyle} value={2}>
                    {data.subQuestions[1].B}
                  </Radio>
                  <Radio style={radioStyle} value={3}>
                    {data.subQuestions[1].C}
                  </Radio>
                  <Radio style={radioStyle} value={4}>
                    {data.subQuestions[1].D}
                  </Radio>
                </Radio.Group>
              </Row>
              <Row>
                <b>{152 + 4 * i + 3}. {data.subQuestions[2].question}</b>
              </Row>
              <Row>
                <Radio.Group onChange={(e) => onChange(e.target.value, 4 * i + 2)}>
                  <Radio style={radioStyle} value={1}>
                    {data.subQuestions[2].A}
                  </Radio>
                  <Radio style={radioStyle} value={2}>
                    {data.subQuestions[2].B}
                  </Radio>
                  <Radio style={radioStyle} value={3}>
                    {data.subQuestions[2].C}
                  </Radio>
                  <Radio style={radioStyle} value={4}>
                    {data.subQuestions[2].D}
                  </Radio>
                </Radio.Group>
              </Row>
              <Row>
                <b>{152 + 4 * i + 4}. {data.subQuestions[3].question}</b>
              </Row>
              <Row>
                <Radio.Group onChange={(e) => onChange(e.target.value, 4 * i + 3)}>
                  <Radio style={radioStyle} value={1}>
                    {data.subQuestions[3].A}
                  </Radio>
                  <Radio style={radioStyle} value={2}>
                    {data.subQuestions[3].B}
                  </Radio>
                  <Radio style={radioStyle} value={3}>
                    {data.subQuestions[3].C}
                  </Radio>
                  <Radio style={radioStyle} value={4}>
                    {data.subQuestions[3].D}
                  </Radio>
                </Radio.Group>
              </Row>
            </div>
          })
        }
        
        <Row style={{textAlign : "center", margin : "2em 0"}}>
          <Button className="ant-btn-primary ant-card-hoverable" 
          onClick={()=> {
            var object = {};
            object.idTest = props.location.search.substring(4);
            object.part = 7;
            var results = [];
            dataPart1.map(function(data, i) {
              var temp = {};
              console.log(data)
              temp.idQuestion = data._id;
              temp.userAnswer = [
                {
                  idSubQuestion : data.subQuestions[0]._id,
                  answer : resultsPart1[i]
                }
              ]
              results.push(temp);
            })
            object.results = results;
            services.submitResults(object)
              .then(res => {
                console.log(res)
                // props.history.push('/exam/part2intro?id=' + props.location.search.substring(4));
              })
            // props.history.push('/exam/part2intro?id=' + props.location.search.substring(4));
          }}>Next</Button>
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
