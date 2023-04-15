import React, { useState } from "react";
import * as S from "./Nav.styles";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import Logo from "../../assets/LogoNew.png";
import Logo2 from "../../assets/LKTA.jpeg";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(fas);

const Nav = () => {
  const [active, setActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const publicLinks = [
    {
      url: "/",
      title: "Pradžia",
      icon: "house",
    },
    {
      url: "/news",
      title: "Naujienos",
      icon: "rss",
    },
    {
      url: "/license",
      title: "Licenzijos",
      icon: "magnifying-glass",
    },
    {
      url: "/studies",
      title: "Studijos",
      icon: "building-columns",
    },
    {
      url: "/register",
      title: "Registracija",
      icon: "user-plus",
    },
  ];

  const privateLinks = [
    {
      url: "/account",
      title: "Paskyra",
      icon: "user",
    },
    {
      url: "/account/material",
      title: "Metodinė Medžiaga",
      icon: "book-open",
    },
    {
      url: "/account/clinics",
      title: "Kursai ir Seminarai",
      icon: "school",
    },
    {
      url: "/account/settings",
      title: "Nustatymai",
      icon: "gear",
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
          <img src={Logo2} alt="LKTRA" />
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
                  <div className="navbarlinks">
                    <Link
                      to={link.url}
                      key={link.title}
                      className="navbar-item"
                      onClick={() => setActive(null)}
                    >
                      <FontAwesomeIcon icon={link.icon} />
                      {link.title}
                    </Link>
                  </div>
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
