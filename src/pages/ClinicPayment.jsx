import React, { useState, useEffect } from "react";
import RegularSection from "../components/RegularSection/RegularSection";
import Notification from "../components/Notification/Notification";
import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading/Loading";
import Countdown from "react-countdown";
import Button from "../components/Button/Button";

const ClinicPayment = () => {
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

  const checkParamsClinic = async () => {
    try {
      const res = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/v1/clinics/clinic-payment-verification`,
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
    checkParamsClinic();
  });

  if (!error) {
    <Loading />;
  }

  const renderer = ({ seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return navigate("/account");
    } else {
      // Render a countdown
      return <span>{seconds}</span>;
    }
  };

  return (
    <>
      <RegularSection>
        {error && newParams.statusGroup === "failed" ? (
          <div className="paymenterror">
            <Notification
              handleClick={() => {
                setError(null);
              }}
            >
              {error}
            </Notification>
            <h1>Payment Error</h1>
            <div className="redirect">
              <p>You will be redirected to your Account Page in </p>
              <Button
                type="button"
                handleClick={() => {
                  navigate("/account");
                }}
              >
                (<Countdown date={Date.now() + 9000} renderer={renderer} />)
                Back
              </Button>
            </div>
          </div>
        ) : null}
        {error && newParams.statusGroup === "completed" ? (
          <div>
            <Notification
              handleClick={() => {
                setError(null);
              }}
            >
              {error}
            </Notification>
            <h1>Payment Succesfull</h1>
            <div className="redirect">
              <p>You will be redirected to your Account Page in </p>
              <Button
                type="button"
                handleClick={() => {
                  navigate("/account");
                }}
              >
                (<Countdown date={Date.now() + 9000} renderer={renderer} />)
                Back
              </Button>
            </div>
          </div>
        ) : null}
      </RegularSection>
    </>
  );
};

export default ClinicPayment;
