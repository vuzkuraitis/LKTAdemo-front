import React from "react";
import PropTypes from "prop-types";
import * as S from "./Button.styles";

const Button = ({ type, children, handleClick, value }) => {
  return (
    <S.Button type={type} onClick={handleClick} value={value}>
      {children}
    </S.Button>
  );
};

Button.propTypes = {
  type: PropTypes.oneOf(["submit", "reset", "button"]),
  handleClick: PropTypes.func,
};

Button.defaultProps = {
  type: "button",
};

export default Button;
