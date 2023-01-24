import React from "react";
import PropTypes from "prop-types";
import * as S from "./CardClinics.styles";
import SubmitClinicForm from "../SubmitClinicForm/SubmitClinicForm";

const CardClinics = ({
  clinics,
  handleClick,
  handleChange,
  selectedClinic,
}) => {
  // const [selectedClinicId, updateSelectedClinicId] = useState();
  // console.log(selectedClinicId);

  // const selectedClinic = clinics.find((item) => item.id === selectedClinicId);
  // console.log(selectedClinic);

  return (
    <S.CardClinics>
      <h5>Information for Coach:</h5>
      <div className="carduser">
        <h3>
          Anual License fee: <span>0.01 EUR</span>
        </h3>
        <div>
          <h3>Available Clinics</h3>
          <ul>
            {clinics &&
              clinics.map((clinic) => (
                <li id={clinic.id} value={clinic.id} key={clinic.id}>
                  {clinic.name} <span>Price: {clinic.price} EUR</span>
                </li>
              ))}
          </ul>
        </div>
        <SubmitClinicForm
          clinics={clinics}
          handleChange={handleChange}
          handleClick={handleClick}
          selectedClinic={selectedClinic}
        />
        {selectedClinic ? (
          <div>
            <h3>
              <span>Date</span> {selectedClinic.name}
            </h3>
            <h3>
              <span>Place</span> {selectedClinic.place}
            </h3>
            <h3>
              <span>Address</span> {selectedClinic.address}
            </h3>
            <h3>
              <span>Clinic Hours</span> {selectedClinic.hours}
            </h3>
            <h3>
              <span>Price</span> {selectedClinic.price} EUR
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
