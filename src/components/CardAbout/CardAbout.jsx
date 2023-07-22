import React from "react";
import * as S from "./CardAbout.styles";

const CardAbout = ({ className, children }) => {
  return <S.CardAbout className={className}>{children}</S.CardAbout>;
};

export default CardAbout;
