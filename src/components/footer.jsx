import React from "react";

const Footer = () => {
  const date = new Date();
  const currentyear = date.getFullYear();

  return (
    <div className="elegant-color white-text text-center pl-2 pt-2 pr-2 pb-5">
      <small className="grey-text">&#169; Brian Binag {currentyear}</small>
    </div>
  );
};

export default Footer;
