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
import ImageGallery from "react-image-gallery";
import { posWithInventorySystemImages } from "../resources/images";

import posinventorysystem from "../img/projects/project-posinventorysystem.png";
import clinicrecordmanagementsystem from "../img/projects/project-clinicrecordmanagementsystem.png";
import generalclinicmanagementsystem from "../img/projects/project-generalclinicmanagementsystem.png";
import covid19Tracker from "../img/projects/project-covid-19-tracker.png";
import ScrollAnimation from "react-animate-on-scroll";

const Projects = () => {
  const [openModalProjectPreview, setOpenModalProjectPreview] = useState(false);
  const [tabInModalOpen, setTabInModalOpen] = useState("images");

  const handleCloseModalProjectPreview = () => {
    setOpenModalProjectPreview(false);
  };

  const handleOpenModalProjectPreview = (e) => {
    setOpenModalProjectPreview(true);
  };

  const handleClickTabInModal = (preview) => {
    setTabInModalOpen(preview);
  };

  return (
    <React.Fragment>
      {/* Modal Video Preview */}
      <MDBModal
        size="lg"
        centered
        isOpen={openModalProjectPreview}
        toggle={handleCloseModalProjectPreview}
      >
        <MDBModalHeader toggle={handleCloseModalProjectPreview}>
          POS with Inventory System
        </MDBModalHeader>
        <MDBModalBody>
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <div
                className={
                  tabInModalOpen === "images"
                    ? "nav-link cursor-pointer active"
                    : "nav-link cursor-pointer"
                }
                onClick={() => handleClickTabInModal("images")}
              >
                Images
              </div>
            </li>
            <li className="nav-item">
              <div
                className={
                  tabInModalOpen === "video"
                    ? "nav-link active cursor-pointer"
                    : "nav-link cursor-pointer"
                }
                onClick={() => handleClickTabInModal("video")}
              >
                Video
              </div>
            </li>
          </ul>
          <div className="mt-2">
            {tabInModalOpen === "images" ? (
              <ImageGallery showIndex items={posWithInventorySystemImages} />
            ) : (
              <ReactPlayer
                url="https://www.youtube.com/watch?v=aYzfc0CmRzk&t=230s"
                loop
                controls
                width="100%"
              />
            )}
          </div>
        </MDBModalBody>
      </MDBModal>
      <div className="elegant-color-dark white-text pt-5 pb-5 text-center" id="projects">
        <h2 className="mt-3 mb-4">
          <strong>PROJECTS</strong>
        </h2>
        <MDBContainer>
          <MDBRow>
            <MDBCol md="6" lg="4" className="mb-4">
              <ScrollAnimation animateIn="fadeIn" animateOnce>
                <MDBCard className="card-project elegant-color-dark" border="border-light">
                  <MDBCardImage
                    className="img-fluid"
                    src={clinicrecordmanagementsystem}
                    waves
                  />
                  <MDBCardBody>
                    <MDBCardTitle style={{ fontSize: 20 }}>
                      Rabies Treatment Clinic Record Management System
                    </MDBCardTitle>
                    <MDBCardText className="white-text">
                      This system records and monitors the patients that were
                      bitten by animals which will be vaccinated to treat the
                      rabies. It has statistics to know the total number of
                      incidents per region, province, city/municipality, or
                      barangay nationwide.
                      <br />
                      <br />
                      Tech Stack: HTML, CSS, JavaScript, Bootstrap 4, jQuery,
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
                <MDBCard className="card-project elegant-color-dark" border="border-light">
                  <MDBCardImage
                    className="img-fluid"
                    src={generalclinicmanagementsystem}
                    waves
                  />
                  <MDBCardBody>
                    <MDBCardTitle style={{ fontSize: 20 }}>
                      General Clinic Management System
                    </MDBCardTitle>
                    <MDBCardText className="white-text">
                      This system manages patient records including case
                      history, documents, prescriptions, appointments, and
                      payments. It has inventory that tracks the stocks of
                      medicines and has also sales reporting. Patient can be
                      logged in to view his/her records and book appointments.
                      <br />
                      <br />
                      Tech Stack: React JS, Material UI, and Laravel
                    </MDBCardText>
                    <MDBBtn
                      className="view-btn-second-project"
                      href="https://clinicare.site"
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
                <MDBCard className="card-project elegant-color-dark" border="border-light">
                  <MDBCardImage
                    className="img-fluid"
                    src={posinventorysystem}
                    waves
                  />
                  <MDBCardBody>
                    <MDBCardTitle style={{ fontSize: 20 }}>
                      POS with Inventory System using Barcode Scanner
                    </MDBCardTitle>
                    <MDBCardText className="white-text">
                      This system processes and records the transactions between
                      the store and customers, cancel transaction, tracks the
                      status of stocks and alert if the quantity is in critical
                      level, generate sales report, and tracks the history of
                      every user's action in the system.
                      <br />
                      <br />
                      Tech Stack: C# and MySQL
                    </MDBCardText>
                    <MDBBtn
                      className="view-btn-third-project"
                      onClick={handleOpenModalProjectPreview}
                      target="_blank"
                    >
                      View
                    </MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </ScrollAnimation>
            </MDBCol>
            <MDBCol md="6" lg="4" className="mb-4 offset-lg-4">
              <ScrollAnimation animateIn="fadeIn" animateOnce>
                <MDBCard className="card-project elegant-color-dark" border="border-light">
                  <MDBCardImage
                    className="img-fluid"
                    src={covid19Tracker}
                    waves
                  />
                  <MDBCardBody>
                    <MDBCardTitle style={{ fontSize: 20 }}>
                      Covid-19 Tracker Worldwide
                    </MDBCardTitle>
                    <MDBCardText className="white-text">
                      Tracks current Covid-19 status worldwide including the
                      outbreak trend cases in the past 98 days. The data is
                      being fetched from an API.
                      <br />
                      <br />
                      Tech Stack: React JS and Bootstrap 4
                    </MDBCardText>
                    <MDBBtn
                      className="view-btn-fourth-project"
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
