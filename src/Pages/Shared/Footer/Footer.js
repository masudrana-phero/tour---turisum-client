import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer py-3 bg-primary ">
      <div className="footer-logo">

        <img src="https://image.freepik.com/free-vector/beach-logo-vectors_79530-15.jpg" alt="" />
      </div>
      <div className="reserved text-white">
        <h3>All Rights Reserved &copy; <span className="text-warning">Masud Rana</span></h3>
      </div>
    </div>
  );
};

export default Footer;
