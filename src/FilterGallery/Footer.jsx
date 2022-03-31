import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="footer-box">
        <h5>
          © DRT  Gallery @ {new Date().getFullYear().toString()} All
          Rights Reserved
        </h5>
      </div>
    </footer>
  );
};

export default Footer;
