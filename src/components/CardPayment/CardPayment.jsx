import React from "react";
import PropTypes from "prop-types";
import * as S from "./CardPayment.styles";
import Button from "../Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileInvoice } from "@fortawesome/free-solid-svg-icons";

const CardPayment = ({ payments, id }) => {
  return (
    <S.CardPayment id={id} payments={payments}>
      {payments &&
        payments.map((payment) => (
          <div key={payment.id} className="cardpayment">
            <div className="carduserpayment">
              <FontAwesomeIcon icon={faFileInvoice} />
            </div>
            <div className="cardpaymentwrapper">
              <h3 className="status">
                Statusas:
                {payment.status === "success" ? (
                  <div className="green"></div>
                ) : (
                  <div className="red"></div>
                )}
              </h3>
              {payment.status === "success" ? (
                <div key={payment.id} className="licensestatus">
                  <h3>
                    <span>Apmokėta</span>
                  </h3>
                  <h3>
                    Galioja iki:
                    <span className="licensestatusyear">
                      {new Date().getFullYear() + 1}
                    </span>
                    metų
                  </h3>
                </div>
              ) : (
                <h3>
                  <a href={payment.url}>
                    <Button type="button">Mokėti</Button>
                  </a>
                </h3>
              )}
              <div className="paymentexpl">
                <p>
                  <span>
                    Statusas: <span className="red"></span>
                  </span>
                  Pažymėjimas yra neaktyvus todėl, kad yra neapmokėta, arba
                  mokėjimas vis dar vykdomas.
                </p>
                <p>
                  <span>
                    Statusas: <span className="green"></span>
                  </span>
                  Pažymėjimas yra aktyvus.
                </p>
              </div>
            </div>
          </div>
        ))}
    </S.CardPayment>
  );
};

CardPayment.propTypes = {
  status: PropTypes.string,
  year: PropTypes.string,
};

export default CardPayment;
