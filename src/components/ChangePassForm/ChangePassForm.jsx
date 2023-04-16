import React, { useState } from "react";
import * as S from "./ChangePassForm.styles";
import PropTypes from "prop-types";
import TextInput from "../TextInput/TextInput";
import Button from "../Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUnlock } from "@fortawesome/free-solid-svg-icons";

const ChangePassForm = ({ handleSubmit, exercises }) => {
  const [changepassValues, updateChangepassValues] = useState();
  return (
    <S.ChangePassForm>
      <h3>Pakeisti slaptažodį:</h3>
      <div className="settingsSection">
        <div className="changepasssvg">
          <FontAwesomeIcon icon={faUnlock} />
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            e.target.reset();

            handleSubmit(changepassValues);
          }}
        >
          <TextInput
            type="password"
            label="Senas slaptažodis"
            placeholder="Senas slaptažodis"
            handleChange={(passwordValue) =>
              updateChangepassValues({
                ...changepassValues,
                oldPassword: passwordValue,
              })
            }
          />
          <TextInput
            type="password"
            label="Naujas slaptažodis"
            placeholder="Naujas slaptažodis"
            handleChange={(passwordValue) =>
              updateChangepassValues({
                ...changepassValues,
                newPassword: passwordValue,
              })
            }
          />
          <Button type="submit">Patvirtinti</Button>
        </form>
      </div>
    </S.ChangePassForm>
  );
};

ChangePassForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default ChangePassForm;
