import React, { useState } from "react";
import PropTypes from "prop-types";
import * as S from "./RegisterForm.styles";
import TextInput from "../TextInput/TextInput";
import Button from "../Button/Button";
import Section from "../Section/Section";
import Hero from "../Hero/Hero";
import Checkbox from "../Checkbox/Checkbox";

const RegisterForm = ({
  handleSubmit,
  handleChange,
  togglePopup,
  setChecked,
  checked,
}) => {
  const [registerValues, updateRegisterValues] = useState();

  return (
    <S.RegisterForm>
      <Hero title="Register" />
      <Section>
        <div className="formSection">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              e.target.reset();

              handleSubmit(registerValues);
            }}
          >
            <TextInput
              type="text"
              label="Name"
              placeholder="Name"
              handleChange={(nameValue) =>
                updateRegisterValues({
                  ...registerValues,
                  name: nameValue
                    .split()
                    .map(
                      (e) =>
                        e.charAt(0).toUpperCase() + e.substring(1).toLowerCase()
                    )
                    .toString(),
                })
              }
            />
            <TextInput
              type="text"
              label="Surname"
              placeholder="Surname"
              handleChange={(surnameValue) =>
                updateRegisterValues({
                  ...registerValues,
                  surname: surnameValue
                    .split()
                    .map(
                      (e) =>
                        e.charAt(0).toUpperCase() + e.substring(1).toLowerCase()
                    )
                    .toString(),
                })
              }
            />
            <TextInput
              type="email"
              label="Email"
              placeholder="email@email.com"
              handleChange={(emailValue) =>
                updateRegisterValues({ ...registerValues, email: emailValue })
              }
            />
            <TextInput
              type="password"
              label="Password"
              placeholder="Password"
              handleChange={(passwordValue) =>
                updateRegisterValues({
                  ...registerValues,
                  password: passwordValue,
                })
              }
            />
            <Checkbox
              type="checkbox"
              label="I agree with"
              handleChange={() => setChecked(!checked)}
              handleClick={togglePopup}
            />
            <Button type="submit">Register</Button>
          </form>
        </div>
      </Section>
    </S.RegisterForm>
  );
};

RegisterForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default RegisterForm;
