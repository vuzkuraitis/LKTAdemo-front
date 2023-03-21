import React from "react";
import * as S from "./Footer.styles";
import footerLogo from "../../assets/LKTAnew.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faTiktok } from "@fortawesome/free-brands-svg-icons";

const Footer = ({ children }) => {
  const LKTRAlogo = footerLogo;

  const footerLinks = [
    {
      url: "/about",
      title: "Apie mus",
    },
    {
      url: "/structure",
      title: "Struktūra",
    },
    {
      url: "/privacy-policy",
      title: "Privatumo politika",
    },
  ];

  const year = new Date().getFullYear();
  return (
    <S.Footer>
      <div className="footerInfo">
        <div className="footerContacts">
          <img src={LKTRAlogo} alt="lktralogo" className="imgFooter" />
          <div>
            <h5>Mus rasite:</h5>
            <p>Sporto g. 6, LT-44221 Kaunas</p>
            <p>El paštas: treneris@lktra.lt</p>
          </div>
        </div>
        <div className="footerAbout">
          {footerLinks.map((footerLink) => (
            <Link
              to={footerLink.url}
              key={footerLink.title}
              className="navbar-item"
            >
              {footerLink.title}
            </Link>
          ))}
        </div>
      </div>
      <p>Sekite mus:</p>
      <div className="socialMedia">
        <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faFacebook} className="footer-item" />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faInstagram} className="footer-item" />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faTwitter} className="footer-item" />
        </a>
        <a href="https://www.tiktok.com" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faTiktok} className="footer-item" />
        </a>
        <a href="https://www.youtube.com" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faYoutube} className="footer-item" />
        </a>
      </div>
      <p>Copyright © {year} LTU Basketball</p>
    </S.Footer>
  );
};

export default Footer;
