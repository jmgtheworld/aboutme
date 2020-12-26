import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright } from '@fortawesome/free-solid-svg-icons'
import "../components/footer.scss";


export default function Footer() {

  const element = <FontAwesomeIcon icon = {faCopyright} />

  return (
    <div className = "footer">
      <div className = "footer__social">
        <a href = "https://www.linkedin.com/in/min-goo-jo-3a4aa763/" target="_blank" rel="noreferrer"> 
          <img className = "footer__social--image" src = "images/linkedin.png" alt = "linkedIn" />
        </a> 
        <a href = "https://github.com/jmgtheworld" target="_blank" rel="noreferrer"> 
          <img className = "footer__social--image" src = "images/github.png" alt = "github" /> 
        </a>
      </div>
      <p className = "footer__item"> Min Goo Jo {element} 2020 </p>
    </div>
  )
}