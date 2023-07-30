import React from "react";
import { Link } from "react-router-dom";
import Home1 from "../assets/Vaikinai.jpeg";
import Home2 from "../assets/merginos.jpeg";
import Home3 from "../assets/LKTAnew.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, EffectFade } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import InfoCard from "../components/InfoCard/InfoCard";
import Button from "../components/Button/Button";
import CookiePopup from "../components/CookiePopup/CookiePopup";
import Seo from "../components/Seo/Seo";

const Home = () => {
  const photos = [
    { id: 1, name: Home1 },
    { id: 2, name: Home2 },
  ];
  const lktalogo1 = Home3;

  return (
    <>
      <Seo
        title="Lietuvos Krepšinio Trenerių Asociacija"
        description="Titulinis"
        type="webapp"
        name="Krepšinio Treneris"
      />
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
              <SwiperSlide className="swiperslide" key={photo.id}>
                <img src={photo.name} alt="lkta" id={photo.id} key={photo.id} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="lktalogo">
          <h2>Lietuvos Krepšinio Trenerių Asociacija</h2>
          <img src={lktalogo1} alt="lktalogo" className="imagelogo" />
        </div>
      </div>
      <InfoCard
        title="Licenzijos Galiojimas"
        subtitle="Jeigu jau esate prisiregistravęs, čia galite labai lengvai patikrinti savo lincezijos statusą."
      >
        <Link to="/license">
          <Button type="button">Tikrinti</Button>
        </Link>
      </InfoCard>
      <InfoCard
        title="Tapk mūsų Asociacijos nariu"
        subtitle="Jeigu esate Asociacijos narys, bet dar nesate prisiregistravę, tai galite atlikti labai paprastai."
        buttonText="Registruotis"
      >
        <Link to="/register">
          <Button type="button">Registruotis</Button>
        </Link>
      </InfoCard>
    </>
  );
};

export default Home;
