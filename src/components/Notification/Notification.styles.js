import styled from "styled-components";

export const Notification = styled.div`
  align-items: center;
  display: flex;
  background: #bccef8;
  border-radius: 0.75rem;
  flex-direction: row;
  justify-content: space-between;
  font-size: 0.75rem;
  font-family: "Roboto", sans-serif;
  padding: 2rem 1rem 2rem 1rem;
  z-index: 9998;

  @media screen and (min-width: 768px) {
    font-size: 1rem;
  }
`;
export const RemoveButton = styled.button`
  border: 1px solid #ffffff;
  border-radius: 50%;
  background: #d0c9c0;
  color: #ffffff;
  font-size: 0.75rem;
  position: relative;
  top: -1.5rem;
  height: 1.5rem;
  width: 1.5rem;

  :active {
    border: 1px solid #000000;
    box-shadow: 0px 0px 0px 2px rgba(0, 0, 0, 0.5);
    color: #000000;
    transform: translateY(2px);
  }
`;
