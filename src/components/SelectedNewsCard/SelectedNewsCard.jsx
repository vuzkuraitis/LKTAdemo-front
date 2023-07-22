import React from "react";
import PropTypes from "prop-types";
import * as S from "./SelectedNewsCard.styles";

const SelectedNewsCard = ({ title, subtitle, children, link, href }) => {
  return (
    <S.SelectedNewsCard>
      <div className="licenserequestintro">
        <h2>{title}</h2>
        <p>{subtitle}</p>
        <a href={href} target="blank">
          {link}
        </a>
      </div>
      {children}
    </S.SelectedNewsCard>
  );
};

SelectedNewsCard.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  link: PropTypes.string,
  href: PropTypes.string,
  children: PropTypes.node,
};

export default SelectedNewsCard;
