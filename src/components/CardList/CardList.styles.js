import styled from "styled-components";
import Card from "../Card/Card";

export const CardList = styled.div`
  margin-top: 2rem;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
  }
`;

export const CardItem = styled(Card)`
  box-sizing: border-box;
  margin-bottom: 3rem;
  /* width: 100%; */
`;
