import styled from "styled-components";

export const Nav = styled.div`
  /* background: ${({ scrolled }) => (scrolled ? "#333444" : "#000000")}; */
  background: #000000;
  display: flex;
  font-family: "Roboto", sans-serif;
  justify-content: center;
  flex-direction: row;
  padding: 1.5rem 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 9997;

  img {
    display: block;
    height: 3rem;
  }
  .navbarWrapper {
    align-items: center;
    display: flex;
    justify-content: space-between;
    width: 90%;
  }
`;

export const NavBrand = styled.div`
  display: flex;

  img:last-child {
    margin-left: 0.5rem;
    border-radius: 0.5rem;
    background: red;
  }
`;

export const BurgerMenu = styled.div`
  display: flex;
  align-items: center;

  .navbar-item:hover {
    color: #646fd4;
    transition: 0.3s ease-in-out;
    svg {
      color: #646fd4;
    }
  }
  .navbarlinks {
    display: flex;
    align-items: center;
    height: 2rem;
    margin: 1rem auto;
    width: 80%;
  }

  svg {
    color: #009cde;
  }

  svg:hover {
    color: #646fd4;
  }

  @media screen and (min-width: 768px) {
    .navbar-item {
      color: #ffffff;
      text-decoration: none;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      font-size: 0.75rem;
      width: 7rem;
      svg {
        height: 1.5rem;
        margin-bottom: 0.5rem;
        width: 2rem;
      }
    }
    .navbarlinks {
      margin: 0.5rem auto;
    }
  }
  @media screen and (min-width: 1024px) {
    .navbar-item {
      width: 9rem;
    }
    .navbarlinks {
      margin: 0.5rem auto;
    }
  }

  @media screen and (max-width: 768px) {
    flex-flow: column nowrap;
    background: #000000;
    transform: ${({ active }) =>
      active ? "translateY(0)" : "translateY(-130%)"};
    position: absolute;
    top: 6rem;
    left: 0;
    width: 100%;

    button {
      margin: 2rem;
      margin-top: 1rem;
    }

    .navbar-item {
      display: flex;
      align-items: center;
      color: #ffffff;
      position: relative;
      text-decoration: none;
      width: 100%;

      svg {
        margin-right: 2rem;
        height: 2rem;
        width: 2rem;
      }
    }
    .navbar-item:nth-last-child(1) {
      margin-right: 1rem;
    }
  }
`;

export const MenuIcon = styled.div`
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 1;

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ active }) => (active ? "#cccccc" : "#ffffff")};
    border-radius: 5rem;
    transform-origin: 1px;
    transition: 0.3s ease-in-out;

    &:nth-child(1) {
      transform: ${({ active }) => (active ? "rotate(45deg)" : "rotate(0deg)")};
    }

    &:nth-child(2) {
      opacity: ${({ active }) => (active ? 0 : 1)};
    }

    &:nth-child(3) {
      transform: ${({ active }) =>
        active ? "rotate(-45deg)" : "rotate(0deg)"};
    }
  }
  @media (max-width: 768px) {
    display: flex;
  }
`;
