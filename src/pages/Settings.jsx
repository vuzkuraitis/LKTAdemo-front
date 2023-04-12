import React, { useState } from "react";
import RegularSection from "../components/RegularSection/RegularSection";
import ChangePassForm from "../components/ChangePassForm/ChangePassForm";
import Notification from "../components/Notification/Notification";
import ChangeEmailForm from "../components/ChangeEmailForm/ChangeEmailForm";
import Hero from "../components/Hero/Hero";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";

const Settings = () => {
  const [error, setError] = useState();

  const changePassword = async (inputs) => {
    try {
      const res = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/v1/users/change-password`,
        {
          method: "POST",
          headers: {
            authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(inputs),
        }
      );
      const data = await res.json();

      if (data.err) {
        return setError(data.err);
      }
      return setError("Password was changed Successfully");
    } catch (err) {
      return setError(err.message);
    }
  };

  const changeEmailAccount = async (inputs) => {
    try {
      const res = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/v1/users/change-email`,
        {
          method: "POST",
          headers: {
            authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(inputs),
        }
      );
      const data = await res.json();

      if (data.err) {
        return setError(data.err);
      }
      return setError("Email was changed Successfully");
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
        <Hero title="Nustatymai">
          <FontAwesomeIcon icon={faGear} beatFade />
        </Hero>
        <div className="settings">
          <ChangeEmailForm handleSubmit={changeEmailAccount}></ChangeEmailForm>
          <ChangePassForm handleSubmit={changePassword}></ChangePassForm>
        </div>
      </RegularSection>
    </>
  );
};

export default Settings;
