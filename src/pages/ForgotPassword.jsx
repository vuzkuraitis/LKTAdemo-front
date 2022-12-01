import React, { useState } from "react";
import RegularSection from "../components/RegularSection/RegularSection";
import Notification from "../components/Notification/Notification";
import ResetPassForm from "../components/ResetPassForm/ResetPassForm";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const [error, setError] = useState();
  const navigate = useNavigate();

  const resetPassword = async (inputs) => {
    try {
      const res = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/v1/users/reset-password`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(inputs),
        }
      );
      const data = await res.json();

      if (data.err) {
        return setError(data.err);
      }
      navigate("/new-password");
      return setError(data.msg);
    } catch (err) {
      return setError(err.message);
    }
  };

  return (
    <>
      <RegularSection>
        {error && (
          <Notification handleClick={() => setError(null)}>
            {error}
          </Notification>
        )}
        <ResetPassForm handleSubmit={resetPassword}></ResetPassForm>
      </RegularSection>
    </>
  );
};

export default ForgotPassword;
