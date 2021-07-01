import React from "react";
import "../components/body.scss";

export default function Body() {
  return (
    <div className="body">
      {/* Start of Body  */}
      <h3 className="name" id="about">
        {" "}
        Min Goo Jo{" "}
      </h3>
      <h4 className="title"> Full Stack Developer </h4>
      <h5 className="aboutMe">
        I enjoy solving problems and learning new ways to approach challenging
        projects. With serious passion for developing fast, intuitive, dynamic
        apps, I love utilizing all full stack development tools available to
        provide the best user experience.
      </h5>
      <img
        className="body__profileImage"
        src="../../images/mgj.jpeg"
        alt="MGJ"
      />

      {/* List of Skills */}
      <h4 className="bodyTitle"> Skills </h4>
      <div className="body__language">
        <h5 className="language"> Frontend </h5>

        <img
          className="body__language--item"
          src="../images/logo192.png"
          alt="react"
        />
        <img
          className="body__language--item"
          src="../images/redux.svg"
          alt="redux"
        />
        <img
          className="body__language--item"
          src="../images/angular.png"
          alt="angular"
        />
        <img
          className="body__language--item"
          src="../images/maps.png"
          alt="maps"
        />
        <img
          className="body__language--item"
          src="../images/nodejs.png"
          alt="nodejs"
        />
        <img
          className="body__language--item"
          src="../images/ajax.jpg"
          alt="ajax"
        />
        <img
          className="body__language--item"
          src="../images/jquery.png"
          alt="jquery"
        />
        <img
          className="body__language--item"
          src="../images/css3.png"
          alt="css3"
        />
        <img
          className="body__language--item"
          src="../images/sass.png"
          alt="sass"
        />
        <img
          className="body__language--item"
          src="../images/bootstrap.png"
          alt="bootstrap"
        />

        <h5 className="language"> Backend </h5>
        <img
          className="body__language--item"
          src="../images/psql.png"
          alt="psql"
        />
        <img
          className="body__language--item"
          src="../images/apollo.png"
          alt="apollographql"
        />
        <img
          className="body__language--item"
          src="../images/rails.png"
          alt="ruby"
        />
        <img
          className="body__language--item"
          src="../images/php.png"
          alt="php"
        />
        <img
          className="body__language--item"
          src="../images/flask.png"
          alt="flask"
        />
        <h5 className="language"> Testing </h5>
        <img
          className="body__language--item"
          src="../images/eslint.svg"
          alt="eslint"
        />
        <img
          className="body__language--item"
          src="../images/mocha.png"
          alt="mocha"
        />
        <img
          className="body__language--item"
          src="../images/chai.png"
          alt="chai"
        />
        <img
          className="body__language--item"
          src="../images/jest.svg"
          alt="jest"
        />
        <img
          className="body__language--item"
          src="../images/cypress.png"
          alt="cypress"
        />
        <img
          className="body__language--item"
          src="../images/storybook.png"
          alt="storybook"
        />
      </div>

      {/* List of Projects */}
      <div id="project">
        <h4 className="bodyTitle"> Projects </h4>
        <div className="project">
          <div className="project__box">
            <h3 className="project__box--name"> Rebu </h3>
            <img
              className="project__item"
              src="images/rebu.png"
              alt="tinyapp"
            />
            <p className="project__box--context">
              Designated Driving Service: Get others to drive your car after a
              night out.
            </p>
            <a
              className="project__box--link1"
              href="https://github.com/jmgtheworld/Rebu"
              target="_blank"
              rel="noreferrer"
            >
              Visit Github Repo {`>`}
            </a>
            <a
              className="project__box--link2"
              href="https://www.youtube.com/watch?v=OrW3bbwPvg0&feature=youtu.be&ab_channel=MGJ"
              target="_blank"
              rel="noreferrer"
            >
              Watch Live Demo {`>`}
            </a>
          </div>

          <div className="project__box">
            <h3 className="project__box--name"> Scheduler </h3>
            <img
              className="project__item"
              src="images/scheduler.png"
              alt="scheduler"
            />
            <p className="project__box--context">
              React application that allows users to book and cancel interviews.
            </p>
            <a
              className="project__box--link1"
              href="https://github.com/jmgtheworld/scheduler"
              target="_blank"
              rel="noreferrer"
            >
              Visit Github Repo {`>`}
            </a>
            <a
              className="project__box--link2"
              href="https://www.youtube.com/watch?v=HO4OvsK-MWQ&feature=youtu.be&ab_channel=MGJ"
              target="_blank"
              rel="noreferrer"
            >
              Watch Live Demo {`>`}
            </a>
          </div>

          <div className="project__box">
            <h3 className="project__box--name"> Jungle </h3>
            <img
              className="project__item"
              src="images/list_of_products.png"
              alt="wikiMap"
            />
            <p className="project__box--context">
              A mini e-commerce application built with Rails 4.2
            </p>
            <a
              className="project__box--link"
              href="https://github.com/jmgtheworld/jungle"
              target="_blank"
              rel="noreferrer"
            >
              Visit Github Repo {`>`}
            </a>
          </div>

          <div className="project__box">
            <h3 className="project__box--name"> SpaceX Stats </h3>
            <img
              className="project__item"
              src="images/spacex.png"
              alt="tinyapp"
            />
            <p className="project__box--context">
              View all the interesting facts about SpaceX - Built with Apollo
              GraphQL & SpaceX-API
            </p>
            <a
              className="project__box--link1"
              href="https://github.com/jmgtheworld/spaceX_launchStats"
              target="_blank"
              rel="noreferrer"
            >
              Visit Github Repo {`>`}
            </a>
            <a
              className="project__box--link2"
              href="https://www.youtube.com/watch?v=C_MdEKALY0k&feature=youtu.be&ab_channel=MGJ"
              target="_blank"
              rel="noreferrer"
            >
              Watch Live Demo {`>`}
            </a>
          </div>

          <div className="project__box">
            <h3 className="project__box--name"> The Dundies </h3>
            <img
              className="project__item"
              src="images/dundies.png"
              alt="tinyapp"
            />
            <p className="project__box--context">
              Search and nominate your favourtie movies and share between
              friends.
            </p>
            <a
              className="project__box--link"
              href="https://github.com/jmgtheworld/omdb"
              target="_blank"
              rel="noreferrer"
            >
              Visit Github Repo {`>`}
            </a>
          </div>

          <div className="project__box">
            <h3 className="project__box--name"> Wiki-Map </h3>
            <img
              className="project__item"
              src="images/wikiMap.png"
              alt="wikiMap"
            />
            <p className="project__box--context">
              A web app that allows users to collaboratively create maps which
              list multiple "points".
            </p>
            <a
              className="project__box--link1"
              href="https://github.com/audrey-audrey/wiki-map"
              target="_blank"
              rel="noreferrer"
            >
              Visit Github Repo {`>`}
            </a>
            <a
              className="project__box--link2"
              href="https://www.youtube.com/watch?v=pQOuR3MKOTs&feature=youtu.be&ab_channel=MGJ"
              target="_blank"
              rel="noreferrer"
            >
              Watch Live Demo {`>`}
            </a>
          </div>

          {/* <div className = "project__box"> 
            <h3 className = "project__box--name"> TinyApp </h3> 
            <img className = "project__item" src = "images/tinyapp.png" alt = "tinyapp"/> 
            <p className = "project__box--context">
              TinyApp is a full stack web application built with Node and Express 
              that allows users to shorten long URLs (à la bit.ly).
            </p> 
            <a className = "project__box--link" href="https://github.com/jmgtheworld/tinyapp" target = "_blank" rel="noreferrer"> 
            Visit Github Repo {`>`} 
            </a> 
          </div> */}

          {/* <div className = "project__box"> 
            <h3 className = "project__box--name"> Tweeter </h3> 
            <img className = "project__item" src = "images/tweeter.png" alt = "tweeter"/> 
            <p className = "project__box--context">
              Tweeter is a simple, single-page Twitter clone built with HTML, CSS, JS, 
              jQuery and AJAX on the client-side, and Node, Express and MongoDB on the server-side
            </p> 
            <a className = "project__box--link" href="https://github.com/jmgtheworld/tweeter" target = "_blank" rel="noreferrer"> 
            Visit Github Repo {`>`} 
            </a> 
          </div> */}
        </div>
      </div>
    </div>
  );
}
