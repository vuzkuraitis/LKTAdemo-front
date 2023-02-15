import React from "react";
import PropTypes from "prop-types";
import * as S from "./CardClinicsPayment.styles";
import PaymentButton from "../PaymentButton/PaymentButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import Loading from "../Loading/Loading";

const CardClinicsPayment = ({ clinics, clinicData, initiatePayment }) => {
  const newClinicData = clinics.map((clinic) => ({
    ...clinic,
    clinicData: clinicData.filter((it) => it.clinics_id === clinic.id),
  }));

  if (!newClinicData) {
    <Loading />;
  }
  return (
    <S.CardClinicsPayment>
      <h5>Clinics Information</h5>
      <div className="carduserclinics">
        <div>
          <h3>Clinics Status</h3>
          {newClinicData.length > 0 ? (
            <div className="cliniccards">
              {newClinicData &&
                newClinicData.map((clinic) => (
                  <div
                    id={clinic.id}
                    value={clinic.id}
                    key={clinic.id}
                    className="cliniccard"
                  >
                    <img
                      src="https://ltu.basketball/wp-content/uploads/2022/09/LKTA.jpg"
                      alt="LKTRALogo"
                    ></img>
                    <div className="cliniccarditem">
                      <h4>City:</h4>
                      <p>{clinic.name}</p>
                    </div>
                    <div className="cliniccarditem">
                      <h4>Place:</h4>
                      <p>{clinic.place}</p>
                    </div>
                    <div className="cliniccarditem">
                      <h4>Address:</h4>
                      <p>{clinic.address}</p>
                    </div>
                    <div className="cliniccarditem">
                      <h4>Duaration:</h4>
                      <p>{clinic.hours} h</p>
                    </div>
                    <div className="cliniccarditem">
                      <h4>Price:</h4>
                      <p>{clinic.price} EUR</p>
                    </div>
                    {clinic.clinicData.length > 0 &&
                    clinic.clinicData[0].status === "completed" ? (
                      <div className="completed">
                        <FontAwesomeIcon
                          icon={faCheck}
                          className="icon"
                          id={clinic.id}
                        />
                      </div>
                    ) : (
                      <PaymentButton
                        type="button"
                        id={clinic.id}
                        value={clinic.id}
                        key={clinic.id}
                        handleClick={(e) => {
                          initiatePayment(Number(e.currentTarget.value));
                        }}
                      >
                        Confirm Registration
                      </PaymentButton>
                    )}
                  </div>
                ))}
            </div>
          ) : (
            <Loading />
          )}
        </div>
      </div>
    </S.CardClinicsPayment>
  );
};

CardClinicsPayment.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
};

export default CardClinicsPayment;
