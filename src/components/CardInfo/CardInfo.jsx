import React from "react";
import PropTypes from "prop-types";
import * as S from "./CardInfo.styles";

const CardInfo = ({ className, children }) => {
  return (
    <S.CardInfo className={className}>
      <p>{children}</p>
    </S.CardInfo>
  );
};

CardInfo.propTypes = {
  children: PropTypes.string,
};

export default CardInfo;
