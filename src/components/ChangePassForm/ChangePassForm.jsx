import React, { useState } from "react";
import * as S from "./ChangePassForm.styles";
import PropTypes from "prop-types";
import TextInput from "../TextInput/TextInput";
import Button from "../Button/Button";
import Section from "../Section/Section";

const ChangePassForm = ({ handleSubmit, exercises }) => {
  const [changepassValues, updateChangepassValues] = useState();
  return (
    <S.ChangePassForm>
      <h5>Pakeisti slaptažodį:</h5>
      <div className="settingsSection">
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
