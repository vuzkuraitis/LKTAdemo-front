import styled from "styled-components";

export const CardPayment = styled.div`
  .cardpayment {
    background: #ffffff;
    display: flex;
    flex-direction: column;
    font-size: 0.75rem;
    justify-content: center;
    color: #000000;
    border-radius: 0.5rem;
    font-family: "Roboto", sans-serif;
    text-align: center;
    padding-top: 1rem;
    padding-bottom: 1rem;
    box-shadow: 0px 0px 14px -2px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: 0px 0px 14px -2px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 14px -2px rgba(0, 0, 0, 0.75);

    :hover {
      background: #e8e8e8;
    }
  }

  h5 {
    color: #808080;
  }

  .licensestatus {
  }
  h3 {
    color: #012169;
    font-weight: 400;
    margin: 0.5rem auto;
    width: 80%;

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
    justify-content: center;
  }

  .red {
    width: 0.75rem;
    height: 0.75rem;
    background: #ff0000;
    border: 1px solid #808080;
    border-radius: 2rem;
    margin-left: 0.5rem;
  }

  .green {
    width: 0.75rem;
    height: 0.75rem;
    background: #14d500;
    border: 1px solid #808080;
    border-radius: 2rem;
    margin-left: 0.5rem;
  }

  .paymentexpl {
    margin: 0 auto;
    width: 80%;
  }

  .paymentexpl {
    font-size: 0.75rem;
  }

  .paymentexpl > p {
    text-align: left;
    color: #808080;
  }

  .paymentexpl > p > span {
    color: #808080;
    font-weight: 700;
    display: flex;
  }

  @media screen and (min-width: 1024px) {
    width: 50%;
    .cardpayment {
      border-radius: 0 0.5rem 0.5rem 0;
      height: 50vh;
      padding-top: 0;
      padding-bottom: 0;
      box-shadow: 5px 0px 14px -2px rgba(0, 0, 0, 0.75);
      -webkit-box-shadow: 5px 0px 14px -2px rgba(0, 0, 0, 0.75);
      -moz-box-shadow: 5px 0px 14px -2px rgba(0, 0, 0, 0.75);
    }
  }
`;
