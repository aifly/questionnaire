import React, { Component } from 'react';
import {FlyPublicComponent} from './public.jsx';
import WindowApp from './window.jsx';
import './css/seewhat.css'

class SeeWhatApp extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {};
	  this.viewWidth = document.documentElement.clientWidth;
	  this.viewHeight =document.documentElement.clientHeight;

	}
	render() {
		let style = {
				background:'url(./assets/images/bg3.png) no-repeat center center',
				backgroundSize:'cover'
		};
		let icoStyle=  {
			background:'url(./assets/images/pos.png) no-repeat center',
			backgroundSize:'contain'
		}
		let tag1 = <div className='w-tag'>
				<div className='w-ico' style={icoStyle}>A</div>
				<div className='w-text'>时政会议</div>
		</div>;

		let tag2 = <div className='w-tag'>
				<div className='w-ico' style={icoStyle}>B</div>
				<div className='w-text'>突发事件</div>
		</div>

		let tag3 = <div className='w-tag'>
				<div className='w-ico' style={icoStyle}>C</div>
				<div className='w-text'>人文活动</div>
		</div>;
		let tag4 = <div className='w-tag'>
				<div className='w-ico' style={icoStyle}>D</div>
				<div className='w-text'>科技探秘</div>
		</div>;
		let tag5 = <div className='w-tag'>
				<div className='w-ico' style={icoStyle}>E</div>
				<div className='w-text'>自然风光</div>
		</div>;


		var props1={
			tag:tag1,
			img:'./assets/images/sz.png',
			className:'window1'
		}
		var props2={
			tag:tag2,
			img:'./assets/images/sj.png',
			className:'window2'
		};
		var props3={
			tag:tag3,
			img:'./assets/images/rw.png',
			className:'window3'
		};
		var props4={
			tag:tag4,
			img:'./assets/images/kj.png',
			className:'window4'
		}
		var props5={
			tag:tag5,
			img:'./assets/images/zr.png',
			className:'window5'
		}

		return (
			<div className='sw-main-ui' style={style}>
					<WindowApp {...props1}></WindowApp>
					<WindowApp {...props2}></WindowApp>
					<WindowApp {...props3}></WindowApp>
					<WindowApp {...props4}></WindowApp>
					<WindowApp {...props5}></WindowApp>
			</div>
		);
	}
	componentDidMount() {
		
	}

}
export default FlyPublicComponent(SeeWhatApp);