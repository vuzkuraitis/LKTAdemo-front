import React from "react";
import PropTypes from "prop-types";
import * as S from "./CardClinicsSwiper.styles";

const CardClinicsSwiper = ({
  id,
  value,
  name,
  place,
  address,
  hours,
  price,
}) => {
  return (
    <S.CardClinicsSwiper>
      <div className="cliniccards">
        <div id={id} value={value} className="cliniccard">
          <div className="cliniccarditem">
            <h4>Miestas:</h4>
            <p>{name}</p>
          </div>
          <div className="cliniccarditem">
            <h4>Vieta:</h4>
            <p>{place}</p>
          </div>
          <div className="cliniccarditem">
            <h4>Adresas:</h4>
            <p>{address}</p>
          </div>
          <div className="cliniccarditem">
            <h4>Trukmė:</h4>
            <p>{hours} h</p>
          </div>
          <div className="cliniccarditem">
            <h4>Kaina:</h4>
            <p>{price} EUR</p>
          </div>
        </div>
      </div>
    </S.CardClinicsSwiper>
  );
};

CardClinicsSwiper.propTypes = {
  name: PropTypes.string,
  place: PropTypes.string,
  address: PropTypes.string,
  hours: PropTypes.number,
  price: PropTypes.string,
};

export default CardClinicsSwiper;
