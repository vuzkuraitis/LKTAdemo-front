import React, { useState } from "react";
import RegularSection from "../components/RegularSection/RegularSection";
import Notification from "../components/Notification/Notification";
import Hero from "../components/Hero/Hero";
import AdminLoginForm from "../components/AdminLoginForm/AdminLoginForm";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const [error, setError] = useState();

  const navigate = useNavigate();

  const loginAdmin = async (inputs) => {
    try {
      const res = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/v1/admin/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(inputs),
        }
      );
      const data = await res.json();
      console.log(data);

      if (data.err) {
        return setError(data.err);
      }
      localStorage.setItem("admin", true);
      localStorage.setItem("token", data.token);

      navigate("/admin/admin-account");
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
        <Hero title="Admin Login" />
        <div className="settings">
          <AdminLoginForm handleSubmit={loginAdmin} />
        </div>
      </RegularSection>
    </>
  );
};

export default Admin;
