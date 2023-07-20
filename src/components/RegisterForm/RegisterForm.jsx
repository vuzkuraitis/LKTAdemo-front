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

const RegisterForm = ({ handleSubmit, togglePopup, setChecked, checked }) => {
  const [registerValues, updateRegisterValues] = useState();
  const [loading, setLoading] = useState(false);

  return (
    <S.RegisterForm>
      <Hero title="Registracija">
        <FontAwesomeIcon icon={faUserPlus} beatFade />
      </Hero>
      {loading && <Loading />}
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
                        e.charAt(0).toUpperCase() + e.substring(1).toLowerCase()
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
                        e.charAt(0).toUpperCase() + e.substring(1).toLowerCase()
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
        <div className="termsconditions">
          <h4>
            NARYSTĖS LIETUVOS KREPŠINIO TRENERIŲ ASOCIACIJOJE (LKTrA)
            REGLAMENTAS 2023 m. Liepos 1 d.
          </h4>
          <p>
            Lietuvos krepšinio trenerių asociacijos tikraisiais nariais (toliau
            nariais) gali būti Lietuvos Respublikos piliečiai: Lietuvos sporto
            mokyklų, lygų, klubų ir kitų krepšinio komandų treneriai.
          </p>
          <p>Asociacijos narių teisės:</p>
          <ol>
            <li>
              Asociacijos nariai turi teisę teikti pasiūlymus dėl veiklos
              organizavimo gerinimo, teikti pretenzijas, pareikalauti finansinės
              atskaitomybės už Asociacijos lėšų panaudojimą ir kitokiomis
              Lietuvos Respublikos įstatymams neprieštaraujančiomis formomis
              dalyvauti Asociacijos veikloje.
            </li>
            <li>
              Asociacijos nariai turi balsavimo teisę Asociacijos
              konferencijoje. Apie konferenciją jiems turi būti pranešta raštu,
              ne vėliau kaip prieš 30 dienų.
            </li>
            <li>
              Asociacijos nariai turi teisę dalyvauti Asociacijos
              organizuojamuose seminaruose ir kursuose, nemokamai gauti LKTrA
              metodinę medžiagą - informaciją.
            </li>
          </ol>
          <p>Asociacijos narių pareigos:</p>
          <ol>
            <li>
              Asociacijos nariai turi nustatyta tvarka mokėti Asociacijos
              rengiamo seminaro nario mokestį.
            </li>
            <li>
              Nariai ar Asociacijos veikloje dalyvaujantys asmenys gali bet kada
              išstoti iš Asociacijos. Tokiu atveju nario mokesčiai ar kitaip
              organizacijai perduotos lėšos ir turtas negrąžinami. Asociacijos
              narys pašalinamas iš jos, jei 2 metus nesumoka nustatyto nario
              mokesčio, prieš tai jį perspėjus.
            </li>
          </ol>

          <p>LKTrA prezidentas Rimantas Grigas</p>
        </div>
      </Section>
    </S.RegisterForm>
  );
};

RegisterForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default RegisterForm;
