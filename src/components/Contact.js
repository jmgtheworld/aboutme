import React from 'react';
import emailjs from 'emailjs-com';

import "../components/contact.scss";

export default function Contact() {

  let message = "";

  function sendEmail(e) {
    e.preventDefault();
    console.log(e.target)
    emailjs.sendForm('service_9zz0gmd', 'template_n7qip5f', e.target, 'user_NRT8Q5KwxxO1ERzvVHXFu')
      .then((result) => {
          console.log(result);
      }, (error) => {
          console.log(error);
      });
      e.target.reset();
      message = "Message sent!";
  }

  return(
    <div className = "contact" id = "contact">
    <h4 className = "bodyTitle" id = "contactTitle"> Contact </h4> 
    <form onSubmit = {sendEmail} className = "contact__form">
      <input id = "name" name = "name" type = "text" placeholder = "Your Name" /> 
      <input id = "email" name = "email" type = "text" placeholder = "Your Email" /> 
      <textarea id = "message" name = "message" type = "text" placeholder = "Your Message" /> 
      <button className = "submit" type = "submit"> Submit </button>
    </form>
  </div> 
  );

}