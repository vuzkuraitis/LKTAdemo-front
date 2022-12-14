import styled from "styled-components";

export const CardInfo = styled.div`
  background: #ffffff;
  display: flex;
  flex-direction: column;
  font-size: 0.75rem;
  justify-content: center;
  color: #808080;
  border: 1px solid #808080;
  border-radius: 0.5rem;
  font-family: "Roboto", sans-serif;
  text-align: center;

  :hover {
    background: #e8e8e8;
  }

  p {
    margin: 1rem;
  }

  ul > li {
    text-align: left;
    line-height: 2rem;
  }

  @media screen and (min-width: 1024px) {
    margin: 3rem 0 1rem 0;
    width: 50%;
  }
`;
