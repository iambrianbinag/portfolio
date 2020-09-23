import React from "react";
import { MDBBtn, MDBIcon } from "mdbreact";

const Footer = () => {
  return (
    <div className="fixed-bottom d-flex justify-content-center elegant-color">
      <MDBBtn outline color="white" size="sm">
        <MDBIcon icon="download" className="mr-1" /> Download My CV
      </MDBBtn>
    </div>
  );
};

export default Footer;
