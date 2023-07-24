import React from "react";
import PropTypes from "prop-types";
import * as S from "./CardList.styles";

const CardList = ({ cards, className }) => {
  return (
    <S.CardList className="activeCards" cards={cards}>
      {cards &&
        cards.map((card, index) => (
          <S.CardItem
            className={className}
            key={index}
            id={card.id}
            name={card.name}
            surname={card.surname}
            email={card.email}
            license_nr={card.license_nr}
            status={card.status}
          />
        ))}
    </S.CardList>
  );
};

CardList.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      email: PropTypes.string,
      license_nr: PropTypes.string,
    })
  ),
};

export default CardList;
