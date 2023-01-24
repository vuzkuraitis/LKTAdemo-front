import React, { useState, useEffect } from "react";
import RegularSection from "../components/RegularSection/RegularSection";
import Notification from "../components/Notification/Notification";
import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading/Loading";

const Payment = () => {
  const queryParams = new URLSearchParams(window.location.search);
  const paymentId = queryParams.get("paymentId");
  const status = queryParams.get("status");
  const statusGroup = queryParams.get("statusGroup");

  const newParams = {
    paymentId: paymentId,
    status: status,
    statusGroup: statusGroup,
  };
  console.log(newParams);

  const [error, setError] = useState();
  const navigate = useNavigate();

  const checkParams = async () => {
    try {
      const res = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/v1/users/account-payment-verification`,
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
        setError(data.err);
        return setTimeout(() => {
          navigate("/account");
        }, 5000);
      }
      setTimeout(() => {
        navigate("/account");
      }, 5000);
      return setError(data.msg);
    } catch (err) {
      return setError(err.message);
    }
  };
  useEffect(() => {
    checkParams();
  });

  if (!error) {
    <Loading />;
  }

  return (
    <>
      <RegularSection>
        {error && newParams.statusGroup === "failed" ? (
          <div className="paymenterror">
            <Notification
              handleClick={() => {
                setError(null);
                navigate("/account");
              }}
            >
              {error}
            </Notification>
            <h1>Payment Error</h1>
            <p>You will be redirected to your account Page</p>
          </div>
        ) : null}
        {error && newParams.statusGroup === "completed" ? (
          <div>
            <Notification
              handleClick={() => {
                setError(null);
                navigate("/account");
              }}
            >
              {error}
            </Notification>
            <h1>Payment Succesfull</h1>
            <p>You will be redirected to your account Page</p>
          </div>
        ) : null}
      </RegularSection>
    </>
  );
};

export default Payment;
