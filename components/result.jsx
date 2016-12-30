import React from 'react';
import './css/result.css';


export default class ResultApp extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    	invite:'',
    	where:'北美洲',
    	show:false,
    	by:'图片',
    	what:'时政会议',
    	allUser:45,
    	men:14,
    	women:31,
    	maskIndex:-1
    }
  }
   r(m, n) {
        return (m + Math.random() * (n - m));
   }

  render() {
  	let style = {
		background:'url(./assets/images/bg5.png) no-repeat center top',
		backgroundSize:'cover'
	};
	let maskStyle= {
		background:'url(./assets/images/arron1.png) no-repeat center top',
		backgroundSize:'cover',
		zIndex:this.state.maskIndex
	}


	var allUser = this.r(50,80)|0;

	var man = this.r(25,allUser-10) | 0;
	var women = allUser - man;
	


    return (
      <div className='r-main-ui' style={style}>
      		<div className='r-mask' onTouchStart={()=>{this.setState({maskIndex:-1})}} style={maskStyle}></div>
      		<section className='r-title'>
      			<img src='./assets/images/title.png'/>
      			<span className={this.state.show?'active':''}>{this.state.where}</span>
      			<span className={this.state.show?'active':''}>{this.state.by}</span>
      			<span className={this.state.show?'active':''}>{this.state.what}</span>
      		</section>
      		<section className='r-result-content'>
      			<div className='wo'><img src='./assets/images/wo.png'/></div>
      			<div className='r-text'>居然有<span>{allUser}</span>位朋友与人有相同的想法哦！</div>
      			<div className='r-sex'>
      				<span>(</span>
      			    <span><img src='./assets/images/nan.png' /></span>
      			    <span>{man}位</span>
      			    <span>|</span>
      			    <span><img src='./assets/images/nv.png'/></span>
      			    <span>{women}位</span>
      			    <span>)</span>
      			 </div>

      			 <div className='r-sendfriend'>快发给朋友，看看他们的想法吧</div>

      			 <div className={'r-invite '+ this.state.invite} onTouchTap={this.openMask.bind(this)}>邀请朋友参与</div>
      		</section>
      		<section className={'r-tnk '+(this.state.show?'active':'')}>
      			<img src='./assets/images/tnk.png'/>
      		</section>
      </div>
    );
  }
  openMask(){
  	this.setState({
  		invite:'active'
  	});
  	setTimeout(()=>{
  		this.setState({
	  		invite:''
	  	});
	  	this.setState({
	  		maskIndex:1000
	  	})
  	},150)
  }
  componentDidMount() {
  	 let {obserable} = this.props;
  	 obserable.on('displayResult',(data)=>{
  	 	this.setState({
  	 		show:true,
  	 		where:data[0],
  	 		what:data[1],
  	 		by:data[2]
  	 	});

  	 	document.title =  '2017我希望在'+data[0]+'现场使用'+data[2]+'观看'+data[1]+'。你呢？';

  	 });
  }
}
