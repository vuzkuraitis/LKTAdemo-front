import React, { useState, useEffect } from "react";
import RegularSection from "../components/RegularSection/RegularSection";
import HeroUser from "../components/HeroUser/HeroUser";
import CardClinicsPayment from "../components/CardClinicsPayment/CardClinicsPayment";
import Loading from "../components/Loading/Loading";
import { useNavigate } from "react-router-dom";

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
      console.log(data);

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
        <HeroUser users={users}></HeroUser>
        <div className="account">
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
