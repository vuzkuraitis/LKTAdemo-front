import styled from "styled-components";

export const Button = styled.button`
  background: #7373f2;
  border: 0.05rem solid black;
  border-radius: 0.5rem;
  color: #ffffff;
  cursor: pointer;
  font-family: "Roboto", sans-serif;
  padding: 0.5rem 1rem;

  :hover {
    background: #3c3cab;
  }

  a {
    text-decoration: none;
    color: #ffffff;
    padding: 0.5rem 2.5rem;
  }
`;
