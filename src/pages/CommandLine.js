import {Link} from 'react-router-dom'
import { useState } from 'react';
import runCommand from '../scripts/commands.js';

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
        document.getElementById("bruh").innerHTML = `<h2>${value}</h2>`;
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
                <h4 id="bruh"></h4>
            </div>
        </div>
    </>
}

export default CommandLine;