import React from "react";
import PropTypes from "prop-types";
import * as S from "./CardPayment.styles";
import Button from "../Button/Button";

const CardPayment = ({ payments, id, handleClick, active, setActive }) => {
  return (
    <S.CardPayment id={id} payments={payments}>
      {payments &&
        payments.map((payment) => (
          <div key={1} className="cardpayment">
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
                  Galioja: <span>{payment.year}</span> metams
                </h3>
              </div>
            ) : (
              <h3>
                {active !== true ? (
                  <Button handleClick={handleClick} type="button">
                    Mokėti
                  </Button>
                ) : (
                  <Button
                    type="button"
                    handleClick={() => {
                      setActive(active);
                      window.location.reload();
                    }}
                  >
                    Uždaryti
                  </Button>
                )}
              </h3>
            )}
            <div className="paymentexpl">
              <p>
                <span>
                  Statusas: <span className="red"></span>
                </span>
                Licenzija yra neaktyvi todėl, kad yra neapmokėta, arba mokėjimas
                vis dar vykdomas.
              </p>
              <p>
                <span>
                  Statusas: <span className="green"></span>
                </span>
                Licenzija yra aktyvi.
              </p>
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
