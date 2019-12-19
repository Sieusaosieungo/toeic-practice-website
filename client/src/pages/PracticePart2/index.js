import React, { useState, useEffect } from 'react';
import { Row, Radio, Col, Icon, Button } from 'antd';
import { services } from '../../services';
import axios from 'axios';
import { connect } from 'react-redux';
import { withCookies } from 'react-cookie';

import './style.scss';
import config from '../../utils/config';

const prefixCls = 'home';

const PracticePart2 = props => {
  const radioStyle = {
    display: 'block',
    height: '30px',
    lineHeight: '30px',
  };

  const [dataAudio, setDataAudio] = useState([]);
  const [dataPart2, setDataPart2] = useState([]);

  const [checked, setChecked] = useState(false);
  const [submit, setSubmit] = useState(false);

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

  const onToggleAudio = () => {
    if (dataAudio.length > 0) {
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

  const onChange = (value, i) => {
    const change = Object.assign([], resultsPart1);
    change[i] = value;
    setResultsPart1(change);
  };

  useEffect(() => {
    axios({
      method: 'GET',
      url: `${config.API_URL}/api/tests/part`,
      headers: {
        Authorization: 'Bearer ' + props.cookies.cookies.accessToken,
      },
      params: { part: 2, level: 3 },
    }).then(res => {
      console.log('practice part 2:', res.data);

      var data2 = [];
      res.data.map(function(part, i) {
        data2.push(part);
      });
      setDataPart2(data2);
      var question = {};
      var data_part2 = [];

      res.data.map(function(part, i) {
        data_part2.push(part.question);
      });

      question.part2 = data_part2;
      props.dispatch({ type: 'EXAM_TEST', data: question });
      var data = [];
      res.data.map(function(part, i) {
        var url = 'http://202.191.56.159:2510/' + part.audio;
        data.push({ link: url });
      });
      setDataAudio(data);
    });
  }, []);

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
            {!checked && (
              <audio
                onEnded={onToggleAudio}
                ref={audioPlayer}
                controls
                autoplay="autoplay"
                style={{ width: '50%' }}
              >
                {dataAudio.length > 0 && <source src={dataAudio[0].link} />}
                <track kind="captions" />
              </audio>
            )}
          </Row>
          {dataPart2.length > 0 &&
            dataPart2.map(function(data, i) {
              console.log('mami:', data);
              return (
                <div>
                  <Row style={{ textAlign: 'center' }}>
                    {checked && (
                      <audio controls style={{ width: '50%' }}>
                        <source
                          src={'http://202.191.56.159:2510/' + data.audio}
                        />
                      </audio>
                    )}
                  </Row>
                  <Row style={{ marginTop: '1em' }}>
                    <Col span={8}>
                      <b>{10 + i + 1}.</b>
                      <br />
                      <Radio.Group onChange={e => onChange(e.target.value, i)}>
                        <Radio style={radioStyle} value={'a'}>
                          A
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
                          B
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
                          C
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
                      </Radio.Group>
                    </Col>
                    {
                      // <Col span={8}>
                      //                   <b>{10 + 3 * i + 2}.</b>
                      //                   <br />
                      //                   <Radio.Group
                      //                     onChange={e => onChange(e.target.value, 3 * i + 1)}
                      //                   >
                      //                     <Radio style={radioStyle} value={"a"}>
                      //                       A
                      //                       {
                      //                         checked &&
                      //                         data.subQuestions[1].answer == "a" &&
                      //                         <Icon style={{marginLeft : "8px", color : "red"}} type="check" />
                      //                       }
                      //                     </Radio>
                      //                     <Radio style={radioStyle} value={"b"}>
                      //                       B
                      //                       {
                      //                         checked &&
                      //                         data.subQuestions[1].answer == "b" &&
                      //                         <Icon style={{marginLeft : "8px", color : "red"}} type="check" />
                      //                       }
                      //                     </Radio>
                      //                     <Radio style={radioStyle} value={"c"}>
                      //                       C
                      //                       {
                      //                         checked &&
                      //                         data.subQuestions[1].answer == "c" &&
                      //                         <Icon style={{marginLeft : "8px", color : "red"}} type="check" />
                      //                       }
                      //                     </Radio>
                      //                   </Radio.Group>
                      //                 </Col>
                      //                 <Col span={8}>
                      //                   <b>{10 + 3 * i + 3}.</b>
                      //                   <br />
                      //                   <Radio.Group
                      //                     onChange={e => onChange(e.target.value, 3 * i + 2)}
                      //                   >
                      //                     <Radio style={radioStyle} value={"a"}>
                      //                       A
                      //                       {
                      //                         checked &&
                      //                         data.subQuestions[2].answer == "a" &&
                      //                         <Icon style={{marginLeft : "8px", color : "red"}} type="check" />
                      //                       }
                      //                     </Radio>
                      //                     <Radio style={radioStyle} value={"b"}>
                      //                       B
                      //                       {
                      //                         checked &&
                      //                         data.subQuestions[2].answer == "b" &&
                      //                         <Icon style={{marginLeft : "8px", color : "red"}} type="check" />
                      //                       }
                      //                     </Radio>
                      //                     <Radio style={radioStyle} value={"c"}>
                      //                       C
                      //                       {
                      //                         checked &&
                      //                         data.subQuestions[2].answer == "c" &&
                      //                         <Icon style={{marginLeft : "8px", color : "red"}} type="check" />
                      //                       }
                      //                     </Radio>
                      //                   </Radio.Group>
                      //                 </Col>
                    }
                  </Row>
                </div>
              );
            })}

          <Row style={{ textAlign: 'center', margin: '2em 0' }}>
            <Button
              className="ant-btn-primary ant-card-hoverable"
              onClick={() => {
                setSubmit(true);
              }}
            >
              Nộp bài luyện tập
            </Button>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default connect()(withCookies(PracticePart2));
