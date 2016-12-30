import './assets/css/index.css';

import  React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import IndexApp from './components/index.jsx';
import MapApp from './components/map.jsx';
import SeeWhat from './components/seewhat.jsx';
import SeeByApp from './components/seeby.jsx';
import ResultApp from './components/result.jsx';
import Obserable from './lib/obserable';
var obserable = new Obserable();
injectTapEventPlugin();

class App extends React.Component{
    constructor(option){
        super(...option);
        this.state = {
            iNow:0,
        }
        this.height = document.documentElement.clientHeight;
        this.currentPerson = null;// 当前选择人物
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
            <div ref='boy' className={"index-boy person  "} data-index={0}><img src="./assets/images/boy.png" data-src='./assets/images/boy1.png' alt=""/></div>
            <div ref='girl' className="index-girl person  "  data-index={1}><img src="./assets/images/girl.png" data-src='./assets/images/girl1.png' alt=""/></div>
            <ul className="index-main-C" ref='index-main-C' style={{WebkitTransform:'translate3d(0,'+(-this.state.iNow*this.height)+'px,0)'}}>
                <li><IndexApp {...data}></IndexApp></li>
                <li><MapApp {...data}></MapApp></li>
                <li><SeeWhat {...data}></SeeWhat></li>
                <li><SeeByApp {...data}></SeeByApp></li>
                <li><ResultApp {...data}></ResultApp></li>
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

        obserable.on('getCurrentPerson',()=>{
            return this.currentPerson;
        })

        obserable.on('doNext',()=>{
            this.setState({
                iNow:this.state.iNow+1
            })
        })

    }
    choosePerson(e){

        this.click = this.click || 1;

        if(this.click !== 1){
            return;
        }
        
        if((e.target.nodeName === 'DIV' && e.target.classList.contains('person'))||(e.target.nodeName === "IMG" && e.target.parentNode.classList.contains('person'))){
            this.click = 2;
            var target = e.target;
            if(e.target.nodeName==='DIV'){
                target = e.target.children[0];
            }

            target.src=target.getAttribute('data-src');
            if(target.parentNode.getAttribute('data-index')*1 === 0){//选择的是男
                this.refs['girl'].classList.add('hide');
                this.currentPerson = this.refs['boy'];
                this.currentPerson.classname =  'boy-fly';

            }
            else{
                this.refs['boy'].classList.add('hide');  
                this.currentPerson = this.refs['girl'];
                this.currentPerson.classname = 'girl-fly';
            }



            setTimeout(()=>{
                this.setState({
                    iNow:this.state.iNow+1
                });
                setTimeout(()=>{
                    obserable.trigger({type:'showMapMask'});
                },window.duration);
                this.currentPerson.classList.add(this.currentPerson.classname);
            },1000)

            
        }

    }

}

ReactDOM.render(<App></App>,document.getElementById('fly-main'));

