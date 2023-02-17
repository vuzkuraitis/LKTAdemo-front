import React, { useState } from "react";
import * as S from "./LoginForm.styles";
import PropTypes from "prop-types";
import TextInput from "../TextInput/TextInput";
import Button from "../Button/Button";
import Section from "../Section/Section";
import Hero from "../Hero/Hero";
import CardInfo from "../CardInfo/CardInfo";
import { Link } from "react-router-dom";

const LoginForm = ({ handleSubmit }) => {
  const [loginValues, updateLoginValues] = useState();
  return (
    <S.LoginForm>
      <Hero title="Asmeninė Paskyra" />
      <div className="login">
        <Section>
          <div className="formSection">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                e.target.reset();

                handleSubmit(loginValues);
              }}
            >
              <TextInput
                type="email"
                label="El Paštas"
                placeholder="email@email.com"
                handleChange={(emailValue) =>
                  updateLoginValues({ ...loginValues, email: emailValue })
                }
              />
              <TextInput
                type="password"
                label="Slaptažodis"
                placeholder="Slaptažodis"
                handleChange={(passwordValue) =>
                  updateLoginValues({ ...loginValues, password: passwordValue })
                }
              />
              <Button type="submit">Įeiti</Button>
            </form>
            <p>
              Neturite paskyros?
              <Link to="/register" title="Register" className="loginLink">
                Registruotis
              </Link>
            </p>
            <p>
              Pamiršote slaptažodį?
              <Link
                to="/forgot-password"
                title="Forgot Password"
                className="forgotPassLink"
              >
                Spausti čia
              </Link>
            </p>
          </div>
        </Section>
        <CardInfo>
          <p>Prisijungę į savo asmeninę paskyrą jūs galėsite:</p>
          <ul>
            <li>Patikrinti savo licenzijos galiojimo laiką</li>
            <li>Registruotis į būsimus seminarus</li>
            <li>Iškart susimokėti už savo licenziją ir seminarus</li>
            <li>Nepraleisti galimybės dalyvauti naujausiuose seminaruose</li>
          </ul>
        </CardInfo>
      </div>
    </S.LoginForm>
  );
};

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default LoginForm;
