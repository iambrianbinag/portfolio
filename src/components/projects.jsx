import React, { useState } from "react";
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
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
} from "mdbreact";

import ReactPlayer from "react-player";

import posinventorysystem from "../img/project-posinventorysystem.png";
import clinicrecordmanagementsystem from "../img/project-clinicrecordmanagementsystem.png";
import covid19Tracker from "../img/project-covid-19-tracker.png";
import ScrollAnimation from "react-animate-on-scroll";

const Projects = () => {
  const [openModalVideoPreview, setOpenModalVideoPreview] = useState(false);

  const handleCloseModalVideoPreview = () => {
    setOpenModalVideoPreview(false);
  };

  const handleOpenModalVideoPreview = (e) => {
    setOpenModalVideoPreview(true);
  };

  return (
    <React.Fragment>
      {/* Modal Video Preview */}
      <MDBModal
        size="lg"
        centered
        isOpen={openModalVideoPreview}
        toggle={handleCloseModalVideoPreview}
      >
        <MDBModalHeader toggle={handleCloseModalVideoPreview}></MDBModalHeader>
        <MDBModalBody>
          <ReactPlayer
            url="https://www.youtube.com/watch?v=aYzfc0CmRzk&t=230s"
            playing
            loop
            controls
            width="100%"
          />
        </MDBModalBody>
      </MDBModal>
      <div className="pt-5 pb-5 text-center" id="projects">
        <h2 className="mt-3 mb-4">
          <strong>PROJECTS</strong>
        </h2>
        <MDBContainer>
          <MDBRow>
            <MDBCol md="6" lg="4" className="mb-4">
              <ScrollAnimation animateIn="fadeIn" animateOnce>
                <MDBCard className="card-project">
                  <MDBCardImage
                    className="img-fluid"
                    src={clinicrecordmanagementsystem}
                    waves
                  />
                  <MDBCardBody>
                    <MDBCardTitle style={{ fontSize: 20 }}>
                      Rabies Treatment Clinic Record Management System
                    </MDBCardTitle>
                    <MDBCardText>
                      This system records and monitors the patients that were
                      bitten by animals and will be vaccinated to treat the
                      rabies. It have statistics to know the total number of
                      incident per region, province, city/municipality, or
                      baranggay nationwide, and can be filtered by different
                      options.
                      <br />
                      <br />
                      Tech Stack: HTML, CSS, Javascript, Bootstrap 4, JQuery,
                      PHP, and MySQL
                    </MDBCardText>
                    <MDBBtn
                      className="view-btn-first-project"
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
                <MDBCard className="card-project">
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
                      This system processes and records the transactions between
                      a store and customers, cancel transaction, tracks the
                      status of stocks and alert if the quantity is low or out
                      of stocks, generate sales and profit report, and records
                      the history of every user's action in the system.
                      <br />
                      <br />
                      Tech Stack: C# and MySQL
                    </MDBCardText>
                    <MDBBtn
                      className="view-btn-second-project"
                      onClick={handleOpenModalVideoPreview}
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
                <MDBCard className="card-project">
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
                      outbreak trend cases in the past 98 days. The data is
                      being fetched from API.
                      <br />
                      <br />
                      Tech Stack: React JS and Bootstrap 4
                    </MDBCardText>
                    <MDBBtn
                      className="view-btn-third-project"
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
    </React.Fragment>
  );
};

export default Projects;
