import styled from "styled-components";

export const Card = styled.div`
  background: #ffffff;
  display: flex;
  flex-direction: column;
  font-size: 0.75rem;
  justify-content: center;
  color: #000000;
  /* border: 1px solid #808080; */
  border-radius: 0.5rem;
  font-family: "Roboto", sans-serif;
  text-align: center;
  box-shadow: 0px 0px 14px -2px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 0px 0px 14px -2px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 14px -2px rgba(0, 0, 0, 0.75);

  :hover {
    background: #e8e8e8;
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
    :last-child {
      margin-bottom: 2rem;
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

  @media screen and (min-width: 768px) {
    margin: 0 auto;
    width: 80%;
  }

  @media screen and (min-width: 1024px) {
    margin: 0 auto;
    width: 60%;
  }

  @media screen and (min-width: 1201px) {
    margin: 0 auto;
    width: 50%;
  }
`;
