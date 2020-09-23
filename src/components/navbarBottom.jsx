import React from "react";
import { MDBBtn, MDBIcon } from "mdbreact";
import myCurriculumVitae from "../files/Binag_CV.pdf";

const Footer = () => {
  return (
    <div className="fixed-bottom d-flex justify-content-center elegant-color">
      <a href={myCurriculumVitae} download>
        <MDBBtn outline color="white" size="sm">
          <MDBIcon icon="download" className="mr-1" /> Download My CV
        </MDBBtn>
      </a>
    </div>
  );
};

export default Footer;
