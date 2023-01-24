import React from "react";
import PropTypes from "prop-types";
import * as S from "./Popup.styles";

const Popup = ({ handleClick }) => {
  return (
    <S.Popup>
      <div className="inner-popup">
        <button className="close-btn" onClick={handleClick}>
          x
        </button>
      </div>
    </S.Popup>
  );
};

Popup.propTypes = {
  children: PropTypes.node,
};

export default Popup;
