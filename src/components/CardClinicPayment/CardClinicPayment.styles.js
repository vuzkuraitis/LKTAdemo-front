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
    display: flex;
    justify-content: space-between;
    width: 70%;
  }

  .cliniccarditemwrapper {
    display: flex;
    flex-direction: column;
    width: 70%;
    .cliniccarditem {
      font-size: 0.5rem;
      display: flex;
      justify-content: space-between;
      width: 100%;
    }
    button {
      margin: 0 auto;
      width: 6rem;
    }
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
    color: #009cde;
    margin: 0.5rem 0 0.5rem 0;
  }
  h4 {
    color: #012169;
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

  @media screen and (min-width: 476px) {
    .cliniccarditemwrapper {
      .cliniccarditem {
        font-size: 0.75rem;
      }
    }
  }

  @media screen and (min-width: 768px) {
    .cliniccard {
      align-items: flex-start;
      justify-content: center;
      background: #f0f0f0;
      border-bottom: 1px solid #808080;
      border-radius: 0;
      display: flex;
      flex-wrap: wrap;
      margin: 0;
      height: 15rem;
      padding-bottom: 0.5rem;
      width: 100%;
      box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0);
      -webkit-box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0);
      -moz-box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0);
    }
    .clinicsimg {
      display: flex;
      align-items: center;
      height: 100%;
    }
    .cliniccarditem {
      align-self: flex-start;
      width: 60%;
    }
    img {
      height: 10rem;
    }
  }

  @media screen and (min-width: 1024px) {
    width: 100%;
    .cliniccards {
      width: 100%;
    }
    .cliniccarditemwrapper {
      width: 60%;
      .cliniccarditem {
        font-size: 1rem;
      }
    }
    img {
      height: 12rem;
    }
  }
`;
