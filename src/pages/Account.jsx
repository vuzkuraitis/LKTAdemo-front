import React, { useState, useEffect } from "react";
import RegularSection from "../components/RegularSection/RegularSection";
import HeroUser from "../components/HeroUser/HeroUser";
import CardUser from "../components/CardUser/CardUser";
import CardPayment from "../components/CardPayment/CardPayment";
import CardClinics from "../components/CardClinics/CardClinics";
import Loading from "../components/Loading/Loading";
import { useNavigate } from "react-router-dom";

const Account = () => {
  const [users, setUsers] = useState([]);
  const [payments, setPayments] = useState([]);
  const [clinics, setClinics] = useState([]);

  const [selectedClinicId, updateSelectedClinicId] = useState();
  console.log(selectedClinicId);

  const selectedClinic = clinics.find((item) => item.id === selectedClinicId);
  console.log(selectedClinic);

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
      `${process.env.REACT_APP_BACKEND_URL}/v1/users/account-payment`,
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

  if (!users && !payments && !clinics) {
    <Loading />;
  }

  return (
    <>
      <RegularSection>
        <HeroUser users={users}></HeroUser>
        <div className="account">
          <CardUser users={users} />
          <CardPayment payments={payments} />
          <CardClinics
            clinics={clinics}
            selectedClinic={selectedClinic}
            handleChange={(id) => {
              updateSelectedClinicId(id);
            }}
            handleClick={() => {
              navigate("/clinics");
            }}
          />
        </div>
        <div className="paymentexpl">
          <p>
            <span>Status: Red,</span> License is not valid, because the payment
            was not received or still pending.
          </p>
          <p>
            <span>Status: Green,</span> License is valid.
          </p>
        </div>
      </RegularSection>
    </>
  );
};

export default Account;
