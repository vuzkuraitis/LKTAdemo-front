import React from "react";
import PropTypes from "prop-types";
import * as S from "./CardClinicsHistory.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClockRotateLeft } from "@fortawesome/free-solid-svg-icons";

const CardClinicsHistory = ({ clinicHistory }) => {
  let sum = 0;
  clinicHistory.forEach((value) => {
    sum += value.hours;
  });
  return (
    <S.CardClinicsHistory>
      <div className="carduserhistory">
        <div className="cardusersvg">
          <FontAwesomeIcon icon={faClockRotateLeft} />
        </div>
        {clinicHistory ? (
          <div className="historyinfo">
            <h3 className="totalh">
              Viso išklausyta valandų: <span>{sum}</span>
            </h3>
            <div className="clinicsHistory">
              <h3>Seminarų istorija:</h3>
              <ol>
                {clinicHistory &&
                  clinicHistory.map((clinic) => (
                    <li>
                      {clinic.name} <span>Valandos: {clinic.hours}h</span>
                    </li>
                  ))}
              </ol>
            </div>
          </div>
        ) : (
          <div>
            <h3>
              Viso išklausyta valandų: <span>0</span>
            </h3>
          </div>
        )}
      </div>
    </S.CardClinicsHistory>
  );
};

CardClinicsHistory.propTypes = {
  name: PropTypes.string,
  surname: PropTypes.string,
  email: PropTypes.string,
  license_nr: PropTypes.string,
};

export default CardClinicsHistory;
