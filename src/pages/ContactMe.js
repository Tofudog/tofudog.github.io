import React, { useState } from 'react';
import Send from '../scripts/sendEmail';

import "./../styles/ContactMe.css";

function ContactMe() {
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
            <h3>Keep in touch!</h3>
            <form>
                <div class="flex-container-contact">
                    <input type="text" id="input-name-contact" name="fname" value={inputName} onChange={handleNameChange}></input>
                    <input type="text" id="input-email-contact" name="fname" value={inputEmail} onChange={handleEmailChange}></input>
                </div>
                <div>
                    <input type="text" id="message-item" name="input-message-contact" value={inputMessage} onChange={handleMessageChange}></input>
                </div>
                <button id="send-message-button" type="button" onClick={Send}>Send Message</button>
            </form>
        </div>
    </>
}

export default ContactMe;