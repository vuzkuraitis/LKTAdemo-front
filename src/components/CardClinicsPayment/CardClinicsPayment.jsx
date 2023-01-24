import React from "react";
import PropTypes from "prop-types";
import * as S from "./CardClinicsPayment.styles";
import Button from "../Button/Button";

const CardClinicsPayment = ({ clinics, handleClick, handleChange }) => {
  return (
    <S.CardClinicsPayment>
      <h5>Clinics Information</h5>
      <div className="carduserclinics">
        <div>
          <h3>Clinics Status</h3>
          <div className="cliniccards">
            {clinics &&
              clinics.map((clinic) => (
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
                    <p>{clinic.hours}</p>
                  </div>
                  <div className="cliniccarditem">
                    <h4>Price:</h4>
                    <p>{clinic.price} EUR</p>
                  </div>
                  <Button>
                    <a href={""}>Pay Here</a>
                  </Button>
                </div>
              ))}
          </div>
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
