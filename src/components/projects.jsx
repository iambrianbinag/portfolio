import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBCol,
} from "mdbreact";
import posinventorysystem from "../img/project-posinventorysystem.png";
import clinicrecordmanagementsystem from "../img/project-clinicrecordmanagementsystem.png";
import covid19Tracker from "../img/project-covid-19-tracker.png";
import ScrollAnimation from "react-animate-on-scroll";

const Projects = () => {
  return (
    <div className="pt-5 pb-5 text-center" id="projects">
      <h2 className="mt-3 mb-4">
        <strong>PROJECTS</strong>
      </h2>
      <MDBContainer>
        <MDBRow>
          <MDBCol md="6" lg="4" className="mb-4">
            <ScrollAnimation animateIn="fadeIn" animateOnce>
              <MDBCard>
                <MDBCardImage
                  className="img-fluid"
                  src={clinicrecordmanagementsystem}
                  waves
                />
                <MDBCardBody>
                  <MDBCardTitle style={{ fontSize: 20 }}>
                    Clinic Record Management System
                  </MDBCardTitle>
                  <MDBCardText>
                    My Capstone project in college. This system records and
                    monitors the patients that were bitten by animals and will
                    be vaccinated to treat the rabies.
                    <br />
                    <br />
                    My Position: Both front end and back end
                    <br />
                    <br />
                    Tech Stack: HTML, CSS, Javascript, Bootstrap 4, JQuery, PHP,
                    and MySQL
                  </MDBCardText>
                  <MDBBtn
                    href="https://clinicrecordmanagement.ml"
                    target="_blank"
                  >
                    View
                  </MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </ScrollAnimation>
          </MDBCol>
          <MDBCol md="6" lg="4" className="mb-4">
            <ScrollAnimation animateIn="fadeIn" animateOnce>
              <MDBCard>
                <MDBCardImage
                  className="img-fluid"
                  src={posinventorysystem}
                  waves
                />
                <MDBCardBody>
                  <MDBCardTitle style={{ fontSize: 20 }}>
                    POS with Inventory System using Barcode Scanner
                  </MDBCardTitle>
                  <MDBCardText>
                    My Thesis project in Software Engineering subject in
                    college. This system processes and records the transactions
                    between a store and customers, and also tracking the status
                    of stocks in the inventory.
                    <br />
                    <br />
                    My Position: Both front end and back end
                    <br />
                    <br />
                    Tech Stack: C# and MySQL
                  </MDBCardText>
                  <MDBBtn
                    href="https://www.youtube.com/watch?v=JeIAZuooiJw&list=PL2pUK49yxDfeCgxO85P3f20zukCL4pOBw"
                    target="_blank"
                  >
                    View
                  </MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </ScrollAnimation>
          </MDBCol>
          <MDBCol md="6" lg="4" className="offset-md-3 mb-4 offset-lg-0">
            <ScrollAnimation animateIn="fadeIn" animateOnce>
              <MDBCard>
                <MDBCardImage
                  className="img-fluid"
                  src={covid19Tracker}
                  waves
                />
                <MDBCardBody>
                  <MDBCardTitle style={{ fontSize: 20 }}>
                    Covid-19 Tracker Worldwide
                  </MDBCardTitle>
                  <MDBCardText>
                    Tracks current Covid-19 status worldwide including the
                    outbreak trend cases in the past 98 days. The data is being
                    fetched from API.
                    <br />
                    <br />
                    Tech Stack: React JS and Bootstrap 4
                  </MDBCardText>
                  <MDBBtn
                    href="https://covid-19-tracker-worldwide.herokuapp.com/"
                    target="_blank"
                  >
                    View
                  </MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </ScrollAnimation>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
};

export default Projects;
