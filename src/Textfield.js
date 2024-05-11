import React from 'react';
import './Textfield.css';

const Textfield = ({ listenClick }) => {
    return (
    <div className='field'>
        <input type="text" id="textaroonie" placeholder='Enter text in the textaroonie'/>
        <button onClick={listenClick}>Talk</button>
    </div>
    )
}

export default Textfield;