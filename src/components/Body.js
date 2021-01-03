import React from "react";
import "../components/body.scss";

export default function Body() {

  return (
    <div className = "body" >
      {/* Start of Body  */}
      <h3 className = "name" id = "about"> Min Goo Jo </h3> 
      <h4 className = "title"> Full Stack Developer </h4>
      <h5 className = "aboutMe"> 
        I enjoy solving problems and learning new ways to approach challenging projects. 
        With serious passion for developing fast, intuitive, dynamic apps, I love utilizing
        all full stack development tools available to provide the best user experience.
      </h5>
      <img className = "body__profileImage" src = "../../images/mgj.jpeg" alt = "MGJ"/>

      {/* List of Skills */}
      <h4 className = "bodyTitle"> Skills </h4> 
      <div className = "body__language">
        <h5 className = "language"> CSS </h5> 
          <img className = "body__language--item" src = "../images/css3.png" alt = "css3" />
          <img className = "body__language--item" src = "../images/sass.png" alt = "sass" />
          <img className = "body__language--item" src = "../images/bootstrap.png" alt = "bootstrap" />
        <h5 className = "language"> Javascript </h5> 
          <img className = "body__language--item" src = "../images/ajax.jpg" alt = "ajax"/>
          <img className = "body__language--item" src = "../images/logo192.png" alt = "react"/>
          <img className = "body__language--item" src = "../images/nodejs.png" alt = "nodejs" />
          <img className = "body__language--item"  src="../images/jquery.jpg" alt = "jquery"/>
          <img className = "body__language--item"  src="../images/maps.png" alt = "maps"/>
        <h5 className = "language"> Backend </h5> 
          <img className = "body__language--item"  src="../images/psql.png" alt = "psql"/>
          <img className = "body__language--item"  src="../images/ruby.png" alt = "ruby"/>
          <img className = "body__language--item"  src="../images/php.png" alt = "php"/>
        <h5 className = "language"> Testing </h5> 
          <img className = "body__language--item"  src="../images/eslint.svg" alt = "eslint"/>
          <img className = "body__language--item"  src="../images/mocha.png" alt = "mocha"/>
          <img className = "body__language--item"  src="../images/chai.png" alt = "chai"/>
          <img className = "body__language--item"  src="../images/jest.svg" alt = "jest"/>
          <img className = "body__language--item"  src="../images/cypress.png" alt = "cypress"/>
          <img className = "body__language--item"  src="../images/storybook.png" alt = "storybook"/>
      </div>

      {/* List of Projects */}
      <div id = "project">
        <h4 className = "bodyTitle" > Projects </h4> 
        <div className = "project" >
          <div className = "project__box"> 
            <h3 className = "project__box--name"> TinyApp </h3> 
            <img className = "project__item" src = "images/tinyapp.png" alt = "tinyapp"/> 
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
            <img className = "project__item" src = "images/scheduler.png" alt = "scheduler"/> 
            <p className = "project__box--context">
              Scheduler is a react application that allows users to book and cancel interviews. 
              It combines a concise API with a WebSocket server to build a realtime experience.
            </p> 
            <a className = "project__box--link" href="https://github.com/jmgtheworld/scheduler" target = "_blank" rel="noreferrer">  
            Visit Github Repo {`>`}
            </a> 
          </div>

          <div className = "project__box"> 
            <h3 className = "project__box--name"> Wiki-Map </h3> 
            <img className = "project__item" src = "images/wikiMap.png" alt = "wikiMap"/>
            <p className = "project__box--context">
              A web app that allows users to collaboratively create maps which list multiple "points". 
            </p> 
            <a className = "project__box--link" href="https://github.com/audrey-audrey/wiki-map" target = "_blank" rel="noreferrer"> 
            Visit Github Repo {`>`}
            </a> 
          </div>

        </div>
      </div>
    </div>
  )
      
}