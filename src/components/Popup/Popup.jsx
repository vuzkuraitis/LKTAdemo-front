import React from "react";
import PropTypes from "prop-types";
import * as S from "./Popup.styles";
import PopupInfo from "../PopupInfo/PopupInfo";

const Popup = ({ handleClick }) => {
  return (
    <S.Popup>
      <div className="inner-popup">
        <button className="close-btn" onClick={handleClick}>
          x
        </button>
        <PopupInfo />
      </div>
    </S.Popup>
  );
};

Popup.propTypes = {
  children: PropTypes.node,
};

export default Popup;
