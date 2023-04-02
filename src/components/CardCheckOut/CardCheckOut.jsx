import React from "react";
import Button from "../Button/Button";
import * as S from "./CardCheckOut.styles";

const CardCheckOut = ({ className, id, handleClick, active, paymentError }) => {
  return (
    <S.CardCheckOut className={className} active={active}>
      <div className="paymentDiv">
        {paymentError ? (
          <div className="paymentError">{paymentError}</div>
        ) : (
          <div id={id}></div>
        )}

        {active !== true ? null : (
          <div className="checkout">
            <Button type="button" handleClick={handleClick}>
              Uždaryti
            </Button>
          </div>
        )}
      </div>
    </S.CardCheckOut>
  );
};

export default CardCheckOut;
