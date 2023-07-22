import React from "react";
import PropTypes from "prop-types";
import * as S from "./CardUser.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIdCard } from "@fortawesome/free-solid-svg-icons";

const CardUser = ({ users, id }) => {
  return (
    <S.CardUser id={id} users={users}>
      {users &&
        users.map((user) => (
          <div key={user.id} className="carduser">
            <div className="cardusersvg">
              <FontAwesomeIcon icon={faIdCard} />
            </div>
            <h3>
              Vardas, Pavardė
              <span>
                {user.name} {user.surname}
              </span>
            </h3>
            <h3>
              El Paštas<span>{user.email}</span>
            </h3>
            <h3>
              Pažymėjimo Nr.<span>{user.license_nr}</span>
            </h3>
          </div>
        ))}
    </S.CardUser>
  );
};

CardUser.propTypes = {
  name: PropTypes.string,
  surname: PropTypes.string,
  email: PropTypes.string,
  license_nr: PropTypes.string,
};

export default CardUser;
