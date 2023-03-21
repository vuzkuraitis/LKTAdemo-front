import React from "react";
import Button from "../Button/Button";
import * as S from "./CardCheckOut.styles";

const CardCheckOut = ({ className, id, handleClick, active }) => {
  return (
    <S.CardCheckOut className={className} active={active}>
      <div className="paymentDiv">
        <div id={id}></div>
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
