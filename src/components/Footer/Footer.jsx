import React from "react";
import * as S from "./Footer.styles";
import footerLogo from "../../assets/LKTAnew.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

const Footer = ({ children }) => {
  const LKTRAlogo = footerLogo;

  const footerLinks = [
    {
      url: "/about",
      title: "Apie mus",
    },
    {
      url: "/committee",
      title: "Vykdomasis Komitetas",
    },
    {
      url: "/docs",
      title: "Dokumentai",
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
            <p>Santakos g. 11, LT-44279 Kaunas</p>
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
        <a
          href="https://www.facebook.com/people/Lietuvos-krep%C5%A1inio-treneri%C5%B3-asociacija/100030635756362/"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faFacebook} className="footer-item" />
        </a>
      </div>
      <p>Copyright © {year} LTU Basketball</p>
    </S.Footer>
  );
};

export default Footer;
