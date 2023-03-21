import React from "react";
import PropTypes from "prop-types";
import * as S from "./PaymentButton.styles";

const PaymentButton = ({ type, children, handleClick, id, value }) => {
  return (
    <S.PaymentButton type={type} onClick={handleClick} id={id} value={value}>
      {children}
    </S.PaymentButton>
  );
};

PaymentButton.propTypes = {
  type: PropTypes.oneOf(["submit", "reset", "button"]),
  handleClick: PropTypes.func,
  handleSubmit: PropTypes.func,
  handleChange: PropTypes.func,
};

PaymentButton.defaultProps = {
  type: "button",
};

export default PaymentButton;
