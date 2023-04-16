import styled from "styled-components";

export const CardCheckOut = styled.div`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.5);
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  z-index: 9998;
  border-radius: 4px;
  display: ${({ active }) => (active ? "block" : "none")};
  box-shadow: 0px 0px 14px -2px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 0px 0px 14px -2px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 14px -2px rgba(0, 0, 0, 0.75);

  .paymentDiv {
    border-radius: 4px;
    position: relative;
    top: 2rem;
    background: #ffffff;
    margin: 0 auto;
    width: 90%;

    .paymentError {
      text-align: center;
      padding: 2rem 0;
    }
  }

  .checkout {
    display: flex;
    justify-content: center;
    width: 100%;

    button {
      margin: 0.5rem;
      width: 90%;
    }
  }

  @media screen and (min-width: 660px) {
    padding-top: 2rem;
    .paymentDiv {
      padding-top: 1rem;
      width: 580px;
    }
    .checkout {
      margin: 0 auto;
      max-width: 580px;
    }
  }

  @media screen and (min-width: 1024px) {
    padding-top: 0;
    width: 100%;
    .paymentDiv {
      padding-top: 1rem;
      width: 580px;
    }
  }
`;
