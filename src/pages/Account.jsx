import React, { useState, useEffect } from "react";
import Clinic1 from "../assets/Original.jpg";
import Clinic2 from "../assets/LKTA.jpeg";
import Clinic3 from "../assets/lkflogo.jpeg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, EffectFade } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import RegularSection from "../components/RegularSection/RegularSection";
import Hero from "../components/Hero/Hero";
import CardUser from "../components/CardUser/CardUser";
import CardPayment from "../components/CardPayment/CardPayment";
import CardClinics from "../components/CardClinics/CardClinics";
import Loading from "../components/Loading/Loading";
import { useNavigate } from "react-router";
import Notification from "../components/Notification/Notification";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import CardClinicsHistory from "../components/CardClinicsHistory/CardClinicsHistory";

const Account = () => {
  const [error, setError] = useState();
  const [users, setUsers] = useState([]);
  const [payments, setPayments] = useState([]);
  const [clinics, setClinics] = useState([]);
  const [clinicPayments, setClinicPayments] = useState([]);
  const [licensePrice, setLicensePrice] = useState([]);
  const [clinicHistory, setClinicHistory] = useState([]);

  const clinicPhotos = [
    { id: 1, name: Clinic1 },
    { id: 2, name: Clinic2 },
    { id: 3, name: Clinic3 },
  ];

  console.log(payments);

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

  const getPriceData = async () => {
    const res = await fetch(
      `${process.env.REACT_APP_BACKEND_URL}/v1/users/price`,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    const data = await res.json();
    setLicensePrice(data);
  };
  useEffect(() => {
    getPriceData();
  }, []);

  const getUserPaymentData = async () => {
    const res = await fetch(
      `${process.env.REACT_APP_BACKEND_URL}/v1/license/account-payment`,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    const data = await res.json();
    setPayments(data);
  };
  useEffect(() => {
    getUserPaymentData();
  }, []);

  const getClinicHistory = async () => {
    const res = await fetch(
      `${process.env.REACT_APP_BACKEND_URL}/v1/clinics/clinic-history`,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    const data = await res.json();
    setClinicHistory(data);
  };
  useEffect(() => {
    getClinicHistory();
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

  if (users.length < 0 || payments.length < 0 || licensePrice.length < 0) {
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
        <Hero title="Tavo paskyra">
          <FontAwesomeIcon icon={faUser} beatFade />
        </Hero>
        <div className="account">
          <div className="accountStatus">
            <CardUser users={users} />
            <CardPayment payments={payments} />
          </div>
          <div className="clinicSwiper">
            <CardClinics
              payments={payments}
              licensePrice={licensePrice}
              clinics={clinics}
              clinicPayments={clinicPayments}
              initiatePayment={initiatePayment}
            />
            <CardClinicsHistory clinicHistory={clinicHistory} />
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
              {clinicPhotos.map((clinicPhoto) => (
                <SwiperSlide className="swiperslide" key={clinicPhoto.id}>
                  <div className="logodiv">
                    <img
                      className="logoimg"
                      src={clinicPhoto.name}
                      alt="lktraCinic"
                      id={clinicPhoto.id}
                      key={clinicPhoto.id}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </RegularSection>
    </>
  );
};

export default Account;
