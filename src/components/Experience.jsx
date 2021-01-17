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
              <a href="">
                <span className="circle elegant-color-dark z-depth-1-half">
                  <img src={layBare} 
                       alt="LayBare Waxing Philippines Inc." 
                       className="experience-company-logo"
                  />
                </span>
              </a>
              <div className="step-content z-depth-1 ml-xl-0 p-0 mt-2">
                <div className="timeline-header elegant-color-dark white-text p-3">
                  <h4>Web Developer</h4>
                  <h5 className="m-0">LayBare Waxing Philippines Inc.</h5>
                </div>
                <p className="text-muted mt-4 px-4"><i className="far fa-clock" aria-hidden="true"></i> November 2020 - Current</p>
                <p className="mb-0 px-4 pb-4">
                  I develop and maintain the internal and external systems of the company
                  <br/><br/>
                  Tech stack: Vue and Laravel
                </p>
              </div>
            </li>
            <li className="timeline-inverted">
              <a href="">
                <span className="circle elegant-color-dark z-depth-1-half">
                  <img src={taktylStudios} 
                        alt="Taktyl Studios" 
                        className="experience-company-logo"
                  />
                </span>
              </a>
              <div className="step-content z-depth-1 ml-xl-0 p-0 mt-2">
                <div className="timeline-header elegant-color-dark white-text p-3">
                  <h4>Web Developer Intern</h4>
                  <h5 className="m-0">Taktyl Studios</h5>
                </div>
                <p className="text-muted mt-4 px-4"><i className="far fa-clock" aria-hidden="true"></i> October 2020 - October 2020</p>
                <p className="mb-0 px-4 pb-4">
                  I developed a game web portal site for the company wherein they used to showcase their game product to the possible clients. I also onboarded in <a href="http://siliconvalleyhq.com/" alt="SilliconValleyHQ" target="_blank" className="timeline-description-link" rel="noopener noreferrer">SilliconValleyHQ</a> project where I did the minor integration of frontend and backend part.
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
