import styled from "styled-components";

export const SearchForm = styled.div`
  margin: 0 auto;
  width: 100%;
  h2 {
    color: #012169;
  }
  .formSection {
    margin: 0 auto;
    padding: 1rem;

    @media screen and (min-width: 768px) {
      width: 50%;
      margin: 0;
    }

    @media screen and (min-width: 1024px) {
      width: 40%;
    }
    @media screen and (min-width: 1201px) {
      width: 30%;
    }
  }
`;
