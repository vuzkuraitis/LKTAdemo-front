import styled from "styled-components";

export const Footer = styled.div`
  background: #000000;
  color: #ffffff;
  display: flex;
  font-family: "Roboto", sans-serif;
  flex-direction: column;
  padding: 1rem 0;
  text-align: center;
  /* position: fixed;
  bottom: 0;
  left: 0;
  right: 0; */
  width: 100%;

  .socialMedia {
    display: flex;
    justify-content: space-around;
    margin: 0 auto;
    width: 50%;
  }

  .footer-item {
    color: #ffffff;
    font-size: 0.75rem;
    padding: 1rem;
  }

  .footer-item:hover {
    color: #646fd4;
    cursor: pointer;
    transition: 0.3s ease-in-out;
  }
  p {
    font-size: 0.75rem;
    margin: 0;
  }
  .footerInfo {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
  .footerContacts {
    align-items: center;
    border-bottom: 1px solid #f0f0f0;
    display: flex;
    justify-content: space-between;
    margin: 1rem;
    padding-bottom: 1.5rem;
    width: 80%;
    h5 {
      margin-top: 0;
    }
    p {
      line-height: 1.5rem;
    }
  }
  .imgFooter {
    background: #f0f0f0;
    border-radius: 1rem;
    width: 30%;
  }
  .footerAbout {
    border-bottom: 1px solid #f0f0f0;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-bottom: 1rem;
    padding-bottom: 1rem;
    width: 80%;
  }
  .navbar-item {
    color: #ffffff;
    position: relative;
    text-decoration: none;
    margin: 0 1rem;
    padding: 0.5rem;
  }
  .navbar-item:hover {
    color: #646fd4;
    transition: 0.3s ease-in-out;
  }

  @media screen and (min-width: 768px) {
    .footer-item {
      font-size: 1.25rem;
    }
    .navbar-item {
      font-size: 1rem;
    }
    .footerContacts {
      font-size: 1.25rem;
    }
  }
  @media screen and (min-width: 1024px) {
    .footerInfo {
      flex-direction: row;
      margin: 0 auto;
      width: 70%;
    }
    .footerContacts {
      border-bottom: none;
      border-right: 1px solid #f0f0f0;
      justify-content: flex-start;

      img {
        margin-right: 1rem;
      }
    }
    .footerAbout {
      border-bottom: none;
    }
    p {
      font-size: 0.75rem;
    }
  }
`;
