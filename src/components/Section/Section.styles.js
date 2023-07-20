import styled from "styled-components";

export const Section = styled.div`
  font-family: "Roboto", sans-serif;
  margin: 3rem 0 1rem 0;

  @media screen and (min-width: 1024px) {
    margin: 3rem 0 1rem 0;
    display: flex;
    justify-content: space-between;
    .formSection {
      width: 48%;
    }
  }
`;
