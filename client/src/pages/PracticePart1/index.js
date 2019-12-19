import React, { useState, useEffect } from 'react';
import { Button, Row, Radio, Icon } from 'antd';
import { connect } from 'react-redux';
import BackwardTimer from '../../utils/countdown';
import { services } from '../../services';
import axios from 'axios';
import { withCookies } from 'react-cookie';

import './style.scss';
import config from '../../utils/config';

const prefixCls = 'home';

const PracticePart1 = props => {
  const radioStyle = {
    display: 'block',
    height: '30px',
    lineHeight: '30px',
  };

  const [dataAudio, setDataAudio] = useState([]);
  const [dataPart1, setDataPart1] = useState([]);
  const [submit, setSubmit] = useState(false);
  const [isPlaying, setIsPlaying] = useState();
  const [indexAudio, setIndexAudio] = useState(0);
  const [checked, setChecked] = useState(false);

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

  const audioPlayer = React.createRef();

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

  useEffect(() => {
    axios({
      method: 'GET',
      url: `${config.API_URL}/api/tests/part`,
      headers: {
        Authorization: 'Bearer ' + props.cookies.cookies.accessToken,
      },
      params: { part: 1, level: 3 },
    }).then(res => {
      console.log(res);
      var data1 = [];
      res.data.map(function(part, i) {
        data1.push(part);
      });
      setDataPart1(data1);
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
                    <b>{i + 1}. Select the answer</b>
                  </Row>
                  <Row>
                    <Radio.Group onChange={e => onChange(e.target.value, i)}>
                      <Radio style={radioStyle} value={'a'}>
                        Option A
                        {checked && data.subQuestions[0].answer === 'a' && (
                          <Icon
                            style={{ marginLeft: '8px', color: 'red' }}
                            type="check"
                          />
                        )}
                        {submit && data.subQuestions[0].answer === 'a' && (
                          <Icon
                            style={{ marginLeft: '8px', color: 'red' }}
                            type="check"
                          />
                        )}
                      </Radio>
                      <Radio style={radioStyle} value={'b'}>
                        Option B
                        {checked && data.subQuestions[0].answer === 'b' && (
                          <Icon
                            style={{ marginLeft: '8px', color: 'red' }}
                            type="check"
                          />
                        )}
                        {submit && data.subQuestions[0].answer === 'b' && (
                          <Icon
                            style={{ marginLeft: '8px', color: 'red' }}
                            type="check"
                          />
                        )}
                      </Radio>
                      <Radio style={radioStyle} value={'c'}>
                        Option C
                        {checked && data.subQuestions[0].answer === 'c' && (
                          <Icon
                            style={{ marginLeft: '8px', color: 'red' }}
                            type="check"
                          />
                        )}
                        {submit && data.subQuestions[0].answer === 'c' && (
                          <Icon
                            style={{ marginLeft: '8px', color: 'red' }}
                            type="check"
                          />
                        )}
                      </Radio>
                      <Radio style={radioStyle} value={'d'}>
                        Option D
                        {checked && data.subQuestions[0].answer === 'd' && (
                          <Icon
                            style={{ marginLeft: '8px', color: 'red' }}
                            type="check"
                          />
                        )}
                        {submit && data.subQuestions[0].answer === 'd' && (
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

const mapStateToProps = ({ exam }) => {
  console.log(exam);
  return {
    exam,
  };
};

export default connect(mapStateToProps)(withCookies(PracticePart1));
