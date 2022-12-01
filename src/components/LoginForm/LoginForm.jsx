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
      <Hero title="Personal Area" />
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
                label="Email"
                placeholder="email@email.com"
                handleChange={(emailValue) =>
                  updateLoginValues({ ...loginValues, email: emailValue })
                }
              />
              <TextInput
                type="password"
                label="Password"
                placeholder="Password"
                handleChange={(passwordValue) =>
                  updateLoginValues({ ...loginValues, password: passwordValue })
                }
              />
              <Button type="submit">Login</Button>
            </form>
            <p>
              Not a member?
              <Link to="/register" title="Register" className="loginLink">
                Register
              </Link>
            </p>
            <p>
              Forgot password?
              <Link
                to="/forgot-password"
                title="Forgot Password"
                className="forgotPassLink"
              >
                Click Here
              </Link>
            </p>
          </div>
        </Section>
        <CardInfo>
          <p>Here you can access your account where you will be able:</p>
          <ul>
            <li>Check your license availability</li>
            <li>Subscribe to upcoming clinics</li>
            <li>Pay directly for your License or Clinics</li>
            <li>Stay up to date with our news</li>
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
