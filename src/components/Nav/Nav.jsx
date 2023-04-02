import React, { useState } from "react";
import * as S from "./Nav.styles";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import Logo from "../../assets/LogoNew.png";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const [active, setActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const publicLinks = [
    {
      url: "/",
      title: "Pradžia",
    },
    {
      url: "/news",
      title: "Naujienos",
    },
    {
      url: "/license",
      title: "Licenzijos",
    },
    {
      url: "/studies",
      title: "Studijos",
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
      url: "/account/material",
      title: "Metodinė Medžiaga",
    },
    {
      url: "/account/clinics",
      title: "Kursai ir Seminarai",
    },
    {
      url: "/account/settings",
      title: "Nustatymai",
    },
  ];

  const adminLinks = [
    {
      url: "/admin/admin-account",
      title: "Account",
    },
    {
      url: "/admin/admin-clinics",
      title: "Clinics",
    },
    {
      url: "/admin/admin-news",
      title: "News",
    },
  ];

  const navigate = useNavigate();
  const admin = localStorage.getItem("admin");
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
        {admin
          ? adminLinks && (
              <S.BurgerMenu active={active}>
                {adminLinks.map((adminlink) => (
                  <Link
                    to={adminlink.url}
                    key={adminlink.title}
                    className="navbar-item"
                    onClick={() => setActive(null)}
                  >
                    {adminlink.title}
                  </Link>
                ))}
                <Button
                  handleClick={() => {
                    localStorage.removeItem("token");
                    localStorage.removeItem("admin");
                    navigate("/");
                    setActive(null);
                  }}
                >
                  Sign Out
                </Button>
              </S.BurgerMenu>
            )
          : links && (
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
