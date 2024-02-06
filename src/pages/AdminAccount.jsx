import React, { useState, useEffect } from "react";
import RegularSection from "../components/RegularSection/RegularSection";
import Notification from "../components/Notification/Notification";
import Hero from "../components/Hero/Hero";
import CoachesTable from "../components/CoachesTable/CoachesTable";
import EditCoachPayment from "../components/EditCoachPayment/EditCoachPayment";

const AdminAccount = () => {
  const [error, setError] = useState();
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  console.log(selectedUser);

  const d = new Date();
  const year = d.getFullYear();

  const getUserData = async () => {
    const res = await fetch(
      `${process.env.REACT_APP_BACKEND_URL}/v1/admin/coaches`,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    const data = await res.json();
    console.log(data);

    setUsers(data);
  };
  useEffect(() => {
    getUserData();
  }, []);

  const updateLicense = async (params) => {
    // console.log(info);
    try {
      const res = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/v1/admin/updateCoachLicense`,
        {
          method: "POST",
          headers: {
            authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(params),
        }
      );
      const data = await res.json();

      if (data.err) {
        return setError(data.err);
      }

      getUserData();

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
        {selectedUser !== null ? (
          <EditCoachPayment
            selectedUser={selectedUser}
            setSelectedUser={setSelectedUser}
            years={year}
            handleSubmit={updateLicense}
          ></EditCoachPayment>
        ) : null}
        <Hero title="Admin Dashboard" />
        <div className="adminSettings">
          <CoachesTable
            users={users}
            years={year}
            setSelectedUser={setSelectedUser}
          ></CoachesTable>
        </div>
      </RegularSection>
    </>
  );
};

export default AdminAccount;
