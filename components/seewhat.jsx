import React, { Component } from 'react';
import {FlyPublicComponent} from './public.jsx';
import WindowApp from './window.jsx';
import Mask from './mask.jsx';
import './css/seewhat.css'

import $ from 'jquery';
import Parabola from '../lib/parabola';

class SeeWhatApp extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	visiable:null
	  };
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
		let img = <div className='info'>
			<img src='./assets/images/whatsee.png'/>
		</div>
		return (
			<div className='sw-main-ui' ref='sw-main-ui' onTouchTap={this.closeMask.bind(this)} style={style}>
				<WindowApp {...props1} {...this.props}></WindowApp>
				<WindowApp {...props2} {...this.props}></WindowApp>
				<WindowApp {...props3} {...this.props}></WindowApp>
				<WindowApp {...props4} {...this.props}></WindowApp>
				<WindowApp {...props5} {...this.props}></WindowApp>
				<Mask img={img} className={this.state.visiable?'show':''}></Mask>
			</div>
		);
	}
	closeMask(e){
		let {obserable}  = this.props;
		if(this.state.visiable){
			this.setState({
				visiable:false
			});
			this.currentPerson = obserable.trigger({type:"getCurrentPerson"});
			this.currentPerson.classList.add('fly-bottom');	
			obserable.trigger({type:"openWindow"});

		}
		else{
			if(this.state.visiable === null){
				return;
			}
			this.state.visiable = null;
			var target = e.target;
			if(e.target.classList.contains('window-main-ui')){
				target = $(e.target).css({zIndex:100});
			}
			else{
				target = $(e.target).parents('.window-main-ui').css({zIndex:1000});
			}

			
			this.currentPerson.data.push(target.find('.w-text').html());

			var s = this;

			this.bool = new Parabola({
	            el: target[0],
	            offset: [s.viewWidth - s.currentPerson.offsetWidth - target[0].offsetLeft, ( s.viewHeight - s.currentPerson.offsetHeight) - target[0].offsetTop ],
	            curvature: 0.01,
	            duration: 800,
	            callback:function(){
	                // alert("完成后回调")
	        		target.addClass('hide');
	        		s.currentPerson.classList.remove('fly-bottom');  
	        		obserable.trigger({type:'doNext'});

	        		setTimeout(()=>{
	        			obserable.trigger({
	        				type:"showSeeByMask"
	        			});
	        		},window.duration);
	            },
	            stepCallback:function(x,y){

	            }
	        });

	        this.bool.start();




			//this.currentPerson.classList.remove('fly-bottom');	

		}

	}
	componentDidMount() {

		let {obserable} = this.props;

		obserable.on('openWindow',()=>{
			var windows = this.refs['sw-main-ui'].querySelectorAll('.window-main-ui');
			var i=0;
			var timer = setInterval(()=>{
				if(!windows[i]){
					clearInterval(timer);
					return;
				}
				windows[i].classList.add('active');
				i++;
			},500);
		});

		obserable.on('showSeeWhatMask',()=>{
			this.setState({
				visiable:true
			});
			setTimeout(()=>{
				this.setState({
					visiable:false
				});
				this.currentPerson = obserable.trigger({type:'getCurrentPerson'});
				this.currentPerson.classList.add('fly-bottom');	
				obserable.trigger({type:"openWindow"});
			},2000);
		});


	}

}
export default FlyPublicComponent(SeeWhatApp);