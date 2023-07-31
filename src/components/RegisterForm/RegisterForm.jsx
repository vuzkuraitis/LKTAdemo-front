import React, { useState } from "react";
import PropTypes from "prop-types";
import * as S from "./RegisterForm.styles";
import TextInput from "../TextInput/TextInput";
import Button from "../Button/Button";
import Section from "../Section/Section";
import Hero from "../Hero/Hero";
import Checkbox from "../Checkbox/Checkbox";
import Loading from "../Loading/Loading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";

const RegisterForm = ({
  handleSubmit,
  togglePopup,
  setChecked,
  checked,
  terms,
}) => {
  const [registerValues, updateRegisterValues] = useState();
  const [loading, setLoading] = useState(false);

  return (
    <S.RegisterForm>
      <Hero title="Registracija">
        <FontAwesomeIcon icon={faUserPlus} beatFade />
      </Hero>
      {loading ? (
        <Loading />
      ) : (
        <Section>
          <div className="formSection">
            <form
              onSubmit={(e) => {
                setLoading(true);
                e.preventDefault();
                e.target.reset();

                handleSubmit(registerValues);
                setTimeout(() => {
                  setLoading(false);
                }, 2000);
              }}
            >
              <TextInput
                type="text"
                label="Vardas"
                placeholder="Vardas"
                handleChange={(nameValue) =>
                  updateRegisterValues({
                    ...registerValues,
                    name: nameValue
                      .split()
                      .map(
                        (e) =>
                          e.charAt(0).toUpperCase() +
                          e.substring(1).toLowerCase()
                      )
                      .toString(),
                  })
                }
              />
              <TextInput
                type="text"
                label="Pavardė"
                placeholder="Pavardė"
                handleChange={(surnameValue) =>
                  updateRegisterValues({
                    ...registerValues,
                    surname: surnameValue
                      .split()
                      .map(
                        (e) =>
                          e.charAt(0).toUpperCase() +
                          e.substring(1).toLowerCase()
                      )
                      .toString(),
                  })
                }
              />
              <TextInput
                type="email"
                label="@ Paštas"
                placeholder="email@email.com"
                handleChange={(emailValue) =>
                  updateRegisterValues({ ...registerValues, email: emailValue })
                }
              />
              <TextInput
                type="password"
                label="Slaptažodis"
                placeholder="Slaptažodis"
                handleChange={(passwordValue) =>
                  updateRegisterValues({
                    ...registerValues,
                    password: passwordValue,
                  })
                }
              />
              <Checkbox
                type="checkbox"
                label="Aš sutinku su"
                handleChange={() => setChecked(!checked)}
                handleClick={togglePopup}
              />
              <Button type="submit">Registruotis</Button>
            </form>
          </div>
          {terms &&
            terms.map((term) => (
              <div className="termsconditions" key={term.id}>
                <h4>{term.terms_title}</h4>
                <p>{term.terms_text}</p>
                <p>{term.terms_terms}</p>
                <ol>
                  <li>{term.terms_term1}</li>
                  <li>{term.terms_term2}</li>
                  <li>{term.terms_term3}</li>
                  <li>{term.terms_term4}</li>
                </ol>
                <p>{term.terms_conditions}</p>
                <ol>
                  <li>{term.terms_condition1}</li>
                  <li>{term.terms_condition2}</li>
                </ol>

                <p>{term.terms_footer}</p>
              </div>
            ))}
        </Section>
      )}
    </S.RegisterForm>
  );
};

RegisterForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default RegisterForm;
