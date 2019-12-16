import React, { useState, useEffect } from 'react';
import { Row, Col, Radio, Button } from 'antd';
// import ReactAudioPlayer from 'react-audio-player';
import { services} from "../../../services"
import { config } from '../../../utils/config'
import { connect } from "react-redux"; 
import './style.scss';
// import data from './config.json';
const prefixCls = 'home';

const Intro = (props) => {
  const radioStyle = {
    display: 'block',
    height: '30px',
    lineHeight: '30px',
  };

  const [dataAudio, setDataAudio] = useState([
  
]);
  const [dataPart1, setDataPart1] = useState([
  
]);
  useEffect(() => {
    console.log(props.exam)
    console.log(props.exam.part1)
    if(props.exam.part1 == undefined) {
      services.getExamTestById({id : props.location.search.substring(4)})
        .then(res => {
          var data2 = [];
          res.data.questions.part2.map(function(part, i) {
            data2.push(part.question)
          })
          setDataPart1(data2);
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
          var data =[];
          res.data.questions.part2.map(function(part, i) {
            var url = "http://202.191.56.159:2510/" + part.question.audio;
            data.push({link : url});
          })
          setDataAudio(data);
        })
      
    }
    else {
      setDataPart1(props.exam.part2);
      var data =[];
      props.exam.part2.map(function(part, i) {
        var url = "http://202.191.56.159:2510/" + part.audio;
        data.push({link : url});
      })
      setDataAudio(data);
    }
  }, []);

  // code cua Manh
  const audioPlayer = React.createRef();
  const [isPlaying, setIsPlaying] = useState();
  const [indexAudio, setIndexAudio] = useState(0);
  //end Manh

  const [resultsPart1, setResultsPart1] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);

  const onChange = (value, i) => {
    const change = Object.assign([], resultsPart1);
    change[i] = value;
    setResultsPart1(change);
  };

  // code cua Manh
  const onToggleAudio = () => {
    if(dataAudio.length > 0) {
    setIndexAudio(indexAudio + 1);

    if (indexAudio < dataAudio.length - 1) {
      audioPlayer.current.src = dataAudio[indexAudio + 1].link;
      console.log(audioPlayer);
      audioPlayer.current.play();
    }

    if (indexAudio === dataAudio.length - 1) {
      setIndexAudio(0);
      audioPlayer.current.src = dataAudio[0].link;
      audioPlayer.current.pause();
    }
  }
  };
  //end Manh

  return (
    <div className={`${prefixCls}`}>
      <div className={`${prefixCls}-content`}>
        <div className="" style={{ marginTop: '4em', padding: '3em 8em' }}>
          <Row style={{ marginBottom: '1em' }}>
            <b>
              <h2>Part 2</h2>
            </b>
          </Row>
          <Row style={{ marginBottom: '1em' }}>
            <b>Mark your answer on your answer sheet:</b>
          </Row>
          <Row style={{ textAlign: 'center' }}>
            <audio
              onEnded={onToggleAudio}
              ref={audioPlayer}
              controls
              style={{ width: '50%' }}
            >
              {
                dataAudio.length > 0 &&
                <source src={dataAudio[0].link} />
              }
              <track kind="captions" />
            </audio>
          </Row>
          {
            ['', '', '', '', '', '', '', '', '', ''].map(function(data, i) {
            return (
              <div>
                <Row style={{ marginTop: '1em' }}>
                  <Col span={8}>
                    <b>{10 + 3 * i + 1}.</b>
                    <br />
                    <Radio.Group
                      onChange={e => onChange(e.target.value, 3 * i)}
                    >
                      <Radio style={radioStyle} value={"a"}>
                        A
                      </Radio>
                      <Radio style={radioStyle} value={"b"}>
                        B
                      </Radio>
                      <Radio style={radioStyle} value={"c"}>
                        C
                      </Radio>
                    </Radio.Group>
                  </Col>
                  <Col span={8}>
                    <b>{10 + 3 * i + 2}.</b>
                    <br />
                    <Radio.Group
                      onChange={e => onChange(e.target.value, 3 * i + 1)}
                    >
                      <Radio style={radioStyle} value={"a"}>
                        A
                      </Radio>
                      <Radio style={radioStyle} value={"b"}>
                        B
                      </Radio>
                      <Radio style={radioStyle} value={"c"}>
                        C
                      </Radio>
                    </Radio.Group>
                  </Col>
                  <Col span={8}>
                    <b>{10 + 3 * i + 3}.</b>
                    <br />
                    <Radio.Group
                      onChange={e => onChange(e.target.value, 3 * i + 2)}
                    >
                      <Radio style={radioStyle} value={"a"}>
                        A
                      </Radio>
                      <Radio style={radioStyle} value={"b"}>
                        B
                      </Radio>
                      <Radio style={radioStyle} value={"c"}>
                        C
                      </Radio>
                    </Radio.Group>
                  </Col>
                </Row>
              </div>
            );
          })}

          <Row style={{ textAlign: 'center', margin: '2em 0' }}>
            <Button
              className="ant-btn-primary ant-card-hoverable"
              onClick={() => {
                var object = {};
                object.idTest = props.location.search.substring(4);
                object.part = 2;
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
                    props.history.push('/exam/part3intro?id=' + props.location.search.substring(4));
                  })
                // props.history.push('/exam/part3intro?id=' + props.location.search.substring(4));
              }}
            >
              Next
            </Button>
          </Row>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ exam }) => {
  console.log(exam)
  return {
    exam
  };
};

export default connect(mapStateToProps)(Intro);
