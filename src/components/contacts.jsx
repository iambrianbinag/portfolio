import React from "react";
import { MDBContainer, MDBBtn, MDBIcon } from "mdbreact";
import ScrollAnimation from "react-animate-on-scroll";

const Contacts = () => {
  return (
    <div
      className="elegant-color-dark white-text text-center pt-5 pb-5"
      id="contacts"
    >
      <ScrollAnimation animateIn="fadeIn" animateOnce>
        <h2 className="mb-4">
          <strong>CONTACTS</strong>
        </h2>
        <MDBContainer>
          <MDBBtn
            social="fb"
            size="md"
            className="btn-facebook btn-contacts"
            href="https://www.facebook.com/binag31"
            target="_blank"
          >
            <MDBIcon fab icon="facebook-f" className="pr-1" />
            Facebook
          </MDBBtn>
          <MDBBtn
            social="email"
            size="md"
            className="btn-gmail btn-contacts"
            href="mailto:brianbaenag@gmail.com"
            target="_blank"
          >
            <MDBIcon icon="envelope" className="pr-1" /> Gmail
          </MDBBtn>
          <MDBBtn
            social="yt"
            size="md"
            className="btn-youtube btn-contacts"
            href="https://www.youtube.com/channel/UCLhmlFIlsMh98vMJ4hA9KlQ?view_as=subscriber"
            target="_blank"
          >
            <MDBIcon fab icon="youtube" className="pr-1" /> Youtube
          </MDBBtn>
          <MDBBtn
            social="git"
            size="md"
            className="btn-github btn-contacts"
            href="https://github.com/MutedFaith/"
            target="_blank"
          >
            <MDBIcon fab icon="github" className="pr-1" /> Github
          </MDBBtn>
        </MDBContainer>
      </ScrollAnimation>
    </div>
  );
};

export default Contacts;