import {Link} from 'react-router-dom'
import React from 'react';
import { useState, useEffect } from 'react';
import ReactDOM from "react-dom/client";
import runCommand from '../scripts/commands.js';
import { COMMAND_LIST } from '../constants.js';
import TestComponent from '../components/TestComponent.js';

function CommandLine() {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };
  
    const handleSubmit = (event) => {
        event.preventDefault();
        setInputValue(event.target.value);
        handleFormSubmit(inputValue); 
    };
  
    const handleFormSubmit = (value) => {
        //check if input command is valid
        let cmdElement = document.getElementById("rendered-output");
        if (COMMAND_LIST.includes(value)) {
            const targetDiv = document.getElementById("command-line-output");
            if (targetDiv) {
                const root = ReactDOM.createRoot(targetDiv);
                root.render(<TestComponent />);
            }
        }
        else {
            cmdElement.innerHTML = `<h4 style="color:tomato;">zsh: command not found: ${value}</h4>`;
        }
    };

    return <>
        <div>
            <h4>
                Command Documentation:
                &nbsp;
                <Link to="/documentation" target="_blank" rel="noopener noreferrer">here</Link>
            </h4>
        </div>
        <div id="flex-container-cmd">
            <div>
                <h4>
                    hacker123@your-computer %
                </h4>
            </div>
            <div id="flex-item-cmd">
                <h4>
                    <form onSubmit={handleSubmit} id="command-form" >
                        <input onChange={handleChange} class="mock-command-line"></input>
                    </form>
                </h4>
            </div>
        </div>
        <div id="command-line-output">
            <h4 id="rendered-output"></h4>
        </div>
    </>
}

export default CommandLine;