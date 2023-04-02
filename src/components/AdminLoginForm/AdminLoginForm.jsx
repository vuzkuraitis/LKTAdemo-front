import React, { useState } from "react";
import * as S from "./AdminLoginForm.styles";
import PropTypes from "prop-types";
import TextInput from "../TextInput/TextInput";
import Button from "../Button/Button";
import Section from "../Section/Section";
import Loading from "../Loading/Loading";

const AdminLoginForm = ({ handleSubmit }) => {
  const [loginValues, updateLoginValues] = useState();
  const [loading, setLoading] = useState(false);
  return (
    <S.AdminLoginForm>
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
                }, 2000);
              }}
            >
              <TextInput
                type="text"
                label="User"
                placeholder="Username"
                handleChange={(userValue) =>
                  updateLoginValues({ ...loginValues, user: userValue })
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
          </div>
        </Section>
      </div>
    </S.AdminLoginForm>
  );
};

AdminLoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default AdminLoginForm;
