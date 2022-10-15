import React from "react";
import PropTypes from "prop-types";
import * as S from "./InfoCard.styles";

const InfoCard = ({ title, subtitle, children }) => {
  return (
    <S.InfoCard>
      <div className="licenserequest">
        <div className="licenserequestintro">
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </div>
        {children}
      </div>
    </S.InfoCard>
  );
};

InfoCard.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  children: PropTypes.node,
};

export default InfoCard;
