import React from "react";
import PropTypes from "prop-types";
import * as S from "./SelectedNewsCard.styles";
import { Link } from "react-router-dom";
import Seminaras2024 from "../../files/Treneriu_seminaras_202402 .png";
import Seminaras20242 from "../../files/IBCC24_.png";
import Button from "../Button/Button";

const SelectedNewsCard = ({ id, title, subtitle, children, link, href }) => {
  const picture = () => {
    if (id === 9 || id === "9") {
      return Seminaras2024;
    }
    if (id === 10 || id === "10") {
      return Seminaras20242;
    }
  };

  console.log(subtitle);
  return (
    <S.SelectedNewsCard>
      <div className="licenserequestintro">
        <h2>{title}</h2>

        <p
          dangerouslySetInnerHTML={{
            __html: subtitle,
          }}
        ></p>
        {link === null ? (
          <Link to={picture()} target="_blank">
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
