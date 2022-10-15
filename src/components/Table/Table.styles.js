import styled from "styled-components";

export const Table = styled.div`
  border-collapse: collapse;
  color: #000000;
  font-size: 0.75rem;

  table {
    width: 100%;
    border: 1px solid #808080;
    border-spacing: 0;
  }

  thead {
    background: #808080;
    color: #ffffff;
  }

  th:nth-child(1) {
    text-align: left;
    width: 70%;
  }

  td:nth-child(2) {
    text-align: center;
    border-left: 1px solid #808080;
  }

  tbody > tr:hover {
    color: #808080;
    cursor: pointer;
  }

  @media screen and (min-width: 768px) {
    font-size: 1rem;
  }
`;
