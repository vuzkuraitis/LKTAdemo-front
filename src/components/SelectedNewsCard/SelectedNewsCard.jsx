import React from "react";
import PropTypes from "prop-types";
import * as S from "./SelectedNewsCard.styles";

const SelectedNewsCard = ({ title, subtitle, children }) => {
  return (
    <S.SelectedNewsCard>
      <div className="licenserequestintro">
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>
      {children}
    </S.SelectedNewsCard>
  );
};

SelectedNewsCard.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  children: PropTypes.node,
};

export default SelectedNewsCard;
