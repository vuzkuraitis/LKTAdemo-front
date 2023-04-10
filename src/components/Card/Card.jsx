import React from "react";
import PropTypes from "prop-types";
import * as S from "./Card.styles";

const Card = ({ className, name, surname, email, license_nr, id }) => {
  return (
    <S.Card id={id} className={className}>
      <h3>
        Vardas, Pavardė
        <span>
          {name} {surname}
        </span>
      </h3>
      <h3>
        El Paštas<span>{email}</span>
      </h3>
      <h3>
        Licenzijos Nr.<span>{license_nr}</span>
      </h3>
    </S.Card>
  );
};

Card.propTypes = {
  name: PropTypes.string,
  surname: PropTypes.string,
  email: PropTypes.string,
  license_nr: PropTypes.string,
};

export default Card;
