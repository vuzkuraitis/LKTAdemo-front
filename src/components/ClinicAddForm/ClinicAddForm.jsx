import React, { useState } from "react";
import PropTypes from "prop-types";
import * as S from "./ClinicAddForm.styles";
import TextInput from "../TextInput/TextInput";
import Button from "../Button/Button";
import Section from "../Section/Section";
import Loading from "../Loading/Loading";
import Hero from "../Hero/Hero";

const ClinicAddForm = ({ handleSubmit }) => {
  const [registerValues, updateRegisterValues] = useState();
  const [loading, setLoading] = useState(false);

  return (
    <S.ClinicAddForm>
      <Hero title="Add Clinic" />
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
              label="City and date: example (Miestas 25.01 - 28.01)"
              placeholder="City and date"
              handleChange={(cityValue) =>
                updateRegisterValues({
                  ...registerValues,
                  name: cityValue
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
              label="Place: example (Kauno Techn Universitetas)"
              placeholder="Place"
              handleChange={(placeValue) =>
                updateRegisterValues({
                  ...registerValues,
                  place: placeValue
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
              label="Address: example (Gatve g. 3, Miestas)"
              placeholder="Address"
              handleChange={(addressValue) =>
                updateRegisterValues({
                  ...registerValues,
                  address: addressValue,
                })
              }
            />
            <TextInput
              type="number"
              label="Duration: example (number in hours (40))"
              placeholder="Duration"
              handleChange={(durationValue) =>
                updateRegisterValues({
                  ...registerValues,
                  hours: Number(durationValue),
                })
              }
            />
            <TextInput
              type="number"
              label="Price: example (Price in number (25.00))"
              placeholder="Price"
              handleChange={(priceValue) =>
                updateRegisterValues({
                  ...registerValues,
                  price: Number(priceValue),
                })
              }
            />
            <TextInput
              type="date"
              label="Start date: example (Start date of the Clinic)"
              placeholder="Start Date"
              handleChange={(dateValue) =>
                updateRegisterValues({
                  ...registerValues,
                  start_date: dateValue,
                })
              }
            />
            <Button type="submit">Submit</Button>
          </form>
        </div>
      </Section>
    </S.ClinicAddForm>
  );
};

ClinicAddForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default ClinicAddForm;
