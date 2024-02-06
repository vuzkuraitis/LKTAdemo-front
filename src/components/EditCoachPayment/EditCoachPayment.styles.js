import styled from "styled-components";

export const EditCoachPayment = styled.div`
  align-items: center;
  display: flex;
  background: rgba(0, 0, 0, 0.5);
  justify-content: center;
  font-size: 0.75rem;
  font-family: "Roboto", sans-serif;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9998;
  height: 100%;
  width: 100%;

  form {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background: #f0f0f0;
    border-radius: 0.35rem;
    font-size: 1rem;
    /* height: 10rem; */
    width: 90%;
    /* .field {
      min-width: 500px;
    } */
  }
  .selectedSeasonEdit {
    padding: 1rem;
    display: flex;
    justify-content: center;
    min-height: 10rem;
    width: 90%;
    border: 1px solid #808080;
    border-radius: 0.5rem;
    background: #ffffff;
    .editPlayerCont {
      height: 100%;
      width: 100%;
      /* display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 0.6rem; */
      .fieldDate {
        width: 100%;
      }
      .selectClass2 {
        font-size: 0.75rem;
        width: 100%;
        input {
          height: 0;
        }
      }
    }
  }
  .selectedSeasonEditCont {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 20%;
    :nth-child(1) {
      margin-right: 1rem;
    }
    :nth-child(2) {
      margin-right: 1rem;
    }
    :nth-child(3) {
      margin-right: 1rem;
    }
    :nth-child(4) {
      margin-right: 1rem;
    }
    h3 {
      text-align: center;
      border-bottom: 1px solid #808080;
      padding-bottom: 1rem;
      width: 80%;
    }
  }
  .clubandcheckbox {
    display: flex;
    justify-content: center;
    width: 100%;
    input {
      width: 7%;
    }
  }
  /* input {
    height: 34px;
    padding: 0 0.5rem;
    width: 100%;
  } */
  button {
    font-size: 0.75rem;
    margin: 0.5rem;
  }
`;
