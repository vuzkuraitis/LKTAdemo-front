import React from "react";
import * as S from "./CardInfo.styles";

const CardInfo = ({ className, children }) => {
  return <S.CardInfo className={className}>{children}</S.CardInfo>;
};

export default CardInfo;
