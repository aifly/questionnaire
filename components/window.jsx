import React, { Component } from 'react';
import {FlyPublicComponent} from './public.jsx';
import './css/window.css'

class WindowApp extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {};
	
	}
	render() {
		let style = {
				backgroundSize:'cover'
		};
		return (
			<div className={'window-main-ui active '+ this.props.className} style={style}>
					{this.props.tag}
					<div className='window-img'>
							<div>
								<img src={this.props.img} />
							</div>
							<div className='w-curtain'></div>
					</div>
					<div className='window-line'>
							<img src='./assets/images/line.png'/> 
					</div>
			</div>
		);
	}
	componentDidMount() {
		
	}
}

export default FlyPublicComponent(WindowApp);