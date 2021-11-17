import React from "react";
import { MDBBtn, MDBIcon } from "mdbreact";
import { myResumeLink } from "../resources/files";

const Footer = () => {
  return (
    <div className="fixed-bottom d-flex justify-content-center elegant-color">
      <a href={myResumeLink} target="_blank">
        <MDBBtn outline color="white" size="sm">
          <MDBIcon icon="download" className="mr-1" /> Download My Resume
        </MDBBtn>
      </a>
    </div>
  );
};

export default Footer;
