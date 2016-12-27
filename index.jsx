import './assets/css/index.css';

import  React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import IndexApp from './components/index.jsx';
import Obserable from './lib/obserable';
var obserable = new Obserable();
injectTapEventPlugin();

class App extends React.Component{
    constructor(option){
        super(...option);
        this.state = {
            
        }
    }

    componentWillMount() {
				
    }

    render(){
        
        let data ={
            obserable
        }
        return <div>
            <IndexApp {...data}></IndexApp>
        </div>
    }


}

ReactDOM.render(<App></App>,document.getElementById('fly-main'));