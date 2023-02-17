import React, { useState } from "react";
import * as S from "./Nav.styles";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import Logo from "../../assets/Logo.png";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const [active, setActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const publicLinks = [
    {
      url: "/",
      title: "Pagrindinis",
    },
    {
      url: "/license",
      title: "Licenzijos",
    },
    {
      url: "/register",
      title: "Registracija",
    },
  ];

  const privateLinks = [
    {
      url: "/account",
      title: "Paskyra",
    },
    {
      url: "/account/clinics",
      title: "Seminarai",
    },
    {
      url: "/account/settings",
      title: "Nustatymai",
    },
  ];

  const navigate = useNavigate();
  const links = localStorage.getItem("token") ? privateLinks : publicLinks;
  return (
    <S.Nav
      scrolled={scrolled}
      onScroll={() => setScrolled(!scrolled)}
      className="navbar scrolled"
    >
      <div className="navbarWrapper">
        <S.NavBrand>
          <img src={Logo} alt="LTU Basketball" />
        </S.NavBrand>

        <S.MenuIcon active={active} onClick={() => setActive(!active)}>
          <div />
          <div />
          <div />
        </S.MenuIcon>
        {links && (
          <S.BurgerMenu active={active}>
            {links.map((link) => (
              <Link
                to={link.url}
                key={link.title}
                className="navbar-item"
                onClick={() => setActive(null)}
              >
                {link.title}
              </Link>
            ))}
            {localStorage.getItem("token") ? (
              <Button
                handleClick={() => {
                  localStorage.removeItem("token");
                  navigate("/");
                  setActive(null);
                }}
              >
                Atsijungti
              </Button>
            ) : (
              <Button
                handleClick={() => {
                  navigate("/login");
                  setActive(null);
                }}
              >
                Prisijungti
              </Button>
            )}
          </S.BurgerMenu>
        )}
      </div>
    </S.Nav>
  );
};

Nav.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      active: PropTypes.func,
    })
  ),
};

export default Nav;
