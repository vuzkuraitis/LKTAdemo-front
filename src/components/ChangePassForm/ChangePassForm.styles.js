import styled from "styled-components";

export const ChangePassForm = styled.div`
  .settingsSection {
    background: #ffffff;
    display: flex;
    flex-direction: column;
    font-size: 0.75rem;
    justify-content: center;
    color: #000000;
    border-radius: 0.5rem;
    font-family: "Roboto", sans-serif;
    text-align: center;
    box-shadow: 0px 0px 14px -2px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: 0px 0px 14px -2px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 14px -2px rgba(0, 0, 0, 0.75);

    margin: 0 auto;
    padding: 1rem;

    label {
      color: #012169;
    }
  }

  h3 {
    color: #012169;
  }

  .changepasssvg {
    margin-bottom: 1rem;
    svg {
      color: #009cde;
      height: 3rem;
    }
  }

  @media screen and (min-width: 768px) {
    width: 100%;
    .settingsSection {
      background: #f0f0f0;
      border-bottom: 1px solid #808080;
      border-radius: 0;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      font-size: 1rem;
      justify-content: flex-start;
      margin-top: 2rem;
      font-family: "Roboto", sans-serif;
      text-align: center;
      box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0);
      -webkit-box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0);
      -moz-box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0);

      form {
        width: 70%;
      }
    }
    .changepasssvg {
      align-items: center;
      display: flex;
      justify-content: flex-start;
      width: 30%;
    }
  }

  @media screen and (min-width: 1024px) {
    .settingsSection {
      .changepasssvg {
        width: 20%;
        svg {
          height: 4rem;
        }
      }
      form {
        width: 50%;
      }
    }
  }
`;
