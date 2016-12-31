import React, { Component } from 'react';
import {FlyPublicComponent} from './public.jsx';
import WindowApp from './window.jsx';
import Mask from './mask.jsx';
import Parabola from '../lib/parabola';

import './css/seeby.css';

class SeeByApp extends Component {
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
				background:'url(./assets/images/bg4.png) no-repeat center bottom',
				backgroundSize:'cover'
		};
		var img = <div className='info'>
			<img src='./assets/images/seeby.png'/>
		</div>
	
		return (
			<div className='sb-main-ui' onTouchTap={this.closeMask.bind(this)} style={style}>
				<div className='sb-ico sb-hp' data-text='航拍'><img src='./assets/images/hp.png'/></div>
				<div className='sb-ico sb-vr' data-text='VR'><img src='./assets/images/vr.png'/></div>
				<div className='sb-ico sb-sp' data-text='视频'><img src='./assets/images/sp.png'/></div>
				<div className='sb-ico sb-tp' data-text='图片'><img src='./assets/images/tp.png'/></div>
				<div className='sb-ico sb-yp' data-text='音频'><img src='./assets/images/yp.png'/></div>
				<div className='sb-ico sb-wz' data-text='文字'><img src='./assets/images/wz.png'/></div>
				<Mask img={img} className={this.state.visiable?'show':''}></Mask>
				<div className='news'><img src='./assets/images/news.png'/></div>
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
			this.currentPerson.classList.add('fly-bottom1');
			//obserable.trigger({type:"openWindow"});

		}
		else{
			if(this.state.visiable === null){
				return;
			}
			this.state.visiable = null;
			if((e.target.nodeName === 'IMG' && e.target.parentNode.classList.contains('sb-ico')) || e.target.classList.contains('sb-ico')){
				var target= e.target;
				if(e.target.nodeName === 'IMG'){
					target = target.parentNode;
				}

				var s = this;

				this.currentPerson.data.push(target.getAttribute('data-text'));


				this.bool = new Parabola({
		            el: target,
		            offset: [ -target.offsetLeft, (s.viewHeight - s.currentPerson.offsetHeight) - target.offsetTop ],
		            curvature: 0.01,
		            duration: 800,
		            callback:function(){
		                // alert("完成后回调")
		        		target.classList.add('hide');
		        		s.currentPerson.classList.add('hide');  
		        		obserable.trigger({type:'doNext'});
		        		setTimeout(()=>{
		        			obserable.trigger({type:"displayResult",data:s.currentPerson.data});
		        		},window.doration);
		            },
		            stepCallback:function(x,y){

		            }
		        });

		        this.bool.start();


			}
		}

	}

	componentDidMount() {
		let {obserable} = this.props;
		obserable.on('showSeeByMask',()=>{
			this.setState({
				visiable:true
			});
			setTimeout(()=>{
				this.setState({
					visiable:false
				});
				this.currentPerson = obserable.trigger({type:'getCurrentPerson'});
				this.currentPerson.classList.add('fly-bottom1');	
			},2000);

		});
	}

}
export default FlyPublicComponent(SeeByApp);