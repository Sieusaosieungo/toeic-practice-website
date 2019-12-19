import React, { useState, useEffect } from 'react';
import { Row, Col, Radio, Button, Icon } from 'antd';
import ReactAudioPlayer from 'react-audio-player';
import { services } from '../../../services';
import BackwardTimer from '../../../utils/countdown';
import './style.scss';
import { connect } from 'react-redux';

const prefixCls = 'home';

const Intro = props => {
  const radioStyle = {
    display: 'block',
    height: '30px',
    lineHeight: '30px',
  };

  const [dataAudio, setDataAudio] = useState([]);
  const [dataPart1, setDataPart1] = useState([]);
  const [submit, setSubmit] = useState(false);

  const [checked, setChecked] = useState(false);

  useEffect(() => {
    console.log(props);
    if (props.location.search.split('&').length === 1) {
      services
        .getExamTestById({ id: props.location.search.substring(4) })
        .then(res => {
          var data1 = [];
          res.data.questions.part1.map(function(part, i) {
            data1.push(part.question);
          });
          setDataPart1(data1);
          // var question = res.data.questions;
          var question = {};
          var data_part1 = [],
            data_part2 = [],
            data_part3 = [],
            data_part4 = [],
            data_part5 = [],
            data_part6 = [],
            data_part7 = [];
          res.data.questions.part1.map(function(part, i) {
            data_part1.push(part.question);
          });
          res.data.questions.part2.map(function(part, i) {
            data_part2.push(part.question);
          });
          res.data.questions.part3.map(function(part, i) {
            data_part3.push(part.question);
          });
          res.data.questions.part4.map(function(part, i) {
            data_part4.push(part.question);
          });
          res.data.questions.part5.map(function(part, i) {
            data_part5.push(part.question);
          });
          res.data.questions.part6.map(function(part, i) {
            data_part6.push(part.question);
          });
          res.data.questions.part7.map(function(part, i) {
            data_part7.push(part.question);
          });
          question.part1 = data_part1;
          question.part2 = data_part2;
          question.part3 = data_part3;
          question.part4 = data_part4;
          question.part5 = data_part5;
          question.part6 = data_part6;
          question.part7 = data_part7;
          props.dispatch({ type: 'EXAM_TEST', data: question });
          var data = [];
          res.data.questions.part1.map(function(part, i) {
            var url = 'http://202.191.56.159:2510/' + part.question.audio;
            data.push({ link: url });
          });
          setDataAudio(data);
          console.log(res.data.test);
          setChecked(res.data.test.checked);
        });
    } else {
      services.randomPart({ part: 1, level: 3 }).then(res => {
        console.log(res);
        var data1 = [];
        res.data.map(function(part, i) {
          data1.push(part);
        });
        setDataPart1(data1);
        // var question = res.data.questions;
        // var question = {};
        // var data_part1 = [], data_part2 = [], data_part3 = [], data_part4 = [], data_part5 = [], data_part6 = [], data_part7 = [];
        // res.data.questions.part1.map(function(part, i) {
        //   data_part1.push(part.question);
        // })
        // res.data.questions.part2.map(function(part, i) {
        //   data_part2.push(part.question);
        // })
        // res.data.questions.part3.map(function(part, i) {
        //   data_part3.push(part.question);
        // })
        // res.data.questions.part4.map(function(part, i) {
        //   data_part4.push(part.question);
        // })
        // res.data.questions.part5.map(function(part, i) {
        //   data_part5.push(part.question);
        // })
        // res.data.questions.part6.map(function(part, i) {
        //   data_part6.push(part.question);
        // })
        // res.data.questions.part7.map(function(part, i) {
        //   data_part7.push(part.question);
        // })
        // question.part1 = data_part1;
        // question.part2 = data_part2;
        // question.part3 = data_part3;
        // question.part4 = data_part4;
        // question.part5 = data_part5;
        // question.part6 = data_part6;
        // question.part7 = data_part7;
        // props.dispatch({type : "EXAM_TEST", data : question})
        var data = [];
        res.data.map(function(part, i) {
          var url = 'http://202.191.56.159:2510/' + part.audio;
          data.push({ link: url });
        });
        setDataAudio(data);
        // console.log(res.data.test);
        // setChecked(res.data.test.checked);
      });
    }
    // else {
    //   setDataPart1(props.exam.part1);
    //   var data =[];
    //   props.exam.part1.map(function(part, i) {
    //     var url = "http://202.191.56.159:2510/" + part.audio;
    //     data.push({link : url});
    //   })
    //   setDataAudio(data);
    // }
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
  ]);

  const onChange = (value, i) => {
    const change = Object.assign([], resultsPart1);
    change[i] = value;
    setResultsPart1(change);
  };

  const onToggleAudio = () => {
    if (dataAudio.length > 0) {
      setIndexAudio(indexAudio + 1);

      if (indexAudio < dataAudio.length - 1) {
        audioPlayer.current.src = dataAudio[indexAudio + 1].link;
        audioPlayer.current.play();
      }

      if (indexAudio === dataAudio.length - 1) {
        setIndexAudio(0);
        audioPlayer.current.src = dataAudio[0].link;
        audioPlayer.current.pause();
      }
    }
  };

  console.log(dataAudio);
  console.log(dataPart1);

  return (
    <div className={`${prefixCls}`}>
      <div className={`${prefixCls}-content`}>
        <BackwardTimer
          onchange={() => {
            props.history.push('/');
          }}
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
                  idSubQuestion: data.subQuestions[0]._id,
                  answer: resultsPart1[i],
                },
              ];
              results.push(temp);
            });
            object.results = results;
            services.submitResults(object).then(res => {
              props.history.push(
                '/exam/finish?id=' + props.location.search.substring(4),
              );
            });
            // props.history.push('/exam/part2intro?id=' + props.location.search.substring(4));
          }}
        />
        <div className="" style={{ marginTop: '4em', padding: '3em 8em' }}>
          <Row style={{ marginBottom: '1em' }}>
            <b>
              <h2>Part 1</h2>
            </b>
          </Row>
          <Row style={{ marginBottom: '1em' }}>
            <b>Mark your answer on your answer sheet:</b>
          </Row>
          <Row style={{ textAlign: 'center' }}>
            {!checked && (
              <audio
                onEnded={onToggleAudio}
                ref={audioPlayer}
                controls
                autoplay="autoplay"
                autobuffer
                style={{ width: '50%' }}
              >
                {dataAudio.length > 0 && <source src={dataAudio[0].link} />}
                <track kind="captions" />
              </audio>
            )}
          </Row>
          {dataPart1.length > 0 &&
            dataPart1.map(function(data, i) {
              return (
                <div>
                  <Row style={{ textAlign: 'center', margin: '2em 0' }}>
                    <img
                      src={`http://202.191.56.159:2510/${data.image}`}
                      style={{ width: '70%' }}
                    />
                  </Row>
                  <Row style={{ textAlign: 'center' }}>
                    {checked && (
                      <audio controls style={{ width: '50%' }}>
                        <source
                          src={'http://202.191.56.159:2510/' + data.audio}
                        />
                      </audio>
                    )}
                  </Row>
                  <Row>
                    {checked && (
                      <div
                        className="ck-post-display"
                        style={{
                          borderRadius: '3px',
                          padding: '16px',
                          margin: '10px 0',
                          border: '1px solid #d1d5da',
                        }}
                        dangerouslySetInnerHTML={{ __html: data.scripts }}
                      ></div>
                    )}
                  </Row>
                  <Row>
                    <b>{i + 1}. Select the answer</b>
                  </Row>
                  <Row>
                    <Radio.Group onChange={e => onChange(e.target.value, i)}>
                      <Radio style={radioStyle} value={'a'}>
                        Option A
                        {checked && data.subQuestions[0].answer == 'a' && (
                          <Icon
                            style={{ marginLeft: '8px', color: 'red' }}
                            type="check"
                          />
                        )}
                        {submit && data.subQuestions[0].answer == 'a' && (
                          <Icon
                            style={{ marginLeft: '8px', color: 'red' }}
                            type="check"
                          />
                        )}
                      </Radio>
                      <Radio style={radioStyle} value={'b'}>
                        Option B
                        {checked && data.subQuestions[0].answer == 'b' && (
                          <Icon
                            style={{ marginLeft: '8px', color: 'red' }}
                            type="check"
                          />
                        )}
                        {submit && data.subQuestions[0].answer == 'b' && (
                          <Icon
                            style={{ marginLeft: '8px', color: 'red' }}
                            type="check"
                          />
                        )}
                      </Radio>
                      <Radio style={radioStyle} value={'c'}>
                        Option C
                        {checked && data.subQuestions[0].answer == 'c' && (
                          <Icon
                            style={{ marginLeft: '8px', color: 'red' }}
                            type="check"
                          />
                        )}
                        {submit && data.subQuestions[0].answer == 'c' && (
                          <Icon
                            style={{ marginLeft: '8px', color: 'red' }}
                            type="check"
                          />
                        )}
                      </Radio>
                      <Radio style={radioStyle} value={'d'}>
                        Option D
                        {checked && data.subQuestions[0].answer == 'd' && (
                          <Icon
                            style={{ marginLeft: '8px', color: 'red' }}
                            type="check"
                          />
                        )}
                        {submit && data.subQuestions[0].answer == 'd' && (
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
            })}

          <Row style={{ textAlign: 'center', margin: '2em 0' }}>
            {props.location.search.split('&').length == 1 && checked && (
              <Button
                className="ant-btn-primary ant-card-hoverable"
                onClick={() => {
                  // services.randomPart({part : 1, level : 3})
                  // .then(res => {
                  props.history.push(
                    '/exam/part1?id=' +
                      props.location.search.substring(4) +
                      '&type=learn',
                  );
                  // })
                  // props.history.push('/exam/part2intro?id=' + props.location.search.substring(4));
                }}
                style={{ marginRight: '20px' }}
              >
                Rèn luyện
              </Button>
            )}
            {props.location.search.split('&').length !== 1 && (
              <Button
                className="ant-btn-primary ant-card-hoverable"
                onClick={() => {
                  setSubmit(true);
                  // var object = {};
                  // object.idTest = props.location.search.substring(4);
                  // object.part = 1;
                  // var results = [];
                  // dataPart1.map(function(data, i) {
                  //   var temp = {};
                  //   temp.idQuestion = data._id;
                  //   temp.userAnswer = [
                  //     {
                  //       idSubQuestion: data.subQuestions[0]._id,
                  //       answer: resultsPart1[i],
                  //     },
                  //   ];
                  //   results.push(temp);
                  // });
                  // object.results = results;
                  // services.submitRandomPart(object).then(res => {
                  //   props.history.push(
                  //     '/exam/part1?id=' +
                  //       props.location.search.substring(4) +
                  //       '&type=learn',
                  //   );
                  // });
                  // props.history.push('/exam/part2intro?id=' + props.location.search.substring(4));
                }}
              >
                Nộp bài luyện tập
              </Button>
            )}
            {props.location.search.split('&').length === 1 && (
              <Button
                className="ant-btn-primary ant-card-hoverable"
                onClick={() => {
                  var object = {};
                  object.idTest = props.location.search.substring(4);
                  object.part = 1;
                  var results = [];
                  dataPart1.map(function(data, i) {
                    var temp = {};
                    temp.idQuestion = data._id;
                    temp.userAnswer = [
                      {
                        idSubQuestion: data.subQuestions[0]._id,
                        answer: resultsPart1[i],
                      },
                    ];
                    results.push(temp);
                  });
                  object.results = results;
                  services.submitResults(object).then(res => {
                    props.history.push(
                      '/exam/part2intro?id=' +
                        props.location.search.substring(4),
                    );
                  });
                  // props.history.push('/exam/part2intro?id=' + props.location.search.substring(4));
                }}
              >
                Tiếp tục
              </Button>
            )}
          </Row>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ exam }) => {
  console.log(exam);
  return {
    exam,
  };
};

export default connect(mapStateToProps)(Intro);
