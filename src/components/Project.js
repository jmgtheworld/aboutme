import React, { useRef, Fragment } from "react";
import "../components/project.scss";

export default function Project() {
  return (
     <Fragment> 
     <h4 className = "bodyTitle" > Projects </h4> 
     <div className = "project" >
      <div className = "project__box"> 
        <h3 className = "project__box--name"> TinyApp </h3> 
        <img className = "project__item" src = "tinyapp.png" alt = "tinyapp"/> 
        <p className = "project__box--context">
          TinyApp is a full stack web application built with Node and Express 
          that allows users to shorten long URLs (à la bit.ly).
        </p> 
        <a className = "project__box--link" href="https://github.com/jmgtheworld/tinyapp" target = "_blank" rel="noreferrer"> 
        Visit Github Repo {`>`} 
        </a> 
      </div>

      <div className = "project__box">  
        <h3 className = "project__box--name"> Scheduler </h3>
        <img className = "project__item" src = "scheduler.png" alt = "scheduler"/> 
        <p className = "project__box--context">
          Scheduler is a react application that allows users to book and cancel interviews. 
          It combines a concise API with a WebSocket server to build a realtime experience.
        </p> 
        <a className = "project__box--link" href="https://github.com/jmgtheworld/scheduler" target = "_blank" rel="noreferrer">  
        Visit Github Repo {`>`}
        </a> 
      </div>

      <div className = "project__box"> 
        <h3 className = "project__box--name"> Wiki-App </h3> 
        <img className = "project__item" src = "wikiMap.png" alt = "wikiMap"/>
        <p className = "project__box--context">
          A web app that allows users to collaboratively create maps which list multiple "points". 
        </p> 
        <a className = "project__box--link" href="https://github.com/audrey-audrey/wiki-map" target = "_blank" rel="noreferrer"> 
        Visit Github Repo {`>`}
        </a> 
      </div>
      
     </div>
     </Fragment> 
  )
}