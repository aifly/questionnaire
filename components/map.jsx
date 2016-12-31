import React, { Component } from 'react';
import {FlyPublicComponent} from './public.jsx';
import Mask from './mask.jsx';
import './css/map.css'
import $ from 'jquery';
import Parabola from '../lib/parabola';

class MapApp extends Component {
	constructor(props) {
	  super(props);
	 window.duration = 5000;
	  this.state = {
	  	visiable:null
	  };
	  this.viewWidth = document.documentElement.clientWidth;
	  this.viewHeight =document.documentElement.clientHeight;

	}
	render() {
		let style = {
				background:'url(./assets/images/bg2.png) no-repeat center top',
				backgroundSize:'cover'
		};
		let img = <div className='info'>
			<img src='./assets/images/wheresee.png'/>
		</div>
		return (
			<div className='map-main-ui' style={style} onTouchTap={this.closeMask.bind(this)}>

				<div className='map-cloud'><img src='./assets/images/cloud.png' /></div>
				<div className='map-map'><img className={this.viewWidth / this.height > 320/568?'':'active'} src='./assets/images/map.png' /></div>
				<div className='map-tk map-z' data-text='太空'><img src='./assets/images/tk.png'/></div>
				<div  className='map-yz map-z'  data-text='亚洲'><img src='./assets/images/yz.png'/></div>
				<div  data-text='欧洲' className='map-oz  map-z'><img src='./assets/images/oz.png'/></div>
				<div  data-text='南美洲' className=' map-z map-nmz'><img src='./assets/images/nmz.png'/></div>
				<div  data-text='非洲' className=' map-z map-fz'><img src='./assets/images/fz.png'/></div>
				<div  data-text='大洋洲' className=' map-z map-dyz'><img src='./assets/images/dyz.png'/></div>
				<div  data-text='北美洲' className=' map-z map-bmz'><img src='./assets/images/bmz.png'/></div>
				<div  data-text='南极洲' className=' map-z map-njz'><img src='./assets/images/njz.png'/></div>
				<div  data-text='海底' className=' map-z map-hd'><img src='./assets/images/hd.png'/></div>
				<Mask img={img} className={this.state.visiable?'show':''}></Mask>
				<div className='news'><img src='./assets/images/news.png'/></div>
			</div>
		);
	}

	closeMask(e){
		let {obserable} = this.props;
		if(this.state.visiable === true){//关闭遮罩层
			this.setState({
				visiable:false
			});
			
			this.currentPerson = obserable.trigger({type:'getCurrentPerson'});
			this.currentPerson.classList.add('fly-bottom');	

		}else{
			if(this.state.visiable === null){
				return;
			}
			this.state.visiable = null;
			if(e.target.nodeName === 'IMG' && e.target.parentNode.classList.contains('map-z')|| e.target.classList.contains('map-z')){
				var target  = e.target;
				if(target.nodeName === 'IMG'){
					target=target.parentNode;
				}
				var s= this;

				var text= target.getAttribute('data-text');
				this.currentPerson.data = this.currentPerson.data || [];
				this.currentPerson.data.push(text);

				target.style.zIndex = 105;
				//


				this.bool = new Parabola({
		            el: target,
		            offset: [s.viewWidth-s.currentPerson.offsetWidth - target.offsetLeft, (s.viewHeight - s.currentPerson.offsetHeight) - target.offsetTop ],
		            curvature: 0.01,
		            duration: 800,
		            callback:function(){
		                // alert("完成后回调")
		        		target.classList.add('hide');
		        		s.currentPerson.classList.remove('fly-bottom');  
		        		obserable.trigger({type:'doNext'});

		        		setTimeout(()=>{
		        			obserable.trigger({
		        				type:"showSeeWhatMask"
		        			})
		        		},5000);
		            },
		            stepCallback:function(x,y){

		            }
		        });

		        this.bool.start();


				/*alert(this.currentPerson.offsetLeft+',')

				

		        */




			}	
		}
		
	}

	componentDidMount() {
		let {obserable} = this.props;
		obserable.on('showMapMask',()=>{
			this.setState({
				visiable:true
			});
			setTimeout(()=>{
				this.setState({
					visiable:false
				});
				this.currentPerson = obserable.trigger({type:'getCurrentPerson'});
				this.currentPerson.classList.add('fly-bottom');	
			},2000);



		});
	}
}
export default FlyPublicComponent(MapApp);