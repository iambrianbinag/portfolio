import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import Navbar from "./components/navbar";
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
      <Navbar />
      <Header />
      <MyProfile />
      <Skills />
      <Projects />
      <Contacts />
      <Footer />
    </React.Fragment>
  );
}

export default App;
