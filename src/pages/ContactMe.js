import React, { useState } from 'react';

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
            <div class="flex-container-contact">
                <input type="text" id="fname" name="fname" value={inputName} onChange={handleNameChange}></input>
                <input type="text" id="fname" name="fname" value={inputEmail} onChange={handleEmailChange}></input>
            </div>
            <div>
                <input type="text" id="message-item" name="fname" value={inputMessage} onChange={handleMessageChange}></input>
            </div>
            <button id="send-message-button">Send Message</button>
        </div>
    </>
}

export default ContactMe;