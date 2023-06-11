import React, { useState, useEffect } from "react";
import RegularSection from "../components/RegularSection/RegularSection";
import Loading from "../components/Loading/Loading";
import PaymentCard from "../components/PaymentCard/PaymentCard";
import Notification from "../components/Notification/Notification";

const Payment = () => {
  const queryParams = new URLSearchParams(window.location.search);
  const session_id = queryParams.get("session_id");

  const newParams = {
    session_id: session_id,
  };

  const [error, setError] = useState();

  const postParams = async () => {
    try {
      const res = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/v1/license/account-payment-verification`,
        {
          method: "POST",
          headers: {
            authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newParams),
        }
      );
      const data = await res.json();

      if (data.dataerror) {
        return setError(data.err);
      }
      return setError(data.msg);
    } catch (err) {
      return setError(err.message);
    }
  };
  useEffect(() => {
    postParams();
  });

  if (!error) {
    <Loading />;
  }

  return (
    <>
      <RegularSection>
        <div>
          {error && (
            <Notification handleClick={() => setError(null)}>
              {error}
            </Notification>
          )}
          <PaymentCard
            title="Mokėjimas atliktas sėkmingai"
            subtitle="Būsite gražinti į paskyrą už"
          />
        </div>
      </RegularSection>
    </>
  );
};

export default Payment;
