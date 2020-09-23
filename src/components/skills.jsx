import React from "react";

import html5 from "../img/logo-html5.png";
import css3 from "../img/logo-css3.png";
import javascript from "../img/logo-javascript.png";
import bootstrap from "../img/logo-bootstrap.png";
import jquery from "../img/logo-jquery.png";
import react from "../img/logo-react.png";
import materialUI from "../img/logo-material-ui.png";
import php from "../img/logo-php.png";
import laravel from "../img/logo-laravel.png";
import rest from "../img/logo-rest.png";
import mysql from "../img/logo-mysql.png";
import csharp from "../img/logo-csharp.png";
import java from "../img/logo-java.png";
import git from "../img/logo-git.png";
import postman from "../img/logo-postman.png";
import visualStudio from "../img/logo-visual-studio.png";
import visualStudioCode from "../img/logo-visual-studio-code.png";
import sublimeText from "../img/logo-sublime-text.png";

import ScrollAnimation from "react-animate-on-scroll";

const Skills = () => {
  return (
    <div
      className="elegant-color-dark white-text text-center pl-1 pr-1 pt-5 pb-5"
      id="skills"
    >
      <div className="skills-wrapper">
        <ScrollAnimation animateIn="fadeIn" animateOnce>
          <h2 className="mt-3 mb-4">
            <strong>SKILLS</strong>
          </h2>
          <div className="div-logo-group d-flex flex-wrap justify-content-center grey-text mb-3">
            <div className="div-category-frontend bg-white m-1 p-1">
              <div>Frontend</div>
            </div>
            <div className="div-category-backend bg-white m-1 p-1">
              <div>Backend</div>
            </div>
            <div className="div-category-tools bg-white m-1 p-1">
              <div>Development Tools</div>
            </div>
            <div className="div-category-others bg-white m-1 p-1">
              <div>Others</div>
            </div>
          </div>
          <hr className="bg-white" />
          <div className="div-logo-group d-flex flex-wrap justify-content-center grey-text mt-4 pb-5">
            <div className="div-category-frontend rounded bg-white m-1 p-1">
              <img src={html5} alt="HTML" className="box-picture" />
              <div className="logo-description">HTML</div>
            </div>
            <div className="div-category-frontend rounded bg-white m-1 p-1">
              <img src={css3} alt="CSS" className="box-picture" />
              <div className="logo-description">CSS3</div>
            </div>
            <div className="div-category-frontend rounded bg-white m-1 p-1">
              <img src={javascript} alt="Javascript" className="box-picture" />
              <div className="logo-description">JavaScript</div>
            </div>
            <div className="div-category-frontend rounded bg-white m-1 p-1">
              <img src={bootstrap} alt="Bootstrap" className="box-picture" />
              <div className="logo-description">Bootstrap</div>
            </div>
            <div className="div-category-frontend rounded bg-white m-1 p-1">
              <img src={jquery} alt="jquery" className="box-picture" />
              <div className="logo-description">jQuery</div>
            </div>
            <div className="div-category-frontend rounded bg-white m-1 p-1">
              <img src={react} alt="React" className="box-picture" />
              <div className="logo-description">React</div>
            </div>
            <div className="div-category-frontend rounded bg-white m-1 p-1">
              <img src={materialUI} alt="React" className="box-picture" />
              <div className="logo-description">Material UI</div>
            </div>
            <div className="div-category-backend rounded bg-white m-1 p-1">
              <img src={php} alt="PHP" className="box-picture" />
              <div className="logo-description">PHP</div>
            </div>
            <div className="div-category-backend rounded bg-white m-1 p-1">
              <img src={laravel} alt="Laravel" className="box-picture" />
              <div className="logo-description">Laravel</div>
            </div>
            <div className="div-category-backend rounded bg-white m-1 p-1">
              <img src={rest} alt="Laravel" className="box-picture" />
              <div className="logo-description">RESTful API</div>
            </div>
            <div className="div-category-backend rounded bg-white m-1 p-1">
              <img src={mysql} alt="MySQL" className="box-picture" />
              <div className="logo-description">MySQL</div>
            </div>
            <div className="div-category-others rounded bg-white m-1 p-1">
              <img src={csharp} alt="C#" className="box-picture" />
              <div className="logo-description">C#</div>
            </div>
            <div className="div-category-others rounded bg-white m-1 p-1">
              <img src={java} alt="Java" className="box-picture" />
              <div className="logo-description">Java</div>
            </div>
            <div className="div-category-tools rounded bg-white m-1 p-1">
              <img src={git} alt="Java" className="box-picture" />
              <div className="logo-description">Git</div>
            </div>
            <div className="div-category-tools rounded bg-white m-1 p-1">
              <img src={postman} alt="Java" className="box-picture" />
              <div className="logo-description">Postman</div>
            </div>
            <div className="div-category-tools rounded bg-white m-1 p-1">
              <img src={visualStudio} alt="Java" className="box-picture" />
              <div className="logo-description">VS</div>
            </div>
            <div className="div-category-tools rounded bg-white m-1 p-1">
              <img src={visualStudioCode} alt="Java" className="box-picture" />
              <div className="logo-description">VS Code</div>
            </div>
            <div className="div-category-tools rounded bg-white m-1 p-1">
              <img src={sublimeText} alt="Java" className="box-picture" />
              <div className="logo-description">Sublime Text</div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  );
};

export default Skills;
