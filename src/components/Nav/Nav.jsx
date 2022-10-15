import React, { useState } from "react";
import * as S from "./Nav.styles";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.png";

const Nav = () => {
  const [active, setActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const publicLinks = [
    {
      url: "/",
      title: "Home",
    },
    {
      url: "/license",
      title: "Find a License",
    },
    {
      url: "/register",
      title: "Register",
    },
  ];

  const changeBackground = () => {
    if (window.scrollY >= 10) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  window.addEventListener("scroll", changeBackground);

  // const navigate = useNavigate();
  const links = publicLinks;
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
