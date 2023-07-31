import React, { useState, useEffect } from "react";
import RegularSection from "../components/RegularSection/RegularSection";
import Loading from "../components/Loading/Loading";
import RegisterForm from "../components/RegisterForm/RegisterForm";
import Popup from "../components/Popup/Popup";
import PopupInfo from "../components/PopupInfo/PopupInfo";
import Seo from "../components/Seo/Seo";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [error, setError] = useState();
  const [checked, setChecked] = useState(false);
  const [popupOpen, setPopupOpen] = useState(false);
  const [terms, setTerms] = useState([]);

  const navigate = useNavigate();

  const getTerms = async () => {
    const res = await fetch(
      `${process.env.REACT_APP_BACKEND_URL}/v1/users/terms`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await res.json();

    setTerms(data);
  };
  useEffect(() => {
    getTerms();
  }, []);

  const togglePopup = () => {
    setPopupOpen(!popupOpen);
  };

  const registerUser = async (inputs) => {
    try {
      const res = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/v1/users/register`,
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
      return setError("Registration Successful");
    } catch (err) {
      return setError(err.message);
    }
  };

  if (!terms) {
    return <Loading />;
  }

  return (
    <>
      <Seo
        title="Lietuvos Krepšinio Trenerių Asociacija"
        description="Registracija"
        type="webapp"
        name="Krepšinio Treneris"
      />
      <RegularSection>
        {error && (
          <Popup
            error={error}
            handleClick={() => {
              setError(null);
              navigate(
                error === "Registration Successful" ? "/login" : "/register"
              );
            }}
          >
            <p>
              Registracija{" "}
              {error === "Registration Successful" ? "Sėkminga" : "Nesėkminga"}
            </p>
          </Popup>
        )}
        <RegisterForm
          checked={checked}
          setChecked={setChecked}
          togglePopup={togglePopup}
          handleSubmit={registerUser}
          terms={terms}
        />
        {popupOpen && (
          <Popup handleClick={togglePopup}>
            <PopupInfo terms={terms} />
          </Popup>
        )}
      </RegularSection>
    </>
  );
};

export default Register;
