import React, { Component } from 'react';
import Textfield from './Textfield.js';
import recognizeMic from 'watson-speech/speech-to-text/recognize-microphone';

import './App.css';


class App extends Component {
   constructor() {
    super()
    this.state = {}
   }
    

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