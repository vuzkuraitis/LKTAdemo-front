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
import CardCheckOut from "../components/CardCheckOut/CardCheckOut";
import * as MyPOSEmbedded from "mypos-embedded-checkout";
import { useNavigate } from "react-router";
import Notification from "../components/Notification/Notification";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const Account = () => {
  const [error, setError] = useState();
  const [paymentError, setPaymentError] = useState();
  const [users, setUsers] = useState([]);
  const [payments, setPayments] = useState([]);
  const [clinics, setClinics] = useState([]);
  const [active, setActive] = useState(false);
  // const [paymentCard, setPaymentCard] = useState(false);

  const clinicPhotos = [
    { id: 1, name: Clinic1 },
    { id: 2, name: Clinic2 },
    { id: 3, name: Clinic3 },
  ];

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
      console.log(data.message.event);
      console.log("error");
      if (data.message.event === "error") {
        return setPaymentError("Mokėjimo klaida. Prašome pabandyti iš naujo");
      }
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
        <Hero title="Tavo paskyra">
          <FontAwesomeIcon icon={faUser} beatFade />
        </Hero>
        <div className="account">
          <div className="accountStatus">
            <h2>Licenzijos informacija ir statusas</h2>
            <CardUser users={users} />
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
                console.log(active);
              }}
            />
          </div>
          <CardCheckOut
            id="embeddedCheckout"
            active={active}
            paymentError={paymentError}
            handleClick={() => {
              setActive(!active);
              navigate(0);
            }}
          />
          <div className="clinicSwiper">
            <h2>Informacija treneriui</h2>
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
