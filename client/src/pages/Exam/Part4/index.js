import React, { useState, useEffect } from 'react';
import {Row, Col, Radio, Button} from 'antd';
import { services} from "../../../services"
import { config } from '../../../utils/config'
import { connect } from "react-redux"; 
import ReactAudioPlayer from 'react-audio-player';
import './style.scss'
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
    if(props.exam.part1 == undefined) {
      services.getExamTestById({id : props.location.search.substring(4)})
        .then(res => {
          console.log(res)
          setDataPart1(res.data.questions.part4);
          var question = res.data.questions;
          props.dispatch({type : "EXAM_TEST", data : question})
          var data =[];
          question.part4.map(function(part, i) {
            var url = "http://202.191.56.159:2510/" + part.audio;
            data.push({link : url});
          })
          setDataAudio(data);
          console.log(data)
        })
      
    }
    else {
      setDataPart1(props.exam.part4);
      var data =[];
      props.exam.part4.map(function(part, i) {
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

  const [resultsPart1, setResultsPart1] = useState([null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]);

  const onChange = (value, i) => {
    const change = Object.assign([], resultsPart1);
    change[i] = value;
    setResultsPart1(change);
  }

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
      <div className="" style={{marginTop : "4em", padding : "3em 8em"}}>
        <Row style={{marginBottom : "1em"}}>
          <b><h2>Part 4</h2></b>
        </Row>
        <Row style={{marginBottom : "1em"}}>
          <b>Mark your answer on your answer sheet:</b>
        </Row>
        <Row style={{textAlign : "center"}}>
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
          dataPart1.length > 0 &&
          dataPart1.map(function(data, i) {
            return <div>
              <Row style={{textAlign : "center", margin : "2em 0"}}>
                Question {71 + 3 * i} - {71 + 3 * i + 2} refer to following conversation:
              </Row>
              <Row>
                <b>{71 + 3 * i}. {data.subQuestions[0].question}</b>
              </Row>
              <Row>
                <Radio.Group onChange={(e) => onChange(e.target.value, 3 * i)}>
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
                <b>{71 + 3 * i + 1}. {data.subQuestions[1].question}</b>
              </Row>
              <Row>
                <Radio.Group onChange={(e) => onChange(e.target.value, 3 * i + 1)}>
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
                <b>{71 + 3 * i + 2}. {data.subQuestions[2].question}</b>
              </Row>
              <Row>
                <Radio.Group onChange={(e) => onChange(e.target.value, 3 * i + 2)}>
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
            </div>
          })
        }
        
        <Row style={{textAlign : "center", margin : "2em 0"}}>
          <Button className="ant-btn-primary ant-card-hoverable" 
          onClick={() => {
            var object = {};
              object.idTest = props.location.search.substring(4);
              object.part = 4;
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
                  props.history.push('/exam/part5intro?id=' + props.location.search.substring(4));
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