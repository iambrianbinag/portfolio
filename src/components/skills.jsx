import React from "react";
import html5 from "../img/logo-html5.png";
import css3 from "../img/logo-css3.png";
import javascript from "../img/logo-javascript.png";
import bootstrap from "../img/logo-bootstrap.png";
import jquery from "../img/logo-jquery.png";
import react from "../img/logo-react.png";
import php from "../img/logo-php.png";
import laravel from "../img/logo-laravel.png";
import mysql from "../img/logo-mysql.png";
import csharp from "../img/logo-csharp.png";
import java from "../img/logo-java.png";
import ScrollAnimation from "react-animate-on-scroll";

const Skills = () => {
  return (
    <div
      className="elegant-color-dark white-text text-center pt-5 pb-5"
      id="skills"
    >
      <ScrollAnimation animateIn="fadeIn" animateOnce>
        <h2 className="mt-3 mb-4">
          <strong>KNOWLEDGE</strong>
        </h2>
        <div className="d-flex flex-wrap justify-content-center grey-text pb-5">
          <div className="rounded bg-white m-1 p-1">
            <img src={html5} alt="HTML" className="box-picture" />
            <div className="logo-description">HTML</div>
          </div>
          <div className="rounded bg-white m-1 p-1">
            <img src={css3} alt="CSS" className="box-picture" />
            <div className="logo-description">CSS3</div>
          </div>
          <div className="rounded bg-white m-1 p-1">
            <img src={javascript} alt="Javascript" className="box-picture" />
            <div className="logo-description">Javascript</div>
          </div>
          <div className="rounded bg-white m-1 p-1">
            <img src={bootstrap} alt="Bootstrap" className="box-picture" />
            <div className="logo-description">Bootstrap</div>
          </div>
          <div className="rounded bg-white m-1 p-1">
            <img src={jquery} alt="jquery" className="box-picture" />
            <div className="logo-description">JQuery</div>
          </div>
          <div className="rounded bg-white m-1 p-1">
            <img src={react} alt="React" className="box-picture" />
            <div className="logo-description">React</div>
          </div>
          <div className="rounded bg-white m-1 p-1">
            <img src={php} alt="PHP" className="box-picture" />
            <div className="logo-description">PHP</div>
          </div>
          <div className="rounded bg-white m-1 p-1">
            <img src={laravel} alt="Laravel" className="box-picture" />
            <div className="logo-description">Laravel</div>
          </div>
          <div className="rounded bg-white m-1 p-1">
            <img src={mysql} alt="MySQL" className="box-picture" />
            <div className="logo-description">MySQL</div>
          </div>
          <div className="rounded bg-white m-1 p-1">
            <img src={csharp} alt="C#" className="box-picture" />
            <div className="logo-description">C#</div>
          </div>
          <div className="rounded bg-white m-1 p-1">
            <img src={java} alt="Java" className="box-picture" />
            <div className="logo-description">Java</div>
          </div>
        </div>
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeIn" animateOnce>
        <h2 className="mb-4 mt-5 p-1">
          <strong>PREFERRED SKILLS</strong>
        </h2>
        <div className="d-flex flex-wrap justify-content-center grey-text pb-5">
          <div className="rounded bg-white m-1 p-1">
            <img src={html5} alt="HTML" className="box-picture" />
            <div className="logo-description">HTML</div>
          </div>
          <div className="rounded bg-white m-1 p-1">
            <img src={css3} alt="CSS" className="box-picture" />
            <div className="logo-description">CSS3</div>
          </div>
          <div className="rounded bg-white m-1 p-1">
            <img src={javascript} alt="Javascript" className="box-picture" />
            <div className="logo-description">Javascript</div>
          </div>
          <div className="rounded bg-white m-1 p-1">
            <img src={bootstrap} alt="Bootstrap" className="box-picture" />
            <div className="logo-description">Bootstrap</div>
          </div>
          <div className="rounded bg-white m-1 p-1">
            <img src={react} alt="React" className="box-picture" />
            <div className="logo-description">React</div>
          </div>
          <div className="rounded bg-white m-1 p-1">
            <img src={laravel} alt="Laravel" className="box-picture" />
            <div className="logo-description">Laravel</div>
          </div>
        </div>
      </ScrollAnimation>
    </div>
  );
};

export default Skills;
