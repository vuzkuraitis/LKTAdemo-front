import React, { useState, useEffect } from "react";
import RegularSection from "../components/RegularSection/RegularSection";
import Loading from "../components/Loading/Loading";
import Notification from "../components/Notification/Notification";
import RegisterForm from "../components/RegisterForm/RegisterForm";
import Popup from "../components/Popup/Popup";

const Home = () => {
  const [error, setError] = useState();
  const [users, setUsers] = useState();
  const [checked, setChecked] = useState(false);
  const [popupOpen, setPopupOpen] = useState(false);

  console.log(checked);

  const getUsers = async (name) => {
    const res = await fetch(
      `${process.env.REACT_APP_BACKEND_URL}/v1/users?name=${name}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await res.json();

    setUsers(data);
    console.log(data);
  };
  useEffect(() => {
    getUsers();
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

  if (!users) {
    return <Loading />;
  }

  return (
    <>
      <RegularSection>
        {error && (
          <Notification handleClick={() => setError(null)}>
            {error}
          </Notification>
        )}
        <RegisterForm
          checked={checked}
          setChecked={setChecked}
          togglePopup={togglePopup}
          handleSubmit={registerUser}
        />
        {popupOpen && (
          <Popup handleClick={togglePopup}>
            {/* {error && (
              <Notification handleClick={() => setError(null)}>
                {error}
              </Notification>
            )} */}
          </Popup>
        )}
      </RegularSection>
    </>
  );
};

export default Home;
