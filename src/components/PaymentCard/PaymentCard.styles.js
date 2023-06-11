import styled from "styled-components";

export const PaymentCard = styled.div`
  background: #ffffff;
  display: flex;
  flex-direction: row;
  font-size: 0.75rem;
  /* justify-content: space-around; */
  color: #009cde;
  border-radius: 0.5rem;
  font-family: "Roboto", sans-serif;
  margin-top: 1rem;
  text-align: center;
  box-shadow: 0px 0px 14px -2px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 0px 0px 14px -2px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 14px -2px rgba(0, 0, 0, 0.75);

  .redirect {
    width: 100%;
    p {
      color: #000000;
      margin: 0.75rem;
    }
    h1 {
      font-size: 1rem;
    }
  }

  button {
    margin-bottom: 1rem;
  }
  .paymentCardIcon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30%;
    svg {
      color: #009cde;
      height: 3rem;
    }
  }

  @media screen and (min-width: 768px) {
    .redirect {
      h1 {
        font-size: 1.25rem;
      }
    }
  }
  @media screen and (min-width: 1024px) {
    .redirect {
      h1 {
        font-size: 1.5rem;
      }
    }
  }
`;
