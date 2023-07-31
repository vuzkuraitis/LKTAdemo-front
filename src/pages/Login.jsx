import React, { useState } from "react";
import RegularSection from "../components/RegularSection/RegularSection";
import LoginForm from "../components/LoginForm/LoginForm";
import { useNavigate } from "react-router-dom";
import Seo from "../components/Seo/Seo";
import Popup from "../components/Popup/Popup";

const Login = () => {
  const [error, setError] = useState();

  const navigate = useNavigate();

  const loginUser = async (inputs) => {
    try {
      const res = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/v1/users/login`,
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

      localStorage.setItem("token", data.token);

      navigate("/account");
    } catch (err) {
      return setError(err.message);
    }
  };

  return (
    <>
      <Seo
        title="Lietuvos Krepšinio Trenerių Asociacija"
        description="Prisijungti"
        type="webapp"
        name="Krepšinio Treneris"
      />
      <RegularSection className="login">
        {error && (
          <Popup error={error} handleClick={() => setError(null)}>
            <p>Neteisingas prisijungimo @ paštas arba slaptažodis</p>
          </Popup>
        )}
        <LoginForm handleSubmit={loginUser} />
      </RegularSection>
    </>
  );
};

export default Login;
