import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import NavbarTop from "./components/navbarTop";
import NavbarBottom from "./components/navbarBottom";
import Header from "./components/header";
import MyProfile from "./components/myprofile";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Contacts from "./components/contacts";
import Footer from "./components/footer";
import "react-image-gallery/styles/css/image-gallery.css";
import "animate.css/animate.min.css";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <NavbarTop />
      <Header />
      <MyProfile />
      <Skills />
      <Projects />
      <Contacts />
      <Footer />
      <NavbarBottom />
    </React.Fragment>
  );
}

export default App;
