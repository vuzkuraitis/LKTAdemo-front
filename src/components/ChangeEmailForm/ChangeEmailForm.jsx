import React, { useState } from "react";
import * as S from "./ChangeEmailForm.styles";
import PropTypes from "prop-types";
import TextInput from "../TextInput/TextInput";
import Button from "../Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt } from "@fortawesome/free-solid-svg-icons";

const ChangeEmailForm = ({ handleSubmit }) => {
  const [changeemailValues, updateChangeemailValues] = useState();
  return (
    <S.ChangeEmailForm>
      <h3>Pakeisti El paštą:</h3>
      <div className="settingsSection">
        <div className="changeemailsvg">
          <FontAwesomeIcon icon={faAt} />
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            e.target.reset();

            handleSubmit(changeemailValues);
          }}
        >
          <TextInput
            type="email"
            label="Senas El paštas"
            placeholder="Senas El paštas"
            handleChange={(emailValue) =>
              updateChangeemailValues({
                ...changeemailValues,
                oldEmail: emailValue,
              })
            }
          />
          <TextInput
            type="email"
            label="Naujas El paštas"
            placeholder="Naujas El paštas"
            handleChange={(emailValue) =>
              updateChangeemailValues({
                ...changeemailValues,
                newEmail: emailValue,
              })
            }
          />
          <TextInput
            type="password"
            label="Slaptažodis"
            placeholder="Slaptažodis"
            handleChange={(passwordValue) =>
              updateChangeemailValues({
                ...changeemailValues,
                password: passwordValue,
              })
            }
          />
          <Button type="submit">Patvirtinti</Button>
        </form>
      </div>
    </S.ChangeEmailForm>
  );
};

ChangeEmailForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default ChangeEmailForm;
