import React, { Component } from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavbarToggler,
  MDBCollapse,
  MDBContainer,
} from "mdbreact";
import { Link, animateScroll as scroll } from "react-scroll";

class Navbar extends Component {
  state = {
    isOpen: false,
    cursorPos: {},
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  toggleCollapseCustom = () => {
    if (window.innerWidth < 768) this.toggleCollapse();
  };

  scrollToTop() {
    scroll.scrollToTop();
  }

  setLink(to, label) {
    return (
      <Link
        activeClass="active"
        className="nav-link Ripple-parent"
        to={to}
        spy={true}
        smooth={true}
        duration={500}
        onClick={this.toggleCollapseCustom}
      >
        {label}
      </Link>
    );
  }

  render() {
    return (
      <MDBNavbar
        fixed="top"
        color="elegant-color"
        dark
        expand="md"
        scrolling
        id="navbar"
      >
        <MDBContainer fluid>
          <MDBNavbarBrand
            onClick={this.scrollToTop}
            style={{ cursor: "pointer" }}
          >
            <strong className="white-text">&#60;&#47;&#62;</strong>
          </MDBNavbarBrand>
          <MDBNavbarToggler onClick={this.toggleCollapse} />
          <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
            <MDBNavbarNav className="text-center" right>
              <MDBNavItem>{this.setLink("profile", "MY PROFILE")}</MDBNavItem>
              <MDBNavItem>{this.setLink("skills", "SKILLS")}</MDBNavItem>
              <MDBNavItem>{this.setLink("projects", "PROJECTS")}</MDBNavItem>
              <MDBNavItem>{this.setLink("contacts", "CONTACTS")}</MDBNavItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    );
  }
}

export default Navbar;
