import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import RegularSection from "../components/RegularSection/RegularSection";
import Hero from "../components/Hero/Hero";
import Loading from "../components/Loading/Loading";
import CardClinicPayment from "../components/CardClinicPayment/CardClinicPayment";
import Notification from "../components/Notification/Notification";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSchool } from "@fortawesome/free-solid-svg-icons";

const Clinic = () => {
  const queryParams = new URLSearchParams(window.location.search);
  const id = queryParams.get("id");

  const newParams = {
    id: id,
  };

  const { state } = useLocation();
  const [error, setError] = useState();
  const [clinics, setClinics] = useState([]);
  const [clinicData, setClinicData] = useState([]);

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

  if (clinicData.length === 0 || clinics.length === 0) {
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
          <CardClinicPayment
            clinics={clinics}
            clinicData={clinicData}
            newParams={newParams}
            state={state}
          />
        </div>
      </RegularSection>
    </>
  );
};

export default Clinic;
