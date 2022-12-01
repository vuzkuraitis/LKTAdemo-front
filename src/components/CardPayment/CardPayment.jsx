import React from "react";
import PropTypes from "prop-types";
import * as S from "./CardPayment.styles";
import Button from "../Button/Button";

const CardPayment = ({ payments, id }) => {
  return (
    <S.CardPayment id={id} payments={payments}>
      <h5>License validation:</h5>
      {payments &&
        payments.map((payment) => (
          <div key={payment.id} className="cardpayment">
            <h3 className="status">
              Status:{" "}
              {payment.status === "success" ? (
                <div className="green"></div>
              ) : (
                <div className="red"></div>
              )}
            </h3>
            {payment.status === "success" ? (
              <div>
                <h3>
                  <span>Paid</span>
                </h3>
                <h3>
                  Valid for year:<span>{payment.year}</span>
                </h3>
              </div>
            ) : (
              <h3>
                <Button>Pay Here</Button>
              </h3>
            )}
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
