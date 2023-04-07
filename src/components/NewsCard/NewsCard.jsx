import React from "react";
import PropTypes from "prop-types";
import * as S from "./NewsCard.styles";

const NewsCard = ({ title, subtitle, children }) => {
  return (
    <S.NewsCard>
      <div className="licenserequestintro">
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>
      {children}
    </S.NewsCard>
  );
};

NewsCard.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  children: PropTypes.node,
};

export default NewsCard;
