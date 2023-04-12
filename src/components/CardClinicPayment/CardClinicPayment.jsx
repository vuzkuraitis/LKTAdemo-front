import React from "react";
import PropTypes from "prop-types";
import * as S from "./CardClinicPayment.styles";
import PaymentButton from "../PaymentButton/PaymentButton";
import Loading from "../Loading/Loading";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";

const CardClinicPayment = ({
  clinics,
  clinicData,
  newParams,
  state,
  handleClick,
  active,
  setActive,
}) => {
  const navigate = useNavigate();
  const selectedClinicData = clinics
    .map((clinic) => ({
      ...clinic,
      clinicData: clinicData.filter((it) => it.clinics_id === clinic.id),
    }))
    .filter((item) => item.id === Number(newParams.id));

  console.log(selectedClinicData);
  console.log(state);

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
                <img
                  src="https://ltu.basketball/wp-content/uploads/2022/09/LKTA.jpg"
                  alt="LKTRALogo"
                ></img>
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

                {active !== true ? (
                  <PaymentButton
                    type="button"
                    id={selectedClinicData[0].id}
                    value={selectedClinicData[0].id}
                    key={selectedClinicData[0].id}
                    handleClick={handleClick}
                  >
                    Mokėti
                  </PaymentButton>
                ) : (
                  <Button
                    type="button"
                    handleClick={() => {
                      setActive(active);
                      navigate("/account/clinics");
                    }}
                  >
                    Uždaryti
                  </Button>
                )}
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
