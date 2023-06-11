import React, { useState, useEffect } from "react";
import RegularSection from "../components/RegularSection/RegularSection";
import Hero from "../components/Hero/Hero";
import CardClinicsPayment from "../components/CardClinicsPayment/CardClinicsPayment";
import Loading from "../components/Loading/Loading";
import { useNavigate } from "react-router-dom";
import Notification from "../components/Notification/Notification";
import CardClinicsSwiper from "../components/CardClinicsSwiper/CardClinicsSwiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, EffectFade } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSchool } from "@fortawesome/free-solid-svg-icons";

const Clinics = () => {
  const [error, setError] = useState();
  const [users, setUsers] = useState([]);
  const [clinics, setClinics] = useState([]);
  const [clinicData, setClinicData] = useState([]);
  const [clinicPayments, setClinicPayments] = useState([]);

  const navigate = useNavigate();

  const getUserData = async () => {
    const res = await fetch(
      `${process.env.REACT_APP_BACKEND_URL}/v1/users/account`,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    const data = await res.json();
    setUsers(data);
  };
  useEffect(() => {
    getUserData();
  }, []);

  const getUserClinicsData = async () => {
    const res = await fetch(
      `${process.env.REACT_APP_BACKEND_URL}/v1/clinics/clinic-registration`,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    const data = await res.json();
    setClinicData(data);
  };
  useEffect(() => {
    getUserClinicsData();
  }, []);

  const getClinics = async () => {
    const res = await fetch(
      `${process.env.REACT_APP_BACKEND_URL}/v1/clinics/clinic`,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    const data = await res.json();
    setClinics(data);
  };
  useEffect(() => {
    getClinics();
  }, []);

  const initiatePayment = async (id) => {
    try {
      const res = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/v1/clinics/clinic-payment?id=${id}`,
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify(),
        }
      );
      const data = await res.json();

      if (data.err) {
        return setError(data.err);
      }
      setClinicPayments(data);

      navigate(`/clinics/clinic?id=${id}`, {
        state: data,
      });

      return console.log(clinicPayments);
    } catch (err) {
      return setError(err.message);
    }
  };

  if (!users || !clinics || !clinicData) {
    <Loading />;
  }

  return (
    <>
      <RegularSection>
        {error && (
          <Notification handleClick={() => setError(null)}>
            {error}
          </Notification>
        )}
        <Hero title="Kursai ir Seminarai">
          <FontAwesomeIcon icon={faSchool} beatFade />
        </Hero>
        <div className="account">
          <div className="accountClinics">
            <Swiper
              modules={[Autoplay, Navigation, EffectFade]}
              navigation
              effect
              loop={true}
              speed={9000}
              autoplay={{
                delay: 1,
                disableOnInteraction: false,
              }}
              slidesPerView={1}
              spaceBetween={50}
              breakpoints={{
                1024: {
                  slidesPerView: 2,
                  spaceBetween: 25,
                },
              }}
              className="myswiper"
            >
              {clinics.map((clinic) => (
                <SwiperSlide className="swiperslide" key={clinic.id}>
                  <CardClinicsSwiper
                    id={clinic.id}
                    value={clinic.id}
                    name={clinic.name}
                    place={clinic.place}
                    address={clinic.address}
                    hours={clinic.hours}
                    price={clinic.price}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <CardClinicsPayment
            clinics={clinics}
            clinicPayments={clinicPayments}
            clinicData={clinicData}
            initiatePayment={initiatePayment}
          />
        </div>
      </RegularSection>
    </>
  );
};

export default Clinics;
