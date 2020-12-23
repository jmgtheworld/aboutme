import React, { useState } from 'react';

import "../components/body.scss";

const axios = require('axios');

export default function Contact() {
  const [state, setState] = useState({
    name: '',
    email: '',
    message: ''
  })

  const setName = name => {
    setState({...state, name})
  }

  const setEmail = email => {
    setState({...state, email})
  }

  const setMessage = message => {
    setState({...state, message})
  }

  const resetForm = () => {
    setState({
      name: '',
      email: '',
      message: ''
    })
  }

  const handleSubmit = e => {
    e.preventDefault();
    axios({
      method: "POST", 
      url:"http://localhost:3002/send", 
      data: state
    }).then((response)=>{
      if (response.data.status === 'success') {
        alert("Message Sent."); 
        resetForm()
      } else if (response.data.status === 'fail') {
        alert("Message failed to send.")
      }
    })
  }

  return(
    <form className = "contact" onSubmit={handleSubmit.bind(this)} method="POST">
      <h3 id = "contact" > Contact </h3>
      <input type="text" className="form-control" id="name" placeholder = "name" value={state.name} 
        onChange= { event => setName(event.target.value)} />
      <input type="email" className="form-control" id="email" placeholder = "email" value={state.email} 
        onChange= { event => setEmail(event.target.value)}  />
      <textarea className="form-control" id="message" placeholder = "message" value={state.message} 
        onChange= { event => setMessage(event.target.value)}  />
      <button type="submit" className="submit">Submit</button>
    </form>
  );

}