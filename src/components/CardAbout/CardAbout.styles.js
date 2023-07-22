import styled from "styled-components";

export const CardAbout = styled.div`
  background: #ffffff;
  display: flex;
  flex-direction: column;
  font-size: 0.75rem;
  justify-content: center;
  color: #808080;
  border-radius: 0.5rem;
  font-family: "Roboto", sans-serif;
  text-align: center;
  margin: 1.5rem 0 1.5rem 0;
  box-shadow: 0px 0px 14px -2px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 0px 0px 14px -2px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 14px -2px rgba(0, 0, 0, 0.75);

  .aboutper {
    img {
      margin: 0 auto 1rem;
      display: block;
      width: 80%;
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

  @media screen and (min-width: 768px) {
    width: 48%;
  }

  @media screen and (min-width: 1024px) {
    width: 48%;
  }
`;
