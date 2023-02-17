import React from "react";
import PropTypes from "prop-types";
import * as S from "./CookiePopup.styles";
import CookieConsent from "react-cookie-consent";
import { Link } from "react-router-dom";

const CookiePopup = ({ handleClick }) => {
  return (
    <S.CookiePopup>
      <CookieConsent
        disableStyles
        location="none"
        buttonText="Accept"
        cookieName="myCookie"
        overlay
        overlayClasses="overlayclass"
        enableDeclineButton
        declineButtonText="Decline"
        declineCookieValue={false}
        expires={150}
      >
        We use essential cookies to make our site work. With your consent, we
        may also use non-essential cookies to improve user experience and
        analyse website traffic. By clicking 'Accept', you agree to our
        website's cookie use as described in our{" "}
        <Link to="/cookie-policy">
          <span>Cookie Policy</span>
        </Link>
        .
      </CookieConsent>
    </S.CookiePopup>
  );
};

CookiePopup.propTypes = {
  children: PropTypes.node,
};

export default CookiePopup;
