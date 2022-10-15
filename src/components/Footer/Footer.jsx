import React from "react";
import * as S from "./Footer.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faTiktok } from "@fortawesome/free-brands-svg-icons";

const Footer = ({ children }) => {
  const year = new Date().getFullYear();
  return (
    <S.Footer>
      <p>Follow us on:</p>
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
