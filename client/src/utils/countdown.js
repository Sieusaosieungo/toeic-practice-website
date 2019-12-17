import React, { Component } from "react";
import { Icon, Modal, Statistic } from 'antd';
import { services } from '../services'
import { Redirect } from 'react-router-dom'
const { Countdown } = Statistic;

class BackwardTimer extends Component {
	render() {
		var time = sessionStorage.startTest;
		time = time == null ? Date.now() : parseInt(time);
		return (
			<div style={{position : "fixed", top : "70px", right : 0, width : "100%", textAlign : "right", zIndex : 100,backgroundColor: "#ebebeb"}}>
	      <ul className="top-nav-list">
	          <li><a className="finish-all" href="#" onClick={()=>{
              var _this = this;
              console.log(this)
              _this.props.finishAll();
            }}><b>FINISH ALL</b></a></li>
	          <li><a style={{fontSize: "25px", paddingLeft: "15px", paddingRight: "15px"}} href="#"><b><Countdown 
	          	value={time + 1000 * 2 * 60 * 60} 
	          	onFinish={()=>{}} 
	          /></b></a></li>
	          <li className="backpage">
	              <a className="exit-exam" href="#" onClick={(e) => {
                  var _this = this;
	                e.preventDefault();
	                Modal.confirm({
	                  title: 'Chú ý',
	                  content: 'Bạn có chắc chắn muốn thoát',
	                  okText: 'Thoát',
	                  cancelText: 'Tiếp tục',
	                  onOk() {
	                    _this.props.onchange();
	                  },
	                });
	              }}><Icon type="close-circle" /></a>
	          </li>
	      </ul>
	    </div>
		)
	}
}

export default BackwardTimer;