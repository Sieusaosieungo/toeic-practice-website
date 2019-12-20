import React, { useState, useEffect } from 'react';
import { Row, Col, Button, message } from 'antd';
import { Link } from 'react-router-dom';
import './style.scss';
import { services } from '../../../services';
import { connect } from 'react-redux';
const prefixCls = 'exam';

const Result = props => {
  console.log(props);
  const pointListening = [
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    10,
    15,
    20,
    25,
    30,
    35,
    40,
    45,
    50,
    55,
    60,
    65,
    70,
    75,
    80,
    85,
    90,
    95,
    100,
    105,
    110,
    115,
    120,
    125,
    135,
    140,
    145,
    150,
    155,
    160,
    165,
    170,
    180,
    185,
    190,
    195,
    200,
    210,
    220,
    225,
    230,
    235,
    240,
    245,
    250,
    255,
    260,
    270,
    275,
    280,
    285,
    295,
    300,
    305,
    310,
    315,
    320,
    325,
    330,
    335,
    340,
    345,
    350,
    360,
    365,
    370,
    375,
    380,
    390,
    395,
    400,
    405,
    410,
    420,
    425,
    430,
    435,
    440,
    450,
    455,
    460,
    470,
    475,
    480,
    485,
    490,
    495,
    495,
    495,
    495,
    495,
    495,
    495,
    495,
  ];
  const pointReading = [
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    10,
    15,
    20,
    25,
    30,
    35,
    40,
    45,
    50,
    55,
    60,
    65,
    70,
    75,
    80,
    90,
    95,
    100,
    110,
    115,
    120,
    125,
    130,
    135,
    140,
    145,
    150,
    155,
    160,
    170,
    175,
    180,
    185,
    195,
    200,
    205,
    210,
    220,
    225,
    230,
    235,
    240,
    250,
    255,
    260,
    270,
    275,
    280,
    285,
    290,
    295,
    300,
    305,
    310,
    320,
    325,
    330,
    335,
    340,
    345,
    350,
    355,
    360,
    365,
    370,
    375,
    380,
    385,
    390,
    395,
    400,
    405,
    405,
    410,
    415,
    420,
    425,
    430,
    435,
    445,
    450,
    455,
    465,
    470,
    475,
    480,
    485,
    490,
    495,
    495,
    495,
    495,
  ];

  useEffect(() => {
    services
      .getExamTestById({ id: props.location.search.substring(4) })
      .then(res => {
        console.log(res);
        var array = Object.assign([], result);
        var array1 = Object.assign([], target);
        res.data.test.partResults.map(function(data, i) {
          array[data.part - 1] = data.partPoint;
          array1[data.part - 1] = data.targetPart;
        });
        setResult(array);
        setTarget(array1);
      });
  }, []);

  const [result, setResult] = useState([0, 0, 0, 0, 0, 0, 0]);
  const [target, setTarget] = useState([0, 0, 0, 0, 0, 0, 0]);
  console.log(result[0] + result[1] + result[2] + result[3]);
  console.log(result[4] + result[5] + result[6]);
  return (
    <div className={`${prefixCls}`}>
      <div className={`${prefixCls}-content`}>
        <h1>Kết quả</h1>
        <div className="" style={{ marginTop: '1.5em' }}>
          <Row>
            <div className="question-content">
              <table className="table-question" style={{ border: 'none' }}>
                <thead>
                  <tr style={{ height: '3em' }}>
                    <th colSpan="2" style={{ color: '#D93425' }}>
                      Listening: {result[0] + result[1] + result[2] + result[3]}
                      /100
                    </th>
                    <th style={{ width: '15%' }}>
                      &nbsp;&nbsp;&nbsp;&nbsp;Kỳ vọng
                    </th>
                    <th style={{ width: '15%' }}>
                      &nbsp;&nbsp;&nbsp;&nbsp;Luyện tập
                    </th>
                    <th
                      className="right-answer"
                      style={{ color: '#D93425', width: '15%' }}
                    >
                      Điểm nghe:{' '}
                      {
                        pointListening[
                          result[0] + result[1] + result[2] + result[3]
                        ]
                      }
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <b>1 - 10</b>
                    </td>
                    <td className="td-quest">
                      Part I: Picture Description <b>({result[0]}/10)</b>
                    </td>
                    <td className="">
                      <b>{target[0]}</b>
                    </td>
                    <td className="">
                      {result[0] < target[0] && (
                        <Link to={'/' + 'practice/part1'}>Rèn luyện</Link>
                      )}
                    </td>
                    <td className="td-right-answer">
                      <Link
                        to={
                          '/' +
                          'exam/part1?id=' +
                          props.location.search.substring(4)
                        }
                      >
                        Chi tiết
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <b>11 - 40</b>
                    </td>
                    <td className="td-quest">
                      Part II: Question - Response <b>({result[1]}/30)</b>
                    </td>
                    <td className="">
                      <b>{target[1]}</b>
                    </td>
                    <td className="">
                      {result[1] < target[1] && (
                        <Link to={'/' + 'practice/part2'}>Rèn luyện</Link>
                      )}
                    </td>
                    <td className="td-right-answer">
                      <Link
                        to={
                          '/' +
                          'exam/part2?id=' +
                          props.location.search.substring(4)
                        }
                      >
                        Chi tiết
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <b>41 - 70</b>
                    </td>
                    <td className="td-quest">
                      Part III: Short Conversations <b>({result[2]}/30)</b>
                    </td>
                    <td className="">
                      <b>{target[2]}</b>
                    </td>
                    <td className="">
                      {result[2] < target[2] && (
                        <Link to={'/' + 'practice/part3'}>Rèn luyện</Link>
                      )}
                    </td>
                    <td className="td-right-answer">
                      <Link
                        to={
                          '/' +
                          'exam/part3?id=' +
                          props.location.search.substring(4)
                        }
                      >
                        Chi tiết
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <b>71 - 100</b>
                    </td>
                    <td className="td-quest">
                      Part IV: Short Talks <b>({result[3]}/30)</b>
                    </td>
                    <td className="">
                      <b>{target[3]}</b>
                    </td>
                    <td className="">
                      {result[3] < target[3] && (
                        <Link to={'/' + 'practice/part4'}>Rèn luyện</Link>
                      )}
                    </td>
                    <td className="td-right-answer">
                      <Link
                        to={
                          '/' +
                          'exam/part4?id=' +
                          props.location.search.substring(4)
                        }
                      >
                        Chi tiết
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </table>

              <table className="table-question" style={{ border: 'none' }}>
                <thead>
                  <tr style={{ height: '3em' }}>
                    <th colSpan="2" style={{ color: '#D93425' }}>
                      Reading: {result[4] + result[5] + result[6]}/100
                    </th>
                    <th style={{ width: '15%' }}>Kỳ vọng</th>
                    <th style={{ width: '15%' }}></th>
                    <th
                      className="right-answer"
                      style={{ color: '#D93425', width: '15%' }}
                    >
                      Điểm đọc:{' '}
                      {pointReading[result[4] + result[5] + result[6]]}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <b>101 - 140</b>
                    </td>
                    <td className="td-quest">
                      Part V: Incomplete Sentences <b>({result[4]}/40)</b>
                    </td>
                    <td className="">
                      <b>{target[4]}</b>
                    </td>
                    <td className="">
                      {result[4] < target[4] && (
                        <Link to={'/' + 'practice/part5'}>Rèn luyện</Link>
                      )}
                    </td>
                    <td className="td-right-answer">
                      <Link
                        to={
                          '/' +
                          'exam/part5?id=' +
                          props.location.search.substring(4)
                        }
                      >
                        Chi tiết
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <b>141 - 152</b>
                    </td>
                    <td className="td-quest">
                      Part VI: Text Completion <b>({result[5]}/12)</b>
                    </td>
                    <td className="">
                      <b>{target[5]}</b>
                    </td>
                    <td className="">
                      {result[5] < target[5] && (
                        <Link to={'/' + 'practice/part6'}>Rèn luyện</Link>
                      )}
                    </td>
                    <td className="td-right-answer">
                      <Link
                        to={
                          '/' +
                          'exam/part6?id=' +
                          props.location.search.substring(4)
                        }
                      >
                        Chi tiết
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <b>153 - 200</b>
                    </td>
                    <td className="td-quest">
                      Part VII: Reading Comprehension <b>({result[6]}/48)</b>
                    </td>
                    <td className="">
                      <b>{target[6]}</b>
                    </td>
                    <td className="">
                      {result[6] < target[6] && (
                        <Link to={'/' + 'practice/part7'}>Rèn luyện</Link>
                      )}
                    </td>
                    <td className="td-right-answer">
                      <Link
                        to={
                          '/' +
                          'exam/part7?id=' +
                          props.location.search.substring(4)
                        }
                      >
                        Chi tiết
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="text-center">
                <Button
                  className="ant-btn-primary ant-card-hoverable"
                  onClick={() => props.history.push('/')}
                >
                  Thoát
                </Button>
              </div>
            </div>
          </Row>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ user }) => {
  console.log(user);
  return {
    user,
  };
};

export default connect(mapStateToProps)(Result);
