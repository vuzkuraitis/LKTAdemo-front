import styled from "styled-components";

export const CardUser = styled.div`
  .carduser {
    background: #ffffff;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    font-size: 0.75rem;
    justify-content: center;
    color: #000000;
    height: 15rem;
    border-radius: 0.5rem;
    font-family: "Roboto", sans-serif;
    text-align: center;
    box-shadow: 0px 0px 14px -2px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: 0px 0px 14px -2px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 14px -2px rgba(0, 0, 0, 0.75);
  }

  .cardusersvg {
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

  h5 {
    color: #012169;
  }

  h3 {
    color: #012169;
    font-weight: 400;
    font-size: 0.75rem;
    display: flex;
    flex-direction: column;
    text-align: left;
    width: 70%;
  }
  input {
    display: flex;
    align-self: flex-start;
    margin: 1rem 0 0.5rem 1rem;
    margin-right: 1rem;
  }
  span {
    color: #009cde;
    font-weight: 700;
  }

  @media screen and (min-width: 768px) {
    .carduser {
      background: #f0f0f0;
      border-bottom: 1px solid #808080;
      border-radius: 0;
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      font-size: 1rem;
      justify-content: center;
      box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0);
      -webkit-box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0);
      -moz-box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0);
    }
    .cardusersvg {
      justify-content: flex-start;
      svg {
        height: 4rem;
      }
    }
    h3 {
      font-weight: 700;
      font-size: 1rem;
      span {
        font-size: 0.75rem;
      }
    }
  }

  @media screen and (min-width: 1024px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    .cardusersvg {
      width: 10%;
    }
  }
`;
