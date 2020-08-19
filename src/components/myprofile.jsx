import React from "react";
import Image from "../img/my-picture.jpg";
import ScrollAnimation from "react-animate-on-scroll";

const Myprofile = () => {
  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center text-center pt-5 pb-5"
      id="profile"
    >
      <ScrollAnimation animateIn="fadeIn" animateOnce>
        <h2 className="mt-3 mb-4">
          <strong> MY PROFILE</strong>
        </h2>

        <img src={Image} alt="Me" className="rounded-circle img-portrait" />
        <h3 className="mt-4">
          <strong>Brian Binag</strong>
        </h3>
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeIn" animateOnce>
        <h3 className="mt-4">
          <strong>Objective</strong>
        </h3>
        <p className="mt-2 p-1 w-50 blue-grey-text w-100">
          A goal getter, as well as a self-starter, striving to learn and hone
          my skills especially in web development
        </p>
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeIn" animateOnce>
        <h3 className="mt-4 p-1">
          <strong>Academic Qualification</strong>
        </h3>
        <p className="mt-2 blue-grey-text p-1">
          Studied Bachelor of Science in Information Technology <br />
          City of Malabon University <br />
          2016-2020
        </p>
      </ScrollAnimation>
    </div>
  );
};

export default Myprofile;
