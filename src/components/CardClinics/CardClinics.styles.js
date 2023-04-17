import styled from "styled-components";

export const CardClinics = styled.div`
  .usercliniccard {
    background: #ffffff;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    font-size: 0.75rem;
    border-radius: 0.5rem;
    font-family: "Roboto", sans-serif;
    text-align: center;
    box-shadow: 0px 0px 14px -2px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: 0px 0px 14px -2px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 14px -2px rgba(0, 0, 0, 0.75);
  }
  .usercliniccardsvg {
    align-items: center;
    display: flex;
    justify-content: center;
    margin-top: 5rem;
    width: 30%;
    svg {
      color: #009cde;
      height: 3rem;
    }
  }

  .usercliniclistwrapper {
    height: 100%;
    width: 70%;
  }
  .clinicslist {
    align-self: flex-end;
    display: flex;
    flex-direction: column;
    font-size: 0.75rem;
    width: 100%;

    li {
      font-size: 0.5rem;
    }
  }
  h3 {
    color: #012169;
    font-weight: 700;
    font-size: 0.75rem;
    display: flex;
    flex-direction: column;
    margin-top: 1.5rem;
    width: 100%;
    span {
      font-size: 1rem;
      color: #009cde;
    }
  }
  .userclinicoption {
    width: 100%;
  }

  h5 {
    color: #808080;
  }

  input {
    display: flex;
    align-self: flex-start;
    margin: 1rem 0 0.5rem 1rem;
    margin-right: 1rem;
  }
  span {
    font-weight: 700;
    color: #012169;
  }
  ul {
    color: #012169;
    text-align: left;
    span {
      color: #009cde;
    }
  }

  @media screen and (min-width: 476px) {
    .clinicslist {
      ul {
        width: 90%;
      }
      li {
        font-size: 0.75rem;
      }
    }
  }

  @media screen and (min-width: 768px) {
    .usercliniccard {
      background: #f0f0f0;
      border-bottom: 1px solid #808080;
      border-radius: 0;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      font-size: 1rem;
      font-family: "Roboto", sans-serif;
      text-align: center;
      box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0);
      -webkit-box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0);
      -moz-box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0);
    }
    h3 {
      font-size: 1rem;
    }
    .usercliniccardsvg {
      margin-top: 4rem;
      justify-content: flex-start;
      svg {
        height: 4rem;
      }
    }
    .clinicslist {
      h3 {
        text-align: left;
      }
      li {
        font-size: 0.75rem;
      }
    }
  }

  @media screen and (min-width: 1024px) {
    width: 100%;
    .usercliniccardsvg {
      width: 20%;
    }
  }
`;
