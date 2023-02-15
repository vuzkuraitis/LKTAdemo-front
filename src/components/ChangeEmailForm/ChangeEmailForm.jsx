import React, { useState } from "react";
import * as S from "./ChangeEmailForm.styles";
import PropTypes from "prop-types";
import TextInput from "../TextInput/TextInput";
import Button from "../Button/Button";

const ChangeEmailForm = ({ handleSubmit }) => {
  const [changeemailValues, updateChangeemailValues] = useState();
  return (
    <S.ChangeEmailForm>
      <h5>Change Email:</h5>
      <div className="settingsSection">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            e.target.reset();

            handleSubmit(changeemailValues);
          }}
        >
          <TextInput
            type="email"
            label="Old Email"
            placeholder="Old Email"
            handleChange={(emailValue) =>
              updateChangeemailValues({
                ...changeemailValues,
                oldEmail: emailValue,
              })
            }
          />
          <TextInput
            type="email"
            label="New Email"
            placeholder="New Email"
            handleChange={(emailValue) =>
              updateChangeemailValues({
                ...changeemailValues,
                newEmail: emailValue,
              })
            }
          />
          <TextInput
            type="password"
            label="Current Password"
            placeholder="Current Password"
            handleChange={(passwordValue) =>
              updateChangeemailValues({
                ...changeemailValues,
                password: passwordValue,
              })
            }
          />
          <Button type="submit">Change Email</Button>
        </form>
      </div>
    </S.ChangeEmailForm>
  );
};

ChangeEmailForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default ChangeEmailForm;
