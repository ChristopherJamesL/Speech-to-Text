import React, { Component } from 'react';
import Textfield from './Textfield.js';

import './App.css';


class App extends Component {
   
    

    listenCLick = () => {
        
    }

    render() {
        return (
            <div>
                <Textfield listenClick = {this.listenCLick} />
            </div>
        )
    }
}

export default App;