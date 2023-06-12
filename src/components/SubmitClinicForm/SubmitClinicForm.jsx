import React from "react";
import * as S from "./SubmitClinicForm.styles";
import PropTypes from "prop-types";
import Button from "../Button/Button";
import SelectInput from "../SelectInput/SelectInput";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const SubmitClinicForm = ({
  handleChange,
  handleClick,
  clinics,
  selectedClinic,
}) => {
  return (
    <S.SubmitClinicForm>
      <div className="formSection">
        <form>
          <SelectInput
            title="Clinic"
            options={clinics}
            label="Seminarai"
            type="number"
            name="clinic"
            handleChange={(clinic_idValue) =>
              handleChange(Number(clinic_idValue))
            }
          />
          {selectedClinic ? (
            selectedClinic.status === "completed" ? (
              <div className="completed">
                <FontAwesomeIcon icon={faCheck} className="icon" />
              </div>
            ) : (
              <Button type="button" handleClick={handleClick}>
                Registruotis
              </Button>
            )
          ) : null}
        </form>
      </div>
    </S.SubmitClinicForm>
  );
};

SubmitClinicForm.propTypes = {
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
};

export default SubmitClinicForm;
