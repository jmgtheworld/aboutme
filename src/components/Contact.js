import React, { useState } from 'react';
import emailjs from 'emailjs-com';

import "../components/contact.scss";

export default function Contact() {

  const [successMessage, setsuccessMessage] = useState("");
  const [errorMessageName, seterrorMessageName] = useState("");
  const [errorMessageEmail, seterrorMessageEmail] = useState("");
  const [errorMessageContent, seterrorMessageContent] = useState("");

  function sendEmail(e) {
    e.preventDefault();
    if (e.target.name.value && e.target.email.value && e.target.message.value) {
      emailjs.sendForm('service_9zz0gmd', 'template_n7qip5f', e.target, 'user_NRT8Q5KwxxO1ERzvVHXFu')
        .then((result) => {
            console.log(result);
        }, (error) => {
            console.log(error);
        });
        setsuccessMessage("Email sent successfully!")
        e.target.reset();
    } 
  }
  
  function validateName(name) {
    if (!name) {
      seterrorMessageName("Name cannot be blank");
      return false;
    } else {
      seterrorMessageName("");
      return true;
    }
  }

  function validateEmail (email) {
    if (!(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))){
      seterrorMessageEmail("Email format is invalid");
      return false;
    } else {
      seterrorMessageEmail("");
      return true;
    }
  }

  function validateMessage(message) {
    if (!message) {
      seterrorMessageContent("Your Message is blank!");
      return false;
    } else {
      seterrorMessageContent("");
      return true;
    }
  }

  return(
    <div className = "contact" id = "contact">
      <h4 className = "bodyTitle" id = "contactTitle"> Contact </h4> 
      <form onSubmit = {sendEmail} className = "contact__form">
        <input id = "name" name = "name" type = "text" placeholder = "Your Name" onBlur = {(e)=> validateName(e.target.value)} /> 
        <div id = "errorMessage"> {errorMessageName} </div>
        <input id = "email" name = "email" type = "text" placeholder = "Your Email" onBlur = {(e)=> validateEmail(e.target.value)}/> 
        <div id = "errorMessage"> {errorMessageEmail} </div>
        <textarea id = "message" name = "message" type = "text" placeholder = "Your Message" onBlur = {(e)=> validateMessage(e.target.value)}/> 
        <div id = "errorMessage"> {errorMessageContent} </div>
        <div id = "stateMessage">
          <div id = "successMessage"> {successMessage} </div> 
        </div>
        <button className = "submit" type = "submit"> Submit </button>
      </form>
    </div> 
  );

}