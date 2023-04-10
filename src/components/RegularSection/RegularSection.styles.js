import styled from "styled-components";
import ballPhoto1 from "../../assets/kamuolys.jpg";

export const RegularSection = styled.div`
  min-height: calc(100vh - 6rem);
  font-family: "Roboto", sans-serif;
  margin: 6rem auto 1rem auto;
  width: 80%;

  h2 {
    color: #012169;
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
    .swiper {
      height: 30vh;
      width: 100%;
      margin-top: 1.5rem;
      border-radius: 0.5rem;
      box-shadow: 0px 0px 14px -2px rgba(0, 0, 0, 0.75);
      -webkit-box-shadow: 0px 0px 14px -2px rgba(0, 0, 0, 0.75);
      -moz-box-shadow: 0px 0px 14px -2px rgba(0, 0, 0, 0.75);
    }
    h5 {
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

  .lktraBall {
    background-image: url(${ballPhoto1});
    background-position: center;
    background-size: cover;
    margin-top: 1.5rem;
    border-radius: 0.5rem;
    height: 15rem;
    width: 100%;
    box-shadow: 0px 0px 14px -2px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: 0px 0px 14px -2px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 14px -2px rgba(0, 0, 0, 0.75);
  }

  .accountStatus {
    h5 {
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
  }

  .newsContainer:nth-last-child(1) {
    border-bottom: none;
  }

  .settings > h4 {
    color: #808080;
  }

  @media screen and (min-width: 768px) {
    width: 70%;
  }

  @media screen and (min-width: 1024px) {
    height: calc(100% - (6rem));
    width: 70%;
    .account {
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

      .lktraBall {
        border-radius: 0.5rem 0 0 0.5rem;
        margin-top: 0;
        height: 50vh;
        width: 50%;
        box-shadow: -5px 0px 14px -2px rgba(0, 0, 0, 0.75);
        -webkit-box-shadow: -5px 0px 14px -2px rgba(0, 0, 0, 0.75);
        -moz-box-shadow: -5px 0px 14px -2px rgba(0, 0, 0, 0.75);
      }
      .clinicSwiper {
        margin-top: 5rem;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        width: 100%;

        h5 {
          text-align: center;
          width: 100%;
        }
        .swiper {
          height: 55vh;
          width: 50%;
          border-radius: 0 0.5rem 0.5rem 0;
          margin-top: 0;
          box-shadow: 5px 0px 14px -2px rgba(0, 0, 0, 0.75);
          -webkit-box-shadow: 5px 0px 14px -2px rgba(0, 0, 0, 0.75);
          -moz-box-shadow: 5px 0px 14px -2px rgba(0, 0, 0, 0.75);
        }
      }
    }
    .redirect {
      display: flex;

      p {
        margin: 0.3rem 1rem 0.3rem 0;
      }
      button {
        font-size: 0.75rem;
        padding: 0 0.5rem;
      }
    }
    .settings {
      display: flex;
      flex-wrap: wrap;
      flex-direction: row;
      justify-content: space-between;
    }
    .accountStatus {
      margin-top: 5rem;
      display: flex;
      flex-direction: row-reverse;
      flex-wrap: wrap;
      width: 100%;

      h5 {
        text-align: center;
        width: 100%;
      }
    }
  }
`;
