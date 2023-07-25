import styled from "styled-components";

export const CardMaterial = styled.div`
  margin-top: 2rem;
  .material {
    background: #ffffff;
    display: flex;
    flex-direction: column;
    /* flex-wrap: wrap; */
    font-size: 0.75rem;
    justify-content: center;
    color: #000000;
    height: 15rem;
    border-radius: 0.5rem;
    font-family: "Roboto", sans-serif;
    text-align: center;
    box-shadow: 0px 0px 14px -2px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: 0px 0px 14px -2px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 14px -2px rgba(0, 0, 0, 0.75);
  }

  .imgcontainer {
    height: 100px;
    width: 200px;
    margin: 0 auto;
     {
      img {
        display: block;
        width: 100%;
      }
    }
  }

  .materialContent {
    margin: 0 auto;
    width: 80%;
    h3 {
      text-align: center;
      width: 100%;
    }
    a {
      text-decoration: none;
    }
  }

  h5 {
    color: #012169;
  }

  h3 {
    color: #012169;
    font-weight: 400;
    font-size: 0.75rem;
    display: flex;
    flex-direction: column;
    text-align: left;
    width: 70%;
  }
  span {
    color: #009cde;
    font-weight: 700;
  }

  @media screen and (min-width: 768px) {
    .material {
      background: #f0f0f0;
      border-bottom: 1px solid #808080;
      border-radius: 0;
      display: flex;
      flex-direction: row;
      font-size: 1rem;
      align-items: center;
      justify-content: center;
      box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0);
      -webkit-box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0);
      -moz-box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0);
    }
    h3 {
      font-weight: 700;
    }
    .materialContent {
      p {
        font-size: 0.75rem;
      }
    }
  }

  @media screen and (min-width: 1024px) {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`;
