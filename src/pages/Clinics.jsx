import React, { useState, useEffect } from "react";
import RegularSection from "../components/RegularSection/RegularSection";
import HeroUser from "../components/HeroUser/HeroUser";
import CardClinicsPayment from "../components/CardClinicsPayment/CardClinicsPayment";
import Loading from "../components/Loading/Loading";
// import Notification from "../components/Notification/Notification";
// import { useNavigate } from "react-router-dom";

const Clinics = () => {
  const [users, setUsers] = useState([]);
  const [clinics, setClinics] = useState([]);
  // const [error, setError] = useState();
  // const navigate = useNavigate();

  const [selectedClinicId, updateSelectedClinicId] = useState();
  console.log(selectedClinicId);

  const selectedClinic = clinics.find((item) => item.id === selectedClinicId);
  console.log(selectedClinic);

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

  const getClinics = async () => {
    const res = await fetch(
      `${process.env.REACT_APP_BACKEND_URL}/v1/users/clinics`,
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

  if (!users && !clinics) {
    <Loading />;
  }

  return (
    <>
      <RegularSection>
        <HeroUser users={users}></HeroUser>
        <div className="account">
          <CardClinicsPayment
            clinics={clinics}
            handleChange={updateSelectedClinicId}
            selectedClinic={selectedClinic}
          />
        </div>
      </RegularSection>
    </>
  );
};

export default Clinics;
