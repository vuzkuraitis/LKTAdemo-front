import styled from "styled-components";

export const Checkbox = styled.div`
  .field {
    display: flex;
    flex-direction: row;
    align-items: center;
    font-family: "Roboto", sans-serif;
    font-size: 0.75rem;
  }

  .label {
    color: #000000;
  }
  input {
    border-radius: 0.25rem;
    border: 1px solid #bbbbbb;
    margin: 0.5rem 1rem 0.5rem 0;
    padding: 0.5rem;
  }
  span {
    color: #0000ff;
    cursor: pointer;

    :hover {
      text-decoration: underline;
    }
  }

  @media screen and (min-width: 768px) {
    .field {
      font-size: 1rem;
    }
  }
`;
