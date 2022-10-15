import React from "react";
import PropTypes from "prop-types";
import * as S from "./Hero.styles";

const Hero = ({ title, subtitle, children }) => {
  return (
    <S.Hero className="hero">
      <div className="hero-body">
        <h1 className="title">{title}</h1>
      </div>
      {children}
    </S.Hero>
  );
};

Hero.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  children: PropTypes.node,
};

export default Hero;
