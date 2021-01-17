import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { MDBContainer } from "mdbreact";

const Experience = () => {
  return (
    <div
      className="pt-5 pb-5 text-center"
      id="experience"
    >
      <ScrollAnimation animateIn="fadeIn" animateOnce>
        <h2 className="mt-3 mb-4">
          <strong>DEV EXPERIENCE</strong>
        </h2>
        <MDBContainer>
          {/* <ScrollAnimation animateIn="fadeIn" animateOnce>
            <div className="mt-4">
              <h4><strong>Web Developer</strong></h4>
              <h5>LayBare Waxing Philippines Inc.</h5>
              <p>Nov 2020 - Current</p>
              <div className="blue-grey-text w-responsive mx-auto">
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci earum at aliquam fugit cupiditate explicabo facere eveniet quae pariatur dolore repellendus impedit, voluptate iste dicta accusantium nulla quaerat perferendis itaque?
                </p>
                <p>Tech stack: Vue and Laravel</p>
              </div>
            </div>
          </ScrollAnimation>
          <div className="w-responsive mx-auto">
            <hr/>
          </div> */}
          <ScrollAnimation animateIn="fadeIn" animateOnce>
            <div className="mt-4">
                <h4 ><strong>Web Developer Intern</strong></h4>
                <h5>Taktyl Studios</h5>
                <p>Oct 2020 - Oct 2020</p>
                <div className="blue-grey-text w-responsive mx-auto">
                  <p>
                    I developed a games portal site for the company wherein they used to showcase their games product to the possible clients. I also onboarded in <a href="http://siliconvalleyhq.com" rel="noopener noreferrer" target="_blank">Sillicon Valley HQ project</a> where I did the minor integration of frontend and backend part. 
                  </p>
                  <p>Tech stack: HTML, CSS, JavaScript, Bootstrap, jQuery, Vue, and Laravel</p>
                </div>
              </div>
          </ScrollAnimation>
        </MDBContainer>
      </ScrollAnimation>
    </div>
  );
};

export default Experience;
