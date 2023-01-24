import styled from "styled-components";

export const CardClinics = styled.div`
  .carduser {
    background: #ffffff;
    display: flex;
    flex-direction: column;
    font-size: 0.75rem;
    justify-content: center;
    color: #000000;
    border: 1px solid #808080;
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
    font-weight: 400;
    display: flex;
    flex-direction: column;
    margin: 0.5rem auto;
    width: 80%;
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
  ul {
    text-align: left;
  }

  @media screen and (min-width: 1024px) {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`;
