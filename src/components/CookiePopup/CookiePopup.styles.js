import styled from "styled-components";

export const CookiePopup = styled.div`
  .CookieConsent {
    display: flex;
    flex-direction: column;
    /* align-items: flex-end; */
    border-radius: 1rem;
    padding: 1rem 1.5rem;
    background: #7373f2;
    color: #ffffff;
    font-family: "Roboto", sans-serif;
    font-size: 0.75rem;
    position: fixed;
    top: 90%;
    left: 50%;
    right: auto;
    bottom: auto;
    transform: translate3d(-50%, -50%, 9999990px);
    text-align: justify;
    width: 80%;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
  }

  .coockiepolicylink {
    margin: 0 0.2rem;
  }

  .overlayclass {
    position: fixed;
    background-color: rgba(0, 0, 0, 0.5);
    left: 0;
    top: 0;
    width: 100%;
    height: 100vh;
    z-index: 9999;
  }
  #rcc-confirm-button {
    background: #7373f2;
    color: #ffffff;
    border: 1px solid #ffffff;
    border-radius: 0.5rem;
    margin-top: 1rem;
    padding: 0.3rem 0.7rem;
  }

  #rcc-decline-button {
    background: #7373f2;
    color: #000000;
    border: 1px solid #ffffff;
    border-radius: 0.5rem;
    margin-top: 1rem;
    padding: 0.3rem 0.7rem;
    margin-right: 1rem;
  }

  span {
    color: #0000ff;
    cursor: pointer;

    :hover {
      text-decoration: underline;
    }
  }

  @media screen and (min-width: 1024px) {
    .CookieConsent {
      width: 90%;
      div:nth-child(2) {
        display: flex;
        justify-content: flex-end;
      }
    }
  }
`;
