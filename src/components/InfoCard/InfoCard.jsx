import React from "react";
import PropTypes from "prop-types";
import * as S from "./InfoCard.styles";

const InfoCard = ({ title, subtitle, children, className }) => {
  return (
    <S.InfoCard className={className}>
      <div className="licenserequestintro">
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>
      {children}
    </S.InfoCard>
  );
};

InfoCard.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  children: PropTypes.node,
};

export default InfoCard;
