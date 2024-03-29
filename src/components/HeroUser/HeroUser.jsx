import React from "react";
import PropTypes from "prop-types";
import * as S from "./HeroUser.styles";

const HeroUser = ({ users, children }) => {
  return (
    <S.HeroUser className="hero">
      {users &&
        users.map((user) => (
          <div className="hero-body" key={user.name}>
            <h1>Sveiki {user.name},</h1>
          </div>
        ))}
      {children}
    </S.HeroUser>
  );
};

HeroUser.propTypes = {
  children: PropTypes.node,
};

export default HeroUser;
