import React from "react";
import PropTypes from "prop-types";
import * as S from "./CardClinicPayment.styles";
import PaymentButton from "../PaymentButton/PaymentButton";
import Loading from "../Loading/Loading";

const CardClinicPayment = ({ clinics, clinicData, newParams, state }) => {
  const selectedClinicData = clinics
    .map((clinic) => ({
      ...clinic,
      clinicData: clinicData.filter((it) => it.clinics_id === clinic.id),
    }))
    .filter((item) => item.id === Number(newParams.id));

  console.log(selectedClinicData);

  return (
    <S.CardClinicPayment>
      <h5>Clinics Information</h5>
      <div className="carduserclinics">
        <div>
          <h3>Selected Clinic Status</h3>
          {selectedClinicData.length > 0 ? (
            <div className="cliniccards">
              <div
                id={selectedClinicData[0].id}
                value={selectedClinicData[0].id}
                key={selectedClinicData[0].id}
                className="cliniccard"
              >
                <img
                  src="https://ltu.basketball/wp-content/uploads/2022/09/LKTA.jpg"
                  alt="LKTRALogo"
                ></img>
                <div className="cliniccarditem">
                  <h4>City:</h4>
                  <p>{selectedClinicData[0].name}</p>
                </div>
                <div className="cliniccarditem">
                  <h4>Place:</h4>
                  <p>{selectedClinicData[0].place}</p>
                </div>
                <div className="cliniccarditem">
                  <h4>Address:</h4>
                  <p>{selectedClinicData[0].address}</p>
                </div>
                <div className="cliniccarditem">
                  <h4>Duaration:</h4>
                  <p>{selectedClinicData[0].hours} h</p>
                </div>
                <div className="cliniccarditem">
                  <h4>Price:</h4>
                  <p>{selectedClinicData[0].price} EUR</p>
                </div>
                <PaymentButton
                  type="button"
                  id={selectedClinicData[0].id}
                  value={selectedClinicData[0].id}
                  key={selectedClinicData[0].id}
                >
                  <a href={state[0].confirmLink}>Pay Here</a>
                </PaymentButton>
              </div>
            </div>
          ) : (
            <Loading />
          )}
        </div>
      </div>
    </S.CardClinicPayment>
  );
};

CardClinicPayment.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
};

export default CardClinicPayment;
