import { useState } from "react";
import emailjs from "emailjs-com";
import { SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY } from "../constants";

function Send() {

    const name = String(document.getElementById("input-name-contact").value);
    const email = String(document.getElementById("input-email-contact").value);
    const message = String(document.getElementById("message-item").value);

    var templateParams = {
        name: name,
        email: email,
        message: message
    };

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY).then(
        (response) => {
          alert("Sent message to Leonardo de Farias");
          console.log('SUCCESS!', response.status, response.text);
        },
        (error) => {
          alert("Message was unfortunately NOT sent to Leonardo de Farias");
          console.log('FAILED...', error);
        },
      );

};

export default Send;
