import {Link} from 'react-router-dom'
import React from 'react';
import { useState } from 'react';
import ReactDOM from "react-dom/client";
import { COMMAND_MAP } from '../constants.js';

import "./../styles/globals.css";
import "./../styles/HomeTerminal.css";

function CommandLine() {
    const [inputValue, setInputValue] = useState('');
    //const [root, setRoot] = useState(null);

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
        var newValue = value;
        if (value === undefined) {
            newValue = "";
        }
        if (COMMAND_MAP.has(newValue)) {
            const targetDiv = document.getElementById("command-line-output");
            if (targetDiv) {
                //setRoot(ReactDOM.createRoot(targetDiv));
                const root = ReactDOM.createRoot(targetDiv);
                const cmdComponent = COMMAND_MAP.get(newValue);
                root.render(cmdComponent);
            }
        }
        else {
            let cmdElement = document.getElementById("rendered-output");
            cmdElement.innerHTML = `<h4 style="color:tomato;">zsh: command not found: ${newValue}</h4>`;
        }
        document.getElementById("mock-command-line-id").value = "";
    };

    return <>
        <div id="terminal-form">
            <br></br><br></br>
            <div class="vertical-section">
                <p>Welcome to the Leoterminal</p>
                <p>Type "<u>help</u>" to run commands and learn more about me</p>
                <div id="flex-container-cmd">
                    <div>
                        <p>hacker123@your-computer %</p>
                    </div>
                    <div id="flex-item-cmd">
                        <p>
                            <form onSubmit={handleSubmit} id="command-form" >
                                <input placeholder="type a command and hit enter" onChange={handleChange} class="mock-command-line" id="mock-command-line-id"></input>
                            </form>
                        </p>
                    </div>
                </div>
                <div id="command-line-output">
                    <h4 id="rendered-output"></h4>
                </div>
            </div>
        </div>
    </>
}

export default CommandLine;