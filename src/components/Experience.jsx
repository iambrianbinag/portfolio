import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { MDBContainer } from "mdbreact";

import taktylStudios from "../img/experience/logo-taktyl_studios.png";
import layBare from "../img/experience/logo-laybare.png";

const Experience = () => {
  return (
    <div
      className="pt-5 pb-5"
      id="experience"
    >
      <ScrollAnimation animateIn="fadeIn" animateOnce>
        <h2 className="mt-3 text-center">
          <strong>DEV EXPERIENCE</strong>
        </h2>
        <MDBContainer>
          {/* <!-- Timeline --> */}
          <ul className="stepper stepper-vertical colorful-timeline pl-0">
            <li>
              <span className="logo">
                <span className="circle elegant-color-dark z-depth-1-half">
                  <img src={layBare} 
                       alt="LayBare Waxing Philippines Inc." 
                       className="experience-company-logo"
                  />
                </span>
              </span>
              <div className="step-content z-depth-1 ml-xl-0 p-0 mt-2">
                <div className="timeline-header elegant-color-dark white-text p-3">
                  <h4>Backend Developer</h4>
                  <h5 className="m-0">LayBare Waxing Philippines Inc.</h5>
                </div>
                <p className="text-muted mt-4 px-4"><i className="far fa-clock" aria-hidden="true"></i> November 2020 - Current</p>
                <p className="mb-0 px-4 pb-4">
                  -  Developed and maintained the existing system of the company.
                  <br />
                  -  Refactored and optimized the curent codebase.
                  <br />
                  -  API development.
                  <br/><br/>
                  Tech stack: Vue and Laravel
                </p>
              </div>
            </li>
            <li className="timeline-inverted">
              <span className="logo">
                <span className="circle elegant-color-dark z-depth-1-half">
                  <img src={taktylStudios} 
                        alt="Taktyl Studios" 
                        className="experience-company-logo"
                  />
                </span>
              </span>
              <div className="step-content z-depth-1 ml-xl-0 p-0 mt-2">
                <div className="timeline-header elegant-color-dark white-text p-3">
                  <h4>Web Developer Intern</h4>
                  <h5 className="m-0">Taktyl Studios</h5>
                </div>
                <p className="text-muted mt-4 px-4"><i className="far fa-clock" aria-hidden="true"></i> October 2020 - October 2020</p>
                <p className="mb-0 px-4 pb-4">
                  - Developed a game web portal site for the company.
                  <br/>
                  - Developed the minor integration of frontend and backend.
                  <br/><br/>
                  Tech stack: HTML, CSS, JavaScript, Bootstrap, jQuery, Vue, and Laravel
                </p>
              </div>
            </li>
          </ul>
        </MDBContainer>
      </ScrollAnimation>
    </div>
  );
};

export default Experience;
