import React, { useState, useEffect } from "react";
import RegularSection from "../components/RegularSection/RegularSection";
import HeroUser from "../components/HeroUser/HeroUser";
import CardUser from "../components/CardUser/CardUser";
import CardPayment from "../components/CardPayment/CardPayment";
import CardClinics from "../components/CardClinics/CardClinics";
import Loading from "../components/Loading/Loading";

const Account = () => {
  const [users, setUsers] = useState([]);
  const [payments, setPayments] = useState([]);
  const [clinics, setClinics] = useState([]);

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

  return (
    <>
      <RegularSection>
        <HeroUser users={users}></HeroUser>
        <div className="account">
          {users.length > 0 ? <CardUser users={users} /> : <Loading />}
          {payments.length > 0 ? (
            <CardPayment payments={payments} />
          ) : (
            <Loading />
          )}
          {clinics.length > 0 ? <CardClinics clinics={clinics} /> : <Loading />}
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
