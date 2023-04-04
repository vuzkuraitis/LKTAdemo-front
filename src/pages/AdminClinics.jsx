import React, { useState, useEffect } from "react";
import RegularSection from "../components/RegularSection/RegularSection";
import Notification from "../components/Notification/Notification";
import Hero from "../components/Hero/Hero";
import ClinicAddForm from "../components/ClinicAddForm/ClinicAddForm";
import ClinicsTable from "../components/ClinicsTable/ClinicsTable";

const AdminAccount = () => {
  const [error, setError] = useState();
  const [clinics, setClinics] = useState([]);

  const getClinics = async () => {
    const res = await fetch(
      `${process.env.REACT_APP_BACKEND_URL}/v1/clinics/clinic`,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    const data = await res.json();
    setClinics(data);
  };
  useEffect(() => {
    getClinics();
  }, []);

  const postClinic = async (inputs) => {
    try {
      const res = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/v1/admin/post-clinic`,
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
      console.log(data);

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
        <Hero title="Clinics" />
        <div className="adminSettings">
          <ClinicsTable clinics={clinics}></ClinicsTable>
          <ClinicAddForm handleSubmit={postClinic}></ClinicAddForm>
        </div>
      </RegularSection>
    </>
  );
};

export default AdminAccount;
