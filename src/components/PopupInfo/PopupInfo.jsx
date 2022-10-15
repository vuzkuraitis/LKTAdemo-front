import React from "react";
import PropTypes from "prop-types";
import * as S from "./PopupInfo.styles";

const PopupInfo = ({ className }) => {
  return (
    <S.PopupInfo className={className}>
      <h4>Terms and Contitions</h4>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio
        perferendis, autem libero quo, deleniti dolore, assumenda reiciendis
        itaque quis consequuntur quasi quas aspernatur nobis. Blanditiis ipsam
        facilis doloribus maxime laboriosam!
      </p>
    </S.PopupInfo>
  );
};

PopupInfo.propTypes = {
  type: PropTypes.oneOf(["text", "number"]),
};

export default PopupInfo;
