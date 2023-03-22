import styled from "styled-components";

export const CardClinicPayment = styled.div`
  .carduserclinics {
    display: flex;
    flex-direction: column;
    font-size: 0.75rem;
    justify-content: center;
    color: #000000;
    font-family: "Roboto", sans-serif;
    text-align: center;
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
  .cliniccard {
    align-items: center;
    background: #ffffff;
    border: 1px solid #808080;
    border-radius: 0.5rem;
    display: flex;
    flex-direction: column;
    margin: 1rem 0.5rem;
    padding-bottom: 0.5rem;
    box-shadow: 0px 0px 14px -2px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: 0px 0px 14px -2px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 14px -2px rgba(0, 0, 0, 0.75);

    :hover {
      background: #e8e8e8;
    }
  }
  .cliniccarditem {
    display: flex;
    justify-content: space-between;
    width: 70%;
  }
  img {
    height: 5rem;
    border-radius: 0.5rem;
    margin: 0.5rem;
    box-shadow: 0px 0px 14px -2px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: 0px 0px 14px -2px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 14px -2px rgba(0, 0, 0, 0.75);
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

      img {
        height: 15rem;
      }
    }

    .cliniccard {
      display: flex;
      width: 45%;
    }
  }
`;
