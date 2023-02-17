import styled from "styled-components";

export const RegularSection = styled.div`
  font-family: "Roboto", sans-serif;
  margin: 6rem auto 1rem auto;
  width: 80%;

  .paymentexpl {
    font-size: 0.75rem;
  }

  .paymentexpl > p {
    color: #808080;
  }

  .paymentexpl > p > span {
    color: #808080;
    font-weight: 700;
    display: flex;
  }

  .cookies {
    text-align: justify;
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

  @media screen and (min-width: 768px) {
    width: 70%;
  }

  @media screen and (min-width: 1024px) {
    height: calc(100% - (6rem));
    width: 70%;
    .account {
      display: flex;
      flex-wrap: wrap;
      flex-direction: row;
      justify-content: space-between;
    }
    .redirect {
      display: flex;

      p {
        margin: 0.3rem 1rem 0.3rem 0;
      }
      button {
        font-size: 0.75rem;
        padding: 0 0.5rem;
      }
    }
    .settings {
      display: flex;
      flex-wrap: wrap;
      flex-direction: row;
      justify-content: space-between;
    }
  }
`;
