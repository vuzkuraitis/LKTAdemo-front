import React from "react";
import PropTypes from "prop-types";
import * as S from "./SelectedNewsCard.styles";
import { Link } from "react-router-dom";
import Seminaras2024 from "../../files/Treneriu_seminaras_202402 .png";
import Button from "../Button/Button";

const SelectedNewsCard = ({ title, subtitle, children, link, href }) => {
  return (
    <S.SelectedNewsCard>
      <div className="licenserequestintro">
        <h2>{title}</h2>
        <p>{subtitle}</p>
        {link === null ? (
          <Link to={Seminaras2024} target="_blank">
            <Button>Nuoroda</Button>
          </Link>
        ) : (
          <a href={href} target="blank">
            {link}
          </a>
        )}
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
