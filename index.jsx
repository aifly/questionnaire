import './assets/css/index.css';

import  React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import IndexApp from './components/index.jsx';
import MapApp from './components/map.jsx';
import SeeWhat from './components/seewhat.jsx';
import SeeByApp from './components/seeby.jsx';
import Obserable from './lib/obserable';
var obserable = new Obserable();
injectTapEventPlugin();

class App extends React.Component{
    constructor(option){
        super(...option);
        this.state = {
            iNow:0
        }
        this.height = document.documentElement.clientHeight;
    }

    componentWillMount() {
        document.getElementsByTagName('html')[0].style.fontSize = document.documentElement.clientWidth / 10 + 'px';
        if (!Array.from) {
            Array.from = (c)=> {
                return Array.prototype.slice.call(c);
            }
        }
    }

    render(){
        
        let data ={
            obserable
        }
        return <div className='main' ref='main' onTouchTap={this.choosePerson.bind(this)}>
            <div className="index-boy person"><img src="./assets/images/boy.png" data-src='./assets/images/boy1.png' alt=""/></div>
            <div className="index-girl person" ><img src="./assets/images/girl.png" data-src='./assets/images/girl1.png' alt=""/></div>
            <ul className="index-main-C" ref='index-main-C' style={{WebkitTransform:'translate3d(0,'+(-this.state.iNow*this.height)+'px,0)'}}>
                <li><IndexApp {...data}></IndexApp></li>
                <li><MapApp {...data}></MapApp></li>
                <li><SeeWhat {...data}></SeeWhat></li>
                <li><SeeByApp {...data}></SeeByApp></li>
            </ul>
        </div>
    }
    componentDidMount() {
        var height = this.height;
        this.refs['main'].style.height = height + 'px';
        Array.from(this.refs['index-main-C'].children).map((item)=>{
            item.style.height = height + 'px';
        });
        this.refs['index-main-C'].style.height = this.refs['index-main-C'].children.length * height+'px';
    }
    choosePerson(e){

        if(e.target.nodeName === "IMG" && e.target.parentNode.classList.contains('person')){
            e.target.src=e.target.getAttribute('data-src');
            this.setState({
                iNow:this.state.iNow+1
            })
        }

    }

}

ReactDOM.render(<App></App>,document.getElementById('fly-main'));

