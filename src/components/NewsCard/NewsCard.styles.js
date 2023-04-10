import styled from "styled-components";

export const NewsCard = styled.div`
  border-bottom: 1px solid #c4c4c4;
  display: flex;
  flex-direction: column;
  font-family: "Roboto", sans-serif;
  justify-content: flex-start;
  margin: 2rem auto;
  padding-bottom: 1rem;
  width: 100%;

  a {
    color: #7373f2;
    font-size: 0.75rem;
    text-decoration: none;
  }

  .licenserequestintro {
    max-height: 4rem;
    overflow: hidden;

    h2 {
      color: #009cde;
      font-size: 1rem;
    }
  }

  .licenserequestintro > p {
    text-align: left;
    white-space: pre-wrap;
  }

  p {
    font-size: 0.75rem;
  }
  .newsDate {
    color: #c4c4c4;
    margin: 0;
    font-size: 0.75rem;
    text-align: right;
  }

  @media screen and (min-width: 768px) {
    .licenserequestintro {
      max-height: 5rem;
      h2 {
        font-size: 1.25rem;
      }
      p {
        font-size: 1rem;
      }
    }
  }

  @media screen and (min-width: 1024px) {
    .licenserequestintro {
      max-height: 6rem;
      h2 {
        font-size: 1.5rem;
      }
    }
  }
`;
