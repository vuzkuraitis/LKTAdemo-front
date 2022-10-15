import styled from "styled-components";

export const RegularSection = styled.div`
  font-family: "Roboto", sans-serif;
  min-height: 80vh;
  margin: 6rem auto 1rem auto;
  width: 80%;

  @media screen and (min-width: 768px) {
    width: 70%;
  }

  @media screen and (min-width: 1024px) {
    width: 60%;
  }
`;
