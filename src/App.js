import React, { Component } from 'react';
import Textfield from './Textfield.js';
import recognizeMic from 'watson-speech/speech-to-text/recognize-microphone';

import './App.css';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
          stream: null,
          listening: false
      }
    }
    
      listenClick = () => {
        if (!this.state.listening) {
          const stream = recognizeMicrophone({
            access_token: 'iam',
            objectMode: true,
            format: false, // Let Watson handle the formatting
          });
    
          stream.on('data', data => {
            // Handle the streaming data
            console.log('Streaming data:', data);
          });
    
          stream.on('error', error => {
            // Handle errors
            console.error('Speech-to-text error:', error);
          });
    
          this.setState({ stream, listening: true });
        } else {
          this.state.stream.stop();
          this.setState({ stream: null, listening: false });
        }
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