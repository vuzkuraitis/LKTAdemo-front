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
  }
`;
