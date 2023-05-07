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
        buttonText="Sutinku"
        cookieName="myCookie"
        overlay
        overlayClasses="overlayclass"
        enableDeclineButton
        declineButtonText="Atmesti"
        declineCookieValue={false}
        expires={150}
      >
        Kad mūsų svetainė veiktų, naudojame esminius slapukus. Jūsų sutikimu mes
        taip pat gali naudoti neesminius slapukus, kad pagerintų vartotojo
        patirtį ir analizuoti svetainės srautą. Spustelėdami „Sutinku“ sutinkate
        su mūsų svetainės slapukų naudojimas, kaip aprašyta mūsų
        <Link to="/cookie-policy">
          <span className="coockiepolicylink">Slapukų politikoje</span>
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
