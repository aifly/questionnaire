import React, { Component } from 'react';
import {FlyPublicComponent} from './public.jsx';
import './css/index.css'

class IndexApp extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {};
	}
	render() {
		let style = {
				background:'url(./assets/images/bg1.jpg) no-repeat center',
				backgroundSize:'cover'
		};
		return (
			<div className='index-main-ui' style={style}>

			</div>
		);
	}
	componentDidMount() {
		
	}
}
export default FlyPublicComponent(IndexApp);