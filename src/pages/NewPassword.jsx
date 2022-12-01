import React, { useState } from "react";
import RegularSection from "../components/RegularSection/RegularSection";
import Notification from "../components/Notification/Notification";
import ForgotPassForm from "../components/ForgotPassForm/ForgotPassForm";

const NewPassword = () => {
  const [error, setError] = useState();

  const updatePassword = async (inputs) => {
    try {
      const res = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/v1/users/new-password`,
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
        <ForgotPassForm handleSubmit={updatePassword}></ForgotPassForm>
      </RegularSection>
    </>
  );
};

export default NewPassword;
