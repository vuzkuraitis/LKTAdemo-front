import React, { useState, useEffect } from "react";
import RegularSection from "../components/RegularSection/RegularSection";
import HeroUser from "../components/HeroUser/HeroUser";
import CardUser from "../components/CardUser/CardUser";
import CardPayment from "../components/CardPayment/CardPayment";

const Account = () => {
  const [users, setUsers] = useState([]);
  const [payments, setPayments] = useState([]);

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
    console.log(data);
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
    console.log(data);
    setPayments(data);
  };
  useEffect(() => {
    getUserPaymentData();
  }, []);
  return (
    <>
      <RegularSection>
        <HeroUser users={users}></HeroUser>
        <div className="account">
          <CardUser users={users} />
          <CardPayment payments={payments} />
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
