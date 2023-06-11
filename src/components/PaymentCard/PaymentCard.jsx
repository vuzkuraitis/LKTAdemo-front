import React from "react";
import * as S from "./PaymentCard.styles";
import Button from "../Button/Button";
import Countdown from "react-countdown";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

const PaymentCard = ({ className, title, subtitle }) => {
  const navigate = useNavigate();

  const renderer = ({ seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return navigate("/account");
    } else {
      // Render a countdown
      return <span>{seconds}</span>;
    }
  };
  return (
    <S.PaymentCard className={className}>
      <div className="paymentCardIcon">
        <FontAwesomeIcon icon={faCircleCheck} />
      </div>
      <div className="redirect">
        <h1>{title}</h1>
        <p>{subtitle} </p>
        <Button
          type="button"
          handleClick={() => {
            navigate("/account");
          }}
        >
          (<Countdown date={Date.now() + 9000} renderer={renderer} />) Grįžti
        </Button>
      </div>
    </S.PaymentCard>
  );
};

export default PaymentCard;
