import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import RegularSection from "../components/RegularSection/RegularSection";
import HeroUser from "../components/HeroUser/HeroUser";
import Loading from "../components/Loading/Loading";
import CardClinicPayment from "../components/CardClinicPayment/CardClinicPayment";
import CardCheckOut from "../components/CardCheckOut/CardCheckOut";
import * as MyPOSEmbedded from "mypos-embedded-checkout";
import Notification from "../components/Notification/Notification";
import { useNavigate } from "react-router-dom";

const Clinic = () => {
  const queryParams = new URLSearchParams(window.location.search);
  const id = queryParams.get("id");

  const newParams = {
    id: id,
  };

  const { state } = useLocation();
  console.log(state);

  const [error, setError] = useState();
  const [users, setUsers] = useState([]);
  const [clinics, setClinics] = useState([]);
  const [clinicData, setClinicData] = useState([]);
  const [active, setActive] = useState(false);
  const [successData, setSuccessData] = useState([]);

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

  const callbackParams = {
    isSandbox: true,
    onSuccess: function (data) {
      const updateClinicPayment = async () => {
        try {
          const res = await fetch(
            `${process.env.REACT_APP_BACKEND_URL}/v1/clinics/clinic-payment-verification`,
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
      updateClinicPayment();
      console.log("success callback");
      console.log(data);
      return setSuccessData({ data, status: "completed" });
    },
    onError: function () {
      console.log("error");
    },
  };

  const customization = {
    payButtonBackgroundColor: "#7373f2",
    payButtonBorderColor: "#000000",
  };

  if (clinicData.length === 0 || clinics.length === 0) {
    <Loading />;
  }

  console.log(clinics);
  console.log(clinicData);
  console.log(successData);

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
          <CardClinicPayment
            active={active}
            setActive={setActive}
            clinics={clinics}
            clinicData={clinicData}
            newParams={newParams}
            state={state}
            handleClick={() => {
              MyPOSEmbedded.createPayment(
                "embeddedCheckout",
                state[0],
                callbackParams,
                customization
              );
              setActive(!active);
            }}
          />
          <CardCheckOut
            id="embeddedCheckout"
            active={active}
            handleClick={() => {
              setActive(active);
              successData.status === "completed"
                ? navigate("/account/clinics")
                : window.location.reload();
            }}
          />
        </div>
      </RegularSection>
    </>
  );
};

export default Clinic;
