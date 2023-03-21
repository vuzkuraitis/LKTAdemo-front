import React, { useState, useEffect } from "react";
import Coach1 from "../assets/Treneris1.jpeg";
import Coach2 from "../assets/Treneris2.jpeg";
import Coach3 from "../assets/Treneris3.jpeg";
import Clinic1 from "../assets/seminaras1.jpeg";
import Clinic2 from "../assets/seminaras2.jpeg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, EffectFade } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import RegularSection from "../components/RegularSection/RegularSection";
import HeroUser from "../components/HeroUser/HeroUser";
import CardUser from "../components/CardUser/CardUser";
import CardPayment from "../components/CardPayment/CardPayment";
import CardClinics from "../components/CardClinics/CardClinics";
import Loading from "../components/Loading/Loading";
import CardCheckOut from "../components/CardCheckOut/CardCheckOut";
import * as MyPOSEmbedded from "mypos-embedded-checkout";
// import { useNavigate } from "react-router-dom";
import Notification from "../components/Notification/Notification";

const Account = () => {
  const [error, setError] = useState();
  const [users, setUsers] = useState([]);
  const [payments, setPayments] = useState([]);
  const [clinics, setClinics] = useState([]);
  const [active, setActive] = useState(false);

  const coachPhotos = [
    { id: 1, name: Coach1 },
    { id: 2, name: Coach2 },
    { id: 3, name: Coach3 },
  ];
  const clinicPhotos = [
    { id: 1, name: Clinic1 },
    { id: 2, name: Clinic2 },
  ];

  // const navigate = useNavigate();

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

    data[0].urlNotify = MyPOSEmbedded.IPC_URL + "/client/ipcNotify";
    console.log(data);
    setPayments(data);
  };
  useEffect(() => {
    getUserPaymentData();
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

  const callbackParams = {
    isSandbox: true,
    onSuccess: function (data) {
      const updatePayment = async () => {
        try {
          const res = await fetch(
            `${process.env.REACT_APP_BACKEND_URL}/v1/license/account-payment-verification`,
            {
              method: "POST",
              headers: {
                authorization: `Bearer ${localStorage.getItem("token")}`,
                "Content-Type": "application/json",
              },
              body: JSON.stringify(data),
            }
          );
          const returnData = await res.json();

          if (returnData.dataerror) {
            return setError(returnData.err);
          }
          return setError(returnData.msg);
        } catch (err) {
          return setError(err.message);
        }
      };
      updatePayment();

      // navigate("/payment");
      console.log("success callback");
      console.log(data);
    },
    onError: function (data) {
      console.log(data);
      console.log("error");
    },
  };
  const customization = {
    payButtonBackgroundColor: "#7373f2",
    payButtonBorderColor: "#000000",
  };

  if (users.length < 0 || payments.length < 0) {
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
        <HeroUser users={users}></HeroUser>
        <div className="account">
          <CardUser users={users} />
          <div className="accountSwiper">
            <h5>Ką mes, Kur mes, Kaip mes:</h5>
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
              {coachPhotos.map((coachPhoto) => (
                <SwiperSlide className="swiperslide" key={coachPhoto.id}>
                  <img
                    src={coachPhoto.name}
                    alt="lkta"
                    id={coachPhoto.id}
                    key={coachPhoto.id}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="accountStatus">
            <h5>Licenzijos statusas:</h5>
            <CardPayment
              payments={payments}
              active={active}
              setActive={setActive}
              handleClick={() => {
                MyPOSEmbedded.createPayment(
                  "embeddedCheckout",
                  payments[0],
                  callbackParams,
                  customization
                );
                setActive(!active);
              }}
            />
            <div className="lktraBall"></div>
          </div>
          <CardCheckOut
            id="embeddedCheckout"
            active={active}
            handleClick={() => {
              setActive(active);
              window.location.reload();
            }}
          />

          <div className="clinicSwiper">
            <h5>Informacija treneriui:</h5>
            <CardClinics clinics={clinics} />
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
                  <img
                    src={clinicPhoto.name}
                    alt="lktraCinic"
                    id={clinicPhoto.id}
                    key={clinicPhoto.id}
                  />
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
