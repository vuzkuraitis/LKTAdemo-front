import React from "react";
import PropTypes from "prop-types";
import * as S from "./Popup.styles";
import Button from "../Button/Button";

const Popup = ({ handleClick, children }) => {
  return (
    <S.Popup>
      <div className="inner-popup">
        {children}
        <div className="popbutton">
          <Button handleClick={handleClick}>Uždaryti</Button>
        </div>
      </div>
    </S.Popup>
  );
};

Popup.propTypes = {
  children: PropTypes.node,
};

export default Popup;
