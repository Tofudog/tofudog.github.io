import "./../styles/ContactMe.css";

function ContactMe() {
    return <>
        <div>
            <h3>Keep in touch!</h3>
            <div class="flex-container-contact">
                <input type="text" id="fname" name="fname" value="Your Name:"></input>
                <input type="text" id="fname" name="fname" value="Your Email"></input>
            </div>
            <div>
                <input id="message-item" type="text" name="fname" value="Your Message"></input>
            </div>
            <button id="send-message-button">Send Message</button>
        </div>
    </>
}

export default ContactMe;