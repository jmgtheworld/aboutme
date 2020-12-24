import React from "react";
import { Link } from 'react-scroll'

import "../components/Menu.scss";

export default function Menu() {
  return (
      <li className = "Menu"> 
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