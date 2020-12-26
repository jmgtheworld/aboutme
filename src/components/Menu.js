import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFutbol } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-scroll'

import "../components/Menu.scss";

export default function Menu() {

  const element = <FontAwesomeIcon icon = {faFutbol} />

  return (
      <li className = "Menu"> 
      <p className = "Menu--image"> {element} </p>
      <Link to = "about" spy = {true} smooth = {true} > 
        <h2 className = "Menu--item" > About Me </h2>
      </Link>
      <Link to = "project" spy = {true} smooth = {true} > 
        <h2 className = "Menu--item" > Projects </h2>
      </Link>
      <Link to = "contact" spy = {true} smooth = {true} > 
        <h2 className = "Menu--item" > Contact </h2>
      </Link>
      </li>
  )
}