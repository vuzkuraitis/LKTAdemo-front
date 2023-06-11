import styled from "styled-components";

export const RegularSection = styled.div`
  min-height: calc(100vh - 6rem);
  font-family: "Roboto", sans-serif;
  margin: 6rem auto 1rem auto;
  width: 80%;

  h2 {
    font-size: 1rem;
    color: #012169;
    text-align: center;
    width: 100%;
  }
  .account {
    margin-top: 2rem;
  }

  .cookies {
    text-align: justify;
  }
  .red {
    width: 0.75rem;
    height: 0.75rem;
    background: #ff0000;
    border: 1px solid #808080;
    border-radius: 2rem;
    margin-left: 0.5rem;
  }
  .green {
    width: 0.75rem;
    height: 0.75rem;
    background: #14d500;
    border: 1px solid #808080;
    border-radius: 2rem;
    margin-left: 0.5rem;
  }

  .accountSwiper,
  .clinicSwiper {
    margin-top: 2rem;
    .swiper {
      height: 30vh;
      width: 100%;
      margin-top: 1.5rem;
      border-radius: 0.5rem;
      box-shadow: 0px 0px 14px -2px rgba(0, 0, 0, 0.75);
      -webkit-box-shadow: 0px 0px 14px -2px rgba(0, 0, 0, 0.75);
      -moz-box-shadow: 0px 0px 14px -2px rgba(0, 0, 0, 0.75);
    }
    h2 {
      color: #012169;
    }
  }

  .accountClinics {
    margin-top: 2rem;
    background: none;
    .swiper {
      border: none;
      height: 25vh;
      width: 100%;
    }
  }

  .accountStatus {
    h2 {
      color: #012169;
    }
  }

  .clinicSwiper {
    margin-bottom: 3rem;
    .swiper {
      height: 30vh;
    }
    h5 {
      color: #012169;
    }
    .logodiv {
      background: #ffffff;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      width: 100%;

      img {
        display: block;
        width: 80%;
      }
    }
  }

  .newsContainer:nth-last-child(1) {
    border-bottom: none;
  }

  .settings > h4 {
    color: #808080;
  }

  @media screen and (min-width: 768px) {
    width: 70%;
    .clinicSwiper {
      .logodiv {
        img {
          width: 50%;
        }
      }
    }
  }

  @media screen and (min-width: 1024px) {
    height: calc(100% - (6rem));
    width: 70%;
    .account {
      margin-top: 0;
      display: flex;
      flex-wrap: wrap;
      flex-direction: row;
      justify-content: space-between;

      .accountSwiper {
        margin-top: 5rem;
        width: 50%;
        .swiper {
          height: 50vh;
          margin-top: 0;
          border-radius: 0 0.5rem 0.5rem 0;
          box-shadow: 5px 0px 14px -2px rgba(0, 0, 0, 0.75);
          -webkit-box-shadow: 5px 0px 14px -2px rgba(0, 0, 0, 0.75);
          -moz-box-shadow: 5px 0px 14px -2px rgba(0, 0, 0, 0.75);
        }
      }

      .accountClinics {
        width: 100%;
        .swiper {
          width: 100%;
        }
      }

      .clinicSwiper {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        width: 100%;

        h2 {
          font-size: 1.25rem;
          text-align: center;
          width: 100%;
        }
        .swiper {
          height: 40vh;
          width: 80%;
          border-radius: 0.5rem;
          margin-top: 2;
          box-shadow: 5px 0px 14px -2px rgba(0, 0, 0, 0.75);
          -webkit-box-shadow: 5px 0px 14px -2px rgba(0, 0, 0, 0.75);
          -moz-box-shadow: 5px 0px 14px -2px rgba(0, 0, 0, 0.75);
        }
        .logodiv {
          img {
            width: 40%;
          }
        }
      }
    }
    .settings {
      display: flex;
      flex-wrap: wrap;
      flex-direction: row;
      justify-content: space-between;
    }
    .accountStatus {
      margin-top: 2rem;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      width: 100%;

      h2 {
        font-size: 1.25rem;
        text-align: center;
        width: 100%;
      }
    }
  }
`;
