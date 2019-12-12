import React, { Component } from "react";
import { Icon, Modal, Statistic } from 'antd';
import { services } from '../services'
const { Countdown } = Statistic;

class BackwardTimer extends Component {
	render() {
		var time = sessionStorage.startTest;
		time = time == null ? Date.now() : parseInt(time);
		console.log(time)
		return (
			<div style={{position : "absolute", top : 0, right : 0}}>
	      <ul className="top-nav-list">
	          <li><a className="finish-all" href="#"><b>FINISH ALL</b></a></li>
	          <li><a style={{fontSize: "25px", paddingLeft: "15px", paddingRight: "15px"}} href="#"><b><Countdown 
	          	value={time + 1000 * 2 * 60 * 60} 
	          	onFinish={()=>{}} 
	          /></b></a></li>
	          <li className="backpage">
	              <a className="exit-exam" href="#" onClick={(e) => {
	                e.preventDefault();
	                Modal.confirm({
	                  title: 'Chú ý',
	                  content: 'Bạn có chắc chắn muốn thoát',
	                  okText: 'Thoát',
	                  cancelText: 'Tiếp tục',
	                  onOk() {
	                    this.props.onOK();
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