import styled from "styled-components";

export const ChangeEmailForm = styled.div`
  .settingsSection {
    background: #ffffff;
    display: flex;
    flex-direction: column;
    font-size: 0.75rem;
    justify-content: center;
    color: #000000;
    border: 1px solid #808080;
    border-radius: 0.5rem;
    font-family: "Roboto", sans-serif;
    text-align: center;
    /* padding-top: 1rem;
  padding-bottom: 1rem; */
    box-shadow: 0px 0px 14px -2px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: 0px 0px 14px -2px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 14px -2px rgba(0, 0, 0, 0.75);

    :hover {
      background: #e8e8e8;
    }
    margin: 0 auto;
    padding: 1rem;
  }

  h5 {
    color: #808080;
  }

  @media screen and (min-width: 1024px) {
    width: 45%;
  }
`;
