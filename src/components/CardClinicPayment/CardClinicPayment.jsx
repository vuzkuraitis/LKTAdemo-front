import React from "react";
import PropTypes from "prop-types";
import * as S from "./CardClinicPayment.styles";
import PaymentButton from "../PaymentButton/PaymentButton";
import Loading from "../Loading/Loading";

const CardClinicPayment = ({
  clinics,
  clinicData,
  newParams,
  state,
  handleClick,
}) => {
  const selectedClinicData = clinics
    .map((clinic) => ({
      ...clinic,
      clinicData: clinicData.filter((it) => it.clinics_id === clinic.id),
    }))
    .filter((item) => item.id === Number(newParams.id));

  return (
    <S.CardClinicPayment>
      <div className="carduserclinics">
        <div>
          <h2>Pasirinktas seminaras</h2>
          {selectedClinicData.length > 0 ? (
            <div className="cliniccards">
              <div
                id={selectedClinicData[0].id}
                value={selectedClinicData[0].id}
                key={selectedClinicData[0].id}
                className="cliniccard"
              >
                <div className="clinicsimg">
                  <img
                    src="https://ltu.basketball/wp-content/uploads/2022/09/LKTA.jpg"
                    alt="LKTRALogo"
                  ></img>
                </div>
                <div className="cliniccarditemwrapper">
                  <div className="cliniccarditem">
                    <h4>Miestas:</h4>
                    <p>{selectedClinicData[0].name}</p>
                  </div>
                  <div className="cliniccarditem">
                    <h4>Vieta:</h4>
                    <p>{selectedClinicData[0].place}</p>
                  </div>
                  <div className="cliniccarditem">
                    <h4>Adresas:</h4>
                    <p>{selectedClinicData[0].address}</p>
                  </div>
                  <div className="cliniccarditem">
                    <h4>Trukmė:</h4>
                    <p>{selectedClinicData[0].hours} h</p>
                  </div>
                  <div className="cliniccarditem">
                    <h4>Kaina:</h4>
                    <p>{selectedClinicData[0].price} EUR</p>
                  </div>
                  <a href={state[0].url}>
                    <PaymentButton
                      type="button"
                      id={selectedClinicData[0].id}
                      value={selectedClinicData[0].id}
                      key={selectedClinicData[0].id}
                      handleClick={handleClick}
                    >
                      Mokėti
                    </PaymentButton>
                  </a>
                </div>
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
