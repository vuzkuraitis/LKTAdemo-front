import React from "react";
import PropTypes from "prop-types";
import * as S from "./CardUser.styles";

const CardUser = ({ users, id }) => {
  return (
    <S.CardUser id={id} users={users}>
      <h5>License information:</h5>
      {users &&
        users.map((user) => (
          <div key={user.id} className="carduser">
            <h3>
              Name
              <span>
                {user.name} {user.surname}
              </span>
            </h3>
            <h3>
              Email<span>{user.email}</span>
            </h3>
            <h3>
              License Nr.<span>{user.license_nr}</span>
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
