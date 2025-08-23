import React, { useState } from 'react';
import Send from '../scripts/sendEmail';

function MyContactMe() {
    const [inputName, setInputName] = useState("Your Name");
    const [inputEmail, setInputEmail] = useState("Your Email");
    const [inputMessage, setInputMessage] = useState("Your Message to Me");
    const handleNameChange = (e) => {
        setInputName(e.target.value);
    };
    const handleEmailChange = (e) => {
        setInputEmail(e.target.value);
    };
    const handleMessageChange = (e) => {
        setInputMessage(e.target.value);
    };
    return <>
        <div>
            <h1>Contact Me</h1>
            <form>
                <div id="flex-container">
                    <input type="text" id="input-name-box" name="input-name-box" placeholder={inputName} onChange={handleNameChange}></input>
                    <input type="text" id="input-email-box" name="input-email-box" placeholder={inputEmail} onChange={handleEmailChange}></input>
                </div>
                <br></br>
                <div>
                    <input type="text" id="input-message-box" name="input-message-contact" placeholder={inputMessage} onChange={handleMessageChange}></input>
                </div>
                <br></br>
                <button id="send-message-button" type="button" onClick={Send}>Send Message</button>
            </form>
        </div>
    </>
}

export default MyContactMe;
