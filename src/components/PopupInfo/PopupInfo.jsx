import React from "react";
import PropTypes from "prop-types";
import * as S from "./PopupInfo.styles";

const PopupInfo = ({ className, terms }) => {
  return (
    <S.PopupInfo className={className}>
      <h4>{terms[0].terms_title}</h4>
      <p>{terms[0].terms_text}</p>
      <p>{terms[0].terms_terms}</p>
      <p>
        <ol>
          <li>{terms[0].terms_term1}</li>
          <li>{terms[0].terms_term2}</li>
          <li>{terms[0].terms_term3}</li>
        </ol>
      </p>
      <p>{terms[0].terms_conditions}</p>
      <p>
        <ol>
          <li>{terms[0].terms_condition1}</li>
          <li>{terms[0].terms_condition2}</li>
        </ol>
      </p>
      <p>{terms[0].terms_footer}</p>
    </S.PopupInfo>
  );
};

PopupInfo.propTypes = {
  type: PropTypes.oneOf(["text", "number"]),
};

export default PopupInfo;
