import styled from "styled-components";

export const TextareaInput = styled.div`
  .field {
    display: flex;
    flex-direction: column;
    font-family: "Roboto", sans-serif;
  }
  .label {
    color: #000000;
  }
  .areainput {
    min-height: 10rem;
    border-radius: 0.25rem;
    border: 1px solid #bbbbbb;
    margin: 0.5rem 0;
    padding: 0.5rem;
    resize: vertical;
  }

  textarea {
    resize: vertical;
  }
`;
