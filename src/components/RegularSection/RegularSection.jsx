import React from "react";
// import PropTypes from "prop-types";
import * as S from "./RegularSection.styles";

const RegularSection = ({ children }) => {
  return <S.RegularSection>{children}</S.RegularSection>;
};

// RegularSection.propTypes = {
//   children: PropTypes.node,
// };

export default RegularSection;
