import React, { useState } from "react";
import PropTypes from "prop-types";
import * as S from "./CardClinics.styles";
import SubmitClinicForm from "../SubmitClinicForm/SubmitClinicForm";
import { useNavigate } from "react-router-dom";

const CardClinics = ({ clinics }) => {
  const navigate = useNavigate();
  const [selectedClinicId, updateSelectedClinicId] = useState(null);
  console.log(selectedClinicId);

  const selectedClinic = clinics.find((item) => item.id === selectedClinicId);
  console.log(selectedClinic);

  return (
    <S.CardClinics>
      <div className="carduser">
        <h3>
          Metinis licenzijos mokestis: <span>0.01 EUR</span>
        </h3>
        <div>
          <h3>Seminarai</h3>
          <ul>
            {clinics &&
              clinics.map((clinic) => (
                <li id={clinic.id} value={clinic.id} key={clinic.id}>
                  {clinic.name} <span>Kaina: {clinic.price} EUR</span>
                </li>
              ))}
          </ul>
        </div>
        <SubmitClinicForm
          clinics={clinics}
          handleChange={(id) => {
            updateSelectedClinicId(id);
          }}
          handleClick={() => {
            navigate("/account/clinics");
          }}
          selectedClinic={selectedClinic}
        />
        {selectedClinic ? (
          <div>
            <h3>
              <span>Data</span> {selectedClinic.name}
            </h3>
            <h3>
              <span>Vieta</span> {selectedClinic.place}
            </h3>
            <h3>
              <span>Adresas</span> {selectedClinic.address}
            </h3>
            <h3>
              <span>Valandų skaičius</span> {selectedClinic.hours}
            </h3>
            <h3>
              <span>Kaina</span> {selectedClinic.price} EUR
            </h3>
          </div>
        ) : null}
      </div>
    </S.CardClinics>
  );
};

CardClinics.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
};

export default CardClinics;
