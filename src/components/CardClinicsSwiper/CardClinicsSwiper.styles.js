import styled from "styled-components";

export const CardClinicsSwiper = styled.div`
  .carduserclinics {
    display: flex;
    flex-direction: column;
    font-size: 0.65rem;
    justify-content: center;
    color: #000000;
    border-radius: 0.5rem;
    font-family: "Roboto", sans-serif;
    text-align: center;
    padding-top: 1rem;
    padding-bottom: 1rem;

    :hover {
      background: #e8e8e8;
    }
  }
  .cliniccard {
    align-items: center;
    background: #ffffff;
    border-radius: 0.5rem;
    display: flex;
    flex-direction: column;
    margin: 1rem 0.5rem;
    padding-bottom: 0.5rem;
    box-shadow: 0px 0px 14px -2px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: 0px 0px 14px -2px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 14px -2px rgba(0, 0, 0, 0.75);
  }
  .cliniccarditem {
    font-size: 0.65rem;
    display: flex;
    justify-content: space-between;
    width: 70%;
  }
  p {
    margin: 0.5rem 0 0.5rem 0;
  }
  h4 {
    margin: 0.5rem 1rem 0.5rem 0;
  }

  h5 {
    color: #808080;
  }

  h3 {
    font-weight: 700;
    display: flex;
    flex-direction: column;
    margin: 0.5rem auto;
    width: 80%;
  }

  @media screen and (min-width: 768px) {
    .cliniccards {
      img {
        height: 10rem;
      }
    }
  }

  @media screen and (min-width: 1024px) {
    display: flex;
    flex-direction: column;
    width: 100%;

    .cliniccards {
      display: flex;
      width: 100%;
      justify-content: space-around;
    }

    .cliniccard {
      display: flex;
      width: 100%;
    }
  }
`;
