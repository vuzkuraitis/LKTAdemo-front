import React, { useState } from "react";
import PropTypes from "prop-types";
import * as S from "./EditCoachPayment.styles";
import Button from "../Button/Button";
import TextInput from "../TextInput/TextInput";
// import Select from "react-select";
// import DateInput from "../DateInput/DateInput";
// import Loading from "../Loading/Loading";

const EditCoachPayment = ({
  setSelectedUser,
  selectedUser,
  years,
  handleSubmit,
}) => {
  const [paid, setPaid] = useState(false);

  return (
    <S.EditCoachPayment>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          // e.target.reset();

          handleSubmit(selectedUser);
          setSelectedUser(null);
          // setShowEditSeason(false);
          // // setSelectedTeam(false);
        }}
      >
        <h3>Edit Coach Payment</h3>
        <div className="selectedSeasonEdit">
          <div className="selectedSeasonEditCont">
            <h3>Name</h3>
            <p>{selectedUser.name}</p>
          </div>
          <div className="selectedSeasonEditCont">
            <h3>Surname</h3>
            <p>{selectedUser.surname}</p>
          </div>
          <div className="selectedSeasonEditCont">
            <h3>License</h3>
            <p>{selectedUser.license_nr}</p>
          </div>
          <div className="selectedSeasonEditCont">
            <h3>Valid till: </h3>
            <p>{selectedUser.year}.12.31</p>
          </div>
          <div className="selectedSeasonEditCont">
            <h3>Status: </h3>
            <p>{selectedUser.status}</p>
            <label htmlFor="">Paid</label>
            <input
              type="checkbox"
              value="2"
              onChange={(e) => {
                console.log(e.target.value);
                setPaid(!paid);
                setSelectedUser({
                  ...selectedUser,
                  newPaymentStatus: e.target.value,
                  newYear: years,
                });
              }}
            />
            {paid === true ? (
              <TextInput
                required
                label="Payment reference"
                placeholder="Payment reference"
                handleChange={(paymentValue) => {
                  setSelectedUser({
                    ...selectedUser,
                    paymentId: paymentValue,
                  });
                }}
              />
            ) : null}
          </div>
        </div>
        <div>
          <Button type="submit">Submit</Button>
          <Button
            type="button"
            handleClick={() => {
              setSelectedUser(null);
            }}
          >
            Cancel
          </Button>
        </div>
      </form>
    </S.EditCoachPayment>
  );
};

EditCoachPayment.propTypes = {
  name: PropTypes.string,
};

export default EditCoachPayment;
