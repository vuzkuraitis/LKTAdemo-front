import React, { useState } from "react";
import * as S from "./LoginForm.styles";
import PropTypes from "prop-types";
import TextInput from "../TextInput/TextInput";
import Button from "../Button/Button";
import Section from "../Section/Section";
import Hero from "../Hero/Hero";
import CardInfo from "../CardInfo/CardInfo";
import { Link } from "react-router-dom";
import Loading from "../Loading/Loading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons";

const LoginForm = ({ handleSubmit }) => {
  const [loginValues, updateLoginValues] = useState();
  const [loading, setLoading] = useState(false);
  return (
    <S.LoginForm>
      <Hero title="Asmeninė Paskyra">
        <FontAwesomeIcon icon={faArrowRightToBracket} beatFade />
      </Hero>
      <div className="login">
        <Section>
          {loading && <Loading />}
          <div className="formSection">
            <form
              onSubmit={(e) => {
                setLoading(true);
                e.preventDefault();
                e.target.reset();

                handleSubmit(loginValues);
                setTimeout(() => {
                  setLoading(false);
                }, 5000);
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
            <li>Greita regitracija į būsimus seminarus</li>
            <li>Paprastas ir greitas už savo licenziją ir seminarus</li>
            <li>Registracija i krepšinio studijas</li>
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
