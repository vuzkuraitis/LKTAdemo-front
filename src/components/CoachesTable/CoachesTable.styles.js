import styled from "styled-components";

export const CoachesTable = styled.div`
  background: #ffffff;
  display: flex;
  flex-direction: column;
  font-size: 0.4rem;
  justify-content: center;
  color: #000000;
  border: 1px solid #808080;
  border-radius: 0.5rem;
  font-family: "Roboto", sans-serif;
  text-align: center;
  margin-top: 2rem;

  :hover {
    background: #e8e8e8;
  }

  tr {
    width: 100%;
  }

  span {
    font-weight: 700;
  }
`;
