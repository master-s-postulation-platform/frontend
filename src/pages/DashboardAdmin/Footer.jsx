import React from "react";
import "../../assets/styles/components/Footer.scss";
import logoFooter from "./images/logo-footer.svg";

const Footer = () => (
  <footer className="footer">
    <p>
      <span className="footer__copyright">&copy;</span> 2021 Talent Jobs
    </p>
    <p>
      <i className="footer__logo">
        <img src={logoFooter} alt="" />
      </i>
    </p>
  </footer>
);

export default Footer;
