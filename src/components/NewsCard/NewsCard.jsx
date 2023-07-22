import React from "react";
import PropTypes from "prop-types";
import * as S from "./NewsCard.styles";

const NewsCard = ({ title, subtitle, children, link, href }) => {
  return (
    <S.NewsCard>
      <div className="licenserequestintro">
        <h2>{title}</h2>
        <p>{subtitle}</p>
        <a href={href}>{link}</a>
      </div>
      {children}
    </S.NewsCard>
  );
};

NewsCard.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  link: PropTypes.string,
  href: PropTypes.string,
  children: PropTypes.node,
};

export default NewsCard;
