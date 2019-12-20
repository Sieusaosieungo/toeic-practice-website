import React, { useState, useEffect } from 'react';
import {Row, Col, Radio, Button, Icon} from 'antd';
import ReactAudioPlayer from 'react-audio-player';
import { services} from "../../../services"
import BackwardTimer from '../../../utils/countdown'
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
  
  const [checked, setChecked] = useState(false);
  
  const [userAnswer, setUserAnswer] = useState([null,null,null,null,null,null,null,null,null,null,null,null]);
  
  useEffect(() => {
      services.getExamTestById({id : props.location.search.substring(4)})
        .then(res => {
          var part6 = [];
          const answer = Object.assign([], userAnswer);
          res.data.questions.part6.map(function(part, i) {
            part6.push(part.question)
          })
          var question = {};
          var data_part1 = [], data_part2 = [], data_part3 = [], data_part4 = [], data_part5 = [], data_part6 = [], data_part7 = [];
          res.data.questions.part1.map(function(part, i) {
            data_part1.push(part.question);
          })
          res.data.questions.part2.map(function(part, i) {
            data_part2.push(part.question);
          })
          res.data.questions.part3.map(function(part, i) {
            data_part3.push(part.question);
          })
          res.data.questions.part4.map(function(part, i) {
            data_part4.push(part.question);
          })
          res.data.questions.part5.map(function(part, i) {
            data_part5.push(part.question);
          })
          res.data.questions.part6.map(function(part, i) {
            data_part6.push(part.question);
            if(part.userAnswer.length > 0) {
              answer[3 * i] = part.userAnswer[0].answer;
              answer[3 * i + 1] = part.userAnswer[1].answer;
              answer[3 * i + 2] = part.userAnswer[2].answer;
            }
          })
          res.data.questions.part7.map(function(part, i) {
            data_part7.push(part.question);
          })
          question.part1 = data_part1;
          question.part2 = data_part2;
          question.part3 = data_part3;
          question.part4 = data_part4;
          question.part5 = data_part5;
          question.part6 = data_part6;
          question.part7 = data_part7;
          props.dispatch({type : "EXAM_TEST", data : question})
          setUserAnswer(answer);
          setResultsPart1(answer);
          setDataPart1(part6);
          setChecked(res.data.test.checked);
        })
      
  }, []);

  const [resultsPart1, setResultsPart1] = useState([null,null,null,null,null,null,null,null,null,null,null,null]);

  const onChange = (value, i) => {
    const change = Object.assign([], resultsPart1);
    change[i] = value;
    setResultsPart1(change);
  }

  return (
  <div className={`${prefixCls}`}> 
    <BackwardTimer onchange={() => {props.history.push("/")}}
    finishAll={() => {
        var object = {};
        object.idTest = props.location.search.substring(4);
        object.part = 1;
        var results = [];
        dataPart1.map(function(data, i) {
          var temp = {};
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
            props.history.push('/exam/finish?id=' + props.location.search.substring(4));
          })
        // props.history.push('/exam/part2intro?id=' + props.location.search.substring(4));
      }}/>
    <div className={`${prefixCls}-content`}>
      <div className="" style={{marginTop : "4em", padding : "3em 8em"}}>
        <Row style={{marginBottom : "1em"}}>
          <b><h2>Part 6</h2></b>
        </Row>
        <Row style={{marginBottom : "1em"}}>
          <b>Mark your answer on your answer sheet:</b>
        </Row>
        {
          dataPart1.length > 0 &&
          dataPart1.map(function(data, i) {
            console.log(userAnswer)
            return (
              <div key={i}>
                <Row style={{ textAlign: 'center', margin: '2em 0' }}>
                  Question {141 + 3 * i} - {141 + 3 * i + 2} refer to following
                  conversation:
                </Row>
                <Row>
                  <div
                    className="ck-post-display"
                    style={{
                      borderRadius: '3px',
                      padding: '16px',
                      margin: '10px 0',
                      border: '1px solid #d1d5da',
                    }}
                    dangerouslySetInnerHTML={{ __html: data.paragraph }}
                  ></div>
                </Row>
                <Row>
                  <b>
                    {140 + 3 * i + 1}. {data.subQuestions[0].question}
                  </b>
                </Row>
                <Row>
                  <Radio.Group
                    onChange={e => onChange(e.target.value, 3 * i)}
                    defaultValue={userAnswer[3 * i]}
                  >
                    <Radio style={radioStyle} value={'a'}>
                      {data.subQuestions[0].A}
                      {checked && data.subQuestions[0].answer == 'a' && (
                        <Icon
                          style={{ marginLeft: '8px', color: 'red' }}
                          type="check"
                        />
                      )}
                    </Radio>
                    <Radio style={radioStyle} value={'b'}>
                      {data.subQuestions[0].B}
                      {checked && data.subQuestions[0].answer == 'b' && (
                        <Icon
                          style={{ marginLeft: '8px', color: 'red' }}
                          type="check"
                        />
                      )}
                    </Radio>
                    <Radio style={radioStyle} value={'c'}>
                      {data.subQuestions[0].C}
                      {checked && data.subQuestions[0].answer == 'c' && (
                        <Icon
                          style={{ marginLeft: '8px', color: 'red' }}
                          type="check"
                        />
                      )}
                    </Radio>
                    <Radio style={radioStyle} value={'d'}>
                      {data.subQuestions[0].D}
                      {checked && data.subQuestions[0].answer == 'd' && (
                        <Icon
                          style={{ marginLeft: '8px', color: 'red' }}
                          type="check"
                        />
                      )}
                    </Radio>
                  </Radio.Group>
                </Row>
                <Row>
                  <b>
                    {140 + 3 * i + 3}. {data.subQuestions[1].question}
                  </b>
                </Row>
                <Row>
                  <Radio.Group
                    onChange={e => onChange(e.target.value, 3 * i + 1)}
                    defaultValue={userAnswer[3 * i + 1]}
                  >
                    <Radio style={radioStyle} value={'a'}>
                      {data.subQuestions[1].A}
                      {checked && data.subQuestions[1].answer == 'a' && (
                        <Icon
                          style={{ marginLeft: '8px', color: 'red' }}
                          type="check"
                        />
                      )}
                    </Radio>
                    <Radio style={radioStyle} value={'b'}>
                      {data.subQuestions[1].B}
                      {checked && data.subQuestions[1].answer == 'b' && (
                        <Icon
                          style={{ marginLeft: '8px', color: 'red' }}
                          type="check"
                        />
                      )}
                    </Radio>
                    <Radio style={radioStyle} value={'c'}>
                      {data.subQuestions[1].C}
                      {checked && data.subQuestions[1].answer == 'c' && (
                        <Icon
                          style={{ marginLeft: '8px', color: 'red' }}
                          type="check"
                        />
                      )}
                    </Radio>
                    <Radio style={radioStyle} value={'d'}>
                      {data.subQuestions[1].D}
                      {checked && data.subQuestions[1].answer == 'd' && (
                        <Icon
                          style={{ marginLeft: '8px', color: 'red' }}
                          type="check"
                        />
                      )}
                    </Radio>
                  </Radio.Group>
                </Row>
                <Row>
                  <b>
                    {140 + 3 * i + 3}. {data.subQuestions[2].question}
                  </b>
                </Row>
                <Row>
                  <Radio.Group
                    onChange={e => onChange(e.target.value, 3 * i + 2)}
                    defaultValue={userAnswer[3 * i + 2]}
                  >
                    <Radio style={radioStyle} value={'a'}>
                      {data.subQuestions[2].A}
                      {checked && data.subQuestions[2].answer == 'a' && (
                        <Icon
                          style={{ marginLeft: '8px', color: 'red' }}
                          type="check"
                        />
                      )}
                    </Radio>
                    <Radio style={radioStyle} value={'b'}>
                      {data.subQuestions[2].B}
                      {checked && data.subQuestions[2].answer == 'b' && (
                        <Icon
                          style={{ marginLeft: '8px', color: 'red' }}
                          type="check"
                        />
                      )}
                    </Radio>
                    <Radio style={radioStyle} value={'c'}>
                      {data.subQuestions[2].C}
                      {checked && data.subQuestions[2].answer == 'c' && (
                        <Icon
                          style={{ marginLeft: '8px', color: 'red' }}
                          type="check"
                        />
                      )}
                    </Radio>
                    <Radio style={radioStyle} value={'d'}>
                      {data.subQuestions[2].D}
                      {checked && data.subQuestions[2].answer == 'd' && (
                        <Icon
                          style={{ marginLeft: '8px', color: 'red' }}
                          type="check"
                        />
                      )}
                    </Radio>
                  </Radio.Group>
                </Row>
              </div>
            );
          })
        }
        
        <Row style={{textAlign : "center", margin : "2em 0"}}>
          <Button 
            className="ant-btn-primary ant-card-hoverable" 
            onClick={() => {
              var object = {};
              object.idTest = props.location.search.substring(4);
              object.part = 6;
              var results = [];
              dataPart1.map(function(data, i) {
                var temp = {};
                console.log(data)
                temp.idQuestion = data._id;
                temp.userAnswer = [
                  {
                    idSubQuestion : data.subQuestions[0]._id,
                    answer : resultsPart1[3 * i]
                  },
                  {
                    idSubQuestion : data.subQuestions[1]._id,
                    answer : resultsPart1[3 * i + 1]
                  },
                  {
                    idSubQuestion : data.subQuestions[2]._id,
                    answer : resultsPart1[3 * i + 2]
                  },
                ]
                results.push(temp);
              })
              object.results = results;
              services.submitResults(object)
                .then(res => {
                  console.log(res)
                  props.history.push('/exam/part5?id=' + props.location.search.substring(4));
                })
            }}
            style={{marginRight : "20px"}}
          >Quay lại part 5
          </Button>
          <Button className="ant-btn-primary ant-card-hoverable" 
          onClick={() => {
            var object = {};
              object.idTest = props.location.search.substring(4);
              object.part = 6;
              var results = [];
              dataPart1.map(function(data, i) {
                var temp = {};
                console.log(data)
                temp.idQuestion = data._id;
                temp.userAnswer = [
                  {
                    idSubQuestion : data.subQuestions[0]._id,
                    answer : resultsPart1[3 * i]
                  },
                  {
                    idSubQuestion : data.subQuestions[1]._id,
                    answer : resultsPart1[3 * i + 1]
                  },
                  {
                    idSubQuestion : data.subQuestions[2]._id,
                    answer : resultsPart1[3 * i + 2]
                  },
                ]
                results.push(temp);
              })
              object.results = results;
              services.submitResults(object)
                .then(res => {
                  console.log(res)
                  props.history.push('/exam/part7intro?id=' + props.location.search.substring(4));
                })
              // props.history.push('/exam/part7intro?id=' + props.location.search.substring(4));
          }}>Tiếp tục</Button>
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
