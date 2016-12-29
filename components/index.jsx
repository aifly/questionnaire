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
				<div className="i-2017" ref='i-2017'><img src="./assets/images/2017.png"/></div>
				<div className="i-rug" ref='i-rug'><img src="./assets/images/motan.png" alt=""/></div>
				<div className="i-text" ref='i-text'>请选择性别</div>
			</div>
		);
	}
	componentDidMount() {
		setTimeout(()=>{
			this.refs['i-rug'].classList.add('active');
			this.refs['i-rug'].addEventListener('webkitTransitionEnd',()=>{

					this.refs['i-2017'].classList.add('active');	

					this.refs['i-2017'].addEventListener('webkitTransitionEnd',()=>{
							var person = document.querySelectorAll('.person');
							person[0].classList.add('active');
							person[1].classList.add('active');
							this.refs['i-text'].classList.add('active');

					});
			})
		},10);
	}
}
export default FlyPublicComponent(IndexApp);