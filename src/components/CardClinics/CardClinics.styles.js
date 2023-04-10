import styled from "styled-components";

export const CardClinics = styled.div`
  .carduser {
    background: #ffffff;
    display: flex;
    flex-direction: column;
    font-size: 0.75rem;
    justify-content: center;
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

  h3 {
    color: #012169;
    font-weight: 400;
    display: flex;
    flex-direction: column;
    margin: 0.5rem auto;
    width: 80%;
    span {
      color: #009cde;
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
    color: #012169;
  }
  ul {
    color: #012169;
    text-align: left;
    span {
      color: #009cde;
    }
  }

  @media screen and (min-width: 1024px) {
    display: flex;
    flex-direction: column;
    width: 50%;

    .carduser {
      height: 55vh;
      padding-top: 0;
      padding-bottom: 0;
      border-radius: 0.5rem 0 0 0.5rem;
      box-shadow: -5px 0px 14px -2px rgba(0, 0, 0, 0.75);
      -webkit-box-shadow: -5px 0px 14px -2px rgba(0, 0, 0, 0.75);
      -moz-box-shadow: -5px 0px 14px -2px rgba(0, 0, 0, 0.75);
    }
  }
`;
