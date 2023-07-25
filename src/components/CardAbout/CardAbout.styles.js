import styled from "styled-components";

export const CardAbout = styled.div`
  background: #ffffff;
  display: flex;
  flex-direction: column;
  font-size: 0.75rem;
  align-items: center;
  color: #808080;
  border-radius: 0.5rem;
  font-family: "Roboto", sans-serif;
  text-align: center;
  margin: 1.5rem 0 1.5rem 0;
  box-shadow: 0px 0px 14px -2px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 0px 0px 14px -2px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 14px -2px rgba(0, 0, 0, 0.75);

  .aboutper {
    .img {
      display: flex;
      margin: 0 auto;
      height: 260px;
      width: 260px;
      img {
        background-size: cover;
        display: block;
      }
    }
  }

  .pazymejimas {
    border-radius: 0.5rem;
    display: block;
    width: 100%;
  }

  a {
    margin-bottom: 0.5rem;
  }

  li {
    text-align: left;
  }

  @media screen and (min-width: 768px) {
    width: 48%;
    .aboutper {
      .img {
        height: 250px;
        width: 250px;
      }
    }
  }

  @media screen and (min-width: 1024px) {
    width: 48%;
    .aboutper {
      .img {
        height: 280px;
        width: 280px;
      }
    }
  }
`;
