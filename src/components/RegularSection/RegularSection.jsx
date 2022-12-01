import React from "react";
// import PropTypes from "prop-types";
import * as S from "./RegularSection.styles";

const RegularSection = ({ children, className }) => {
  return <S.RegularSection className={className}>{children}</S.RegularSection>;
};

// RegularSection.propTypes = {
//   children: PropTypes.node,
// };

export default RegularSection;
