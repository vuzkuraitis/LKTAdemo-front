import styled from "styled-components";

export const Card = styled.div`
  background: #ffffff;
  display: flex;
  flex-direction: column;
  font-size: 0.75rem;
  justify-content: center;
  color: #000000;
  border: solid 2px #000000;
  font-family: "Roboto", sans-serif;
  text-align: center;

  h3 {
    font-weight: 400;
    display: flex;
    flex-direction: column;
    margin: 0.5rem auto;
    width: 80%;
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
`;
