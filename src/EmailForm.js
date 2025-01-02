//copied most of this from GPT
import React, { useState } from "react";
import emailjs from "emailjs-com";
import './Ask.css'
import {EMAIL_SERVICE_ID, EMAIL_TEMPLATE_ID, EMAIL_USER_ID} from "./CONSTANTS.js"

function EmailForm() {
  const [formData, setFormData] = useState({
    name: "Mark Zuckerberg",
    email: "facebook123987@gmail.com",
    message: "Your website is even better than mine!",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        {EMAIL_SERVICE_ID}, {EMAIL_TEMPLATE_ID},
        formData, {EMAIL_USER_ID}
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          alert("Email sent successfully!");
        },
        (error) => {
          console.error("Error sending email:", error.text);
          alert("Failed to send email.");
        }
      );
  };

  return (
    <>
      <form onSubmit={sendEmail}>
        <label>
        <h3>Name (required):</h3>
          <input type="text" name="name"
            value={formData.name} onChange={handleChange} required/>
        </label>

        <br></br> <br></br>

        <label>
          <h3>Email (required):</h3>
          <input type="email" name="email"
            value={formData.email} onChange={handleChange} required/>
        </label>

        <br></br> <br></br>

        <label>
        <h3>Message (optional):</h3>
          <textarea name="message"
            value={formData.message} onChange={handleChange} required/>
        </label>
        
        <br></br> <br></br>

        <button id="send_button" type="submit">Send Email</button>
      </form>
    </>
  );
};

export default EmailForm;
