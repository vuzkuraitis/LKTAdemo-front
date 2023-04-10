import styled from "styled-components";

export const SelectedNewsCard = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Roboto", sans-serif;
  justify-content: flex-start;
  margin: 2rem auto;
  padding-bottom: 1rem;
  width: 100%;

  .newsContainer {
    p {
      text-align: left;
      white-space: pre-wrap;
    }
    h2 {
      color: #009cde;
      font-size: 1rem;
    }
  }

  .newsDate {
    color: #c4c4c4;
    margin: 0;
    font-size: 0.75rem;
    text-align: right;
  }

  @media screen and (min-width: 768px) {
    .newsContainer {
      h2 {
        font-size: 1.25rem;
      }
      p {
        font-size: 1rem;
      }
    }
  }

  @media screen and (min-width: 1024px) {
    .newsContainer {
      max-height: 6rem;
      h2 {
        font-size: 1.5rem;
      }
    }
  }
`;
