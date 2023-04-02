import React, { useState, useEffect } from "react";
import RegularSection from "../components/RegularSection/RegularSection";
import Notification from "../components/Notification/Notification";
import Hero from "../components/Hero/Hero";
import CoachesTable from "../components/CoachesTable/CoachesTable";

const AdminAccount = () => {
  const [error, setError] = useState();
  const [users, setUsers] = useState([]);

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

  return (
    <>
      <RegularSection>
        {error && (
          <Notification handleClick={() => setError(null)}>
            {error}
          </Notification>
        )}
        <Hero title="Admin Dashboard" />
        <div className="settings">
          <CoachesTable users={users}></CoachesTable>
        </div>
      </RegularSection>
    </>
  );
};

export default AdminAccount;
