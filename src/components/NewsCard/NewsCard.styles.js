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

  .licenserequestintro {
    max-height: 5rem;
    overflow: hidden;
  }

  .licenserequestintro > p {
    text-align: left;
    white-space: pre-wrap;
  }
  h2 {
    font-size: 1rem;
  }
  .newsDate {
    color: #c4c4c4;
    margin: 0;
    font-size: 0.75rem;
    text-align: right;
  }
`;
