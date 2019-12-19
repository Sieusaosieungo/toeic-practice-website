import React, { useState, useEffect } from 'react';
import { Row, Col, Button, message, Statistic} from 'antd';
import { Link } from 'react-router-dom';
import './style.scss';
import { services} from "../../../services"
import { connect} from 'react-redux';
const prefixCls = 'exam';
const { Countdown } = Statistic;

const Result = props => {
  console.log(props)
  const pointListening = [5,5,5,5,5,5,5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90,95,100,105,110,115,120,125,135,140,145,150,155,160,165,170,180,185,190,195,200,210,220,225,230,235,240,245,250,255,260,270,275,280,285,295,300,305,310,315,320,325,330,335,340,345,350,360,365,370,375,380,390,395,400,405,410,420,425,430,435,440,450,455,460,470,475,480,485,490,495,495,495,495,495,495,495,495];
  const pointReading = [5,5,5,5,5,5,5,5,5,5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,90,95,100,110,115,120,125,130,135,140,145,150,155,160,170,175,180,185,195,200,205,210,220,225,230,235,240,250,255,260,270,275,280,285,290,295,300,305,310,320,325,330,335,340,345,350,355,360,365,370,375,380,385,390,395,400,405,405,410,415,420,425,430,435,445,450,455,465,470,475,480,485,490,495,495,495,495];

  useEffect(() => {
    services.getExamTestById({id : props.location.search.substring(4)})
      .then(res => {
        console.log(res)
        var array = Object.assign([], result);
        res.data.test.partResults.map(function(data, i) {
          array[i] = data.partPoint;
        })
        setResult(array);

      })
    }, [])

  var time = sessionStorage.startTest;
  time = time == null ? Date.now() : parseInt(time);

  const [result, setResult] = useState([0,0,0,0,0,0,0])
  return (
    <div className={`${prefixCls}`}>
      <div className={`${prefixCls}-content`}>
        <h1>Kết thúc bài thi</h1>
        <div className="" style={{ marginTop: '1.5em' }}>
          <Row>
            <div className="question-content">
              <div className="text-center">
                Thời gian còn lại
                <Countdown 
                  value={time + 1000 * 2 * 60 * 60} 
                  onFinish={()=>{props.history.push('/exam/result?id=' + props.location.search.substring(4))}} 
                />
              </div>
              <div className="text-center">
                <Button 
                  className="ant-btn-primary ant-card-hoverable" 
                  onClick={() => props.history.push('/exam/part5?id=' + props.location.search.substring(4))}
                  style={{marginRight : "30px"}}
                >Xem lại bài thi
                </Button>
                <Button 
                  className="ant-btn-danger ant-card-hoverable" 
                  onClick={() => {
                    services.finish()
                      .then(res => {
                        console.log(res);
                        props.history.push('/exam/result?id=' + props.location.search.substring(4))
                      })
                    // props.history.push('/exam/result?id=' + props.location.search.substring(4))
                  }}
                >Kết thúc
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
  console.log(user)
  return {
    user
  };
};

export default connect(mapStateToProps)(Result);
