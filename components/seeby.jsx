import React, { Component } from 'react';
import {FlyPublicComponent} from './public.jsx';
import WindowApp from './window.jsx';
import './css/seeby.css';

class SeeByApp extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {};
	
	}
	render() {
		let style = {
				background:'url(./assets/images/bg4.png) no-repeat center bottom',
				backgroundSize:'cover'
		};
	
		return (
			<div className='sb-main-ui' style={style}>
				<div className='sb-ico sb-hp'><img src='./assets/images/hp.png'/></div>
				<div className='sb-ico sb-vr'><img src='./assets/images/vr.png'/></div>
				<div className='sb-ico sb-sp'><img src='./assets/images/sp.png'/></div>
				<div className='sb-ico sb-tp'><img src='./assets/images/tp.png'/></div>
				<div className='sb-ico sb-yp'><img src='./assets/images/yp.png'/></div>
				<div className='sb-ico sb-wz'><img src='./assets/images/wz.png'/></div>
			</div>
		);
	}
	componentDidMount() {
		
	}

}
export default FlyPublicComponent(SeeByApp);