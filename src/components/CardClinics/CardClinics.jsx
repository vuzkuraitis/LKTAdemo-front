import React, { useState } from "react";
import PropTypes from "prop-types";
import * as S from "./CardClinics.styles";
import SubmitClinicForm from "../SubmitClinicForm/SubmitClinicForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRectangleList } from "@fortawesome/free-solid-svg-icons";

const CardClinics = ({ clinics, initiatePayment, licensePrice, payments }) => {
  const [selectedClinicId, updateSelectedClinicId] = useState(null);
  const selectedClinic = clinics.find((item) => item.id === selectedClinicId);

  return (
    <S.CardClinics licensePrice={licensePrice}>
      <div className="usercliniccard">
        <div className="usercliniccardsvg">
          <FontAwesomeIcon icon={faRectangleList} />
        </div>
        <div className="usercliniclistwrapper">
          {licensePrice &&
            licensePrice.map((licensePric) => (
              <h3 key={licensePric.id}>
                Metinis pažymėjimo mokestis:
                <span>{licensePric.licensePrice} EUR</span>
              </h3>
            ))}
          <div className="clinicslist">
            <h3>Seminarai</h3>
            <ul>
              {clinics &&
                clinics.map((clinic) => (
                  <li id={clinic.id} value={clinic.id} key={clinic.id}>
                    {clinic.name}{" "}
                    {payments &&
                      payments.map((payment) => (
                        <span key={payment.id}>
                          {payment.status === "success"
                            ? "Seminaras LKTrA nariams nemokamas"
                            : `Kaina: ${clinic.price} EUR`}
                        </span>
                      ))}
                  </li>
                ))}
            </ul>
          </div>
        </div>
        <div className="userclinicoption">
          <SubmitClinicForm
            clinics={clinics}
            handleChange={(id) => {
              updateSelectedClinicId(id);
            }}
            handleClick={(id) => {
              initiatePayment(selectedClinic.id);
              // navigate(`/clinics/clinic?id=${selectedClinic.id}`);
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
              {payments &&
                payments.map((payment) => (
                  <h3 key={payment.id}>
                    <span>Kaina</span>
                    {payment.status === "success"
                      ? "Seminaras LKTrA nariams nemokamas"
                      : `${selectedClinic.price} EUR`}
                  </h3>
                ))}
            </div>
          ) : null}
        </div>
      </div>
    </S.CardClinics>
  );
};

CardClinics.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
};

export default CardClinics;
