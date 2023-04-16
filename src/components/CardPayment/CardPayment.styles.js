import styled from "styled-components";

export const CardPayment = styled.div`
  .cardpayment {
    background: #ffffff;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    font-size: 0.75rem;
    justify-content: center;
    color: #000000;
    height: 15rem;
    margin-top: 2rem;
    border-radius: 0.5rem;
    font-family: "Roboto", sans-serif;
    text-align: center;
    box-shadow: 0px 0px 14px -2px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: 0px 0px 14px -2px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 14px -2px rgba(0, 0, 0, 0.75);
  }

  .carduserpayment {
    align-items: center;
    display: flex;
    justify-content: center;
    height: 100%;
    width: 30%;

    svg {
      color: #009cde;
      height: 3rem;
    }
  }

  .cardpaymentwrapper {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 70%;
  }

  h5 {
    color: #808080;
  }

  .licensestatus {
  }
  h3 {
    color: #012169;
    font-weight: 400;
    font-size: 0.75rem;
    width: 100%;

    button {
      width: 100%;
    }
  }
  input {
    display: flex;
    align-self: flex-start;
    margin: 1rem 0 0.5rem 1rem;
    margin-right: 1rem;
  }
  span {
    font-weight: 700;
  }
  .status {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    .red {
      width: 0.75rem;
      height: 0.75rem;
    }
    .green {
      width: 0.75rem;
      height: 0.75rem;
    }
  }

  .red {
    width: 0.5rem;
    height: 0.5rem;
    background: #ff0000;
    border: 1px solid #808080;
    border-radius: 2rem;
    margin-left: 0.5rem;
  }

  .green {
    width: 0.5rem;
    height: 0.5rem;
    background: #14d500;
    border: 1px solid #808080;
    border-radius: 2rem;
    margin-left: 0.5rem;
  }

  .paymentexpl {
    width: 100%;
  }

  .paymentexpl {
    font-size: 0.75rem;
  }

  .paymentexpl > p {
    font-size: 0.5rem;
    text-align: left;
    color: #808080;
  }

  .paymentexpl > p > span {
    color: #808080;
    font-weight: 700;
    display: flex;
  }

  @media screen and (min-width: 768px) {
    .cardpayment {
      background: #f0f0f0;
      border-bottom: 1px solid #808080;
      border-radius: 0;
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      font-size: 1rem;
      justify-content: center;
      margin-top: 2rem;
      font-family: "Roboto", sans-serif;
      text-align: center;
      box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0);
      -webkit-box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0);
      -moz-box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0);
    }
    .carduserpayment {
      justify-content: flex-start;
      svg {
        height: 4.5rem;
      }
    }
    h3 {
      width: 60%;
    }
    .status {
      font-weight: 700;
      font-size: 1rem;
    }
    .paymentexpl > p {
      font-size: 0.75rem;
    }
  }

  @media screen and (min-width: 1024px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    .carduserpayment {
      width: 10%;
    }
    h3 {
      width: 40%;
    }
  }
`;
