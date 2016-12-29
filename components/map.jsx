import React, { Component } from 'react';
import {FlyPublicComponent} from './public.jsx';
import './css/map.css'

class MapApp extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {};
	  this.viewWidth = document.documentElement.clientWidth;
	  this.viewHeight =document.documentElement.clientHeight;

	}
	render() {
		let style = {
				background:'url(./assets/images/bg2.png) no-repeat center',
				backgroundSize:'cover'
		};
		return (
			<div className='map-main-ui' style={style}>
				<div className='map-cloud'><img src='./assets/images/cloud.png' /></div>
				<div className='map-map'><img className={this.viewWidth / this.height > 320/568?'':'active'} src='./assets/images/map.png' /></div>
				<div className='map-tk'><img src='./assets/images/tk.png'/></div>
				<div  className='map-yz map-z'><img src='./assets/images/yz.png'/></div>
				<div  className='map-oz  map-z'><img src='./assets/images/oz.png'/></div>
				<div  className=' map-z map-nmz'><img src='./assets/images/nmz.png'/></div>
				<div  className=' map-z map-fz'><img src='./assets/images/fz.png'/></div>
				<div  className=' map-z map-dyz'><img src='./assets/images/dyz.png'/></div>
				<div  className=' map-z map-bmz'><img src='./assets/images/bmz.png'/></div>
				<div  className=' map-z map-njz'><img src='./assets/images/njz.png'/></div>
				<div  className=' map-z map-hd'><img src='./assets/images/hd.png'/></div>
			</div>
		);
	}
	componentDidMount() {
		
	}
}
export default FlyPublicComponent(MapApp);