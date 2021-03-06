import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import NavbarTop from "./components/NavbarTop";
import NavbarBottom from "./components/NavbarBottom";
import Header from "./components/Header";
import MyProfile from "./components/MyProfile";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import "react-image-gallery/styles/css/image-gallery.css";
import "animate.css/animate.min.css";
import "./styles/App.css";
import "./styles/Timeline.css";

function App() {
  return (
    <React.Fragment>
      <NavbarTop />
      <Header />
      <MyProfile />
      <Skills />
      <Experience />
      <Projects />
      <Contacts />
      <Footer />
      <NavbarBottom />
    </React.Fragment>
  );
}

export default App;
