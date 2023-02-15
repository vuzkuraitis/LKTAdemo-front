import React from "react";
import { Link } from "react-router-dom";
import Home1 from "../assets/LKTA5.jpeg";
import Home2 from "../assets/LKTA4.jpeg";
import Home3 from "../assets/LKTAnew.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, EffectFade } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import InfoCard from "../components/InfoCard/InfoCard";
import Button from "../components/Button/Button";
import CookiePopup from "../components/CookiePopup/CookiePopup";

const Home = () => {
  const photos = [Home1, Home2];
  const lktalogo1 = Home3;

  return (
    <>
      <div className="intro">
        <CookiePopup />
        <div className="homeswiper">
          <Swiper
            modules={[Autoplay, Navigation, EffectFade]}
            navigation
            effect={"fade"}
            speed={600}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            slidesPerView={1}
            spaceBetween={0}
            loop={true}
            className="myswiper"
          >
            {photos.map((photo) => (
              <SwiperSlide className="swiperslide">
                <img src={photo} alt="lkta" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="lktalogo">
          <h2>Lithuanian Basketball Coaches Association</h2>
          <img src={lktalogo1} alt="lktalogo" className="imagelogo" />
        </div>
      </div>
      <InfoCard
        title="Check your license availability"
        subtitle="If you are already a member of our organisation, you can easily
              check your license availability and the upcoming clinics."
      >
        <Link to="/license">
          <Button type="button">Check Here</Button>
        </Link>
      </InfoCard>
      <InfoCard
        title="Become a member of our organisation"
        subtitle="If you are not a member of our organisation, you can become one.
        Just follow simple steps."
        buttonText="Click Here"
      >
        <Link to="/register">
          <Button type="button">Click Here</Button>
        </Link>
      </InfoCard>
    </>
  );
};

export default Home;
