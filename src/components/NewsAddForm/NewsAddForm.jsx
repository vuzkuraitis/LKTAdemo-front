import React, { useState } from "react";
import PropTypes from "prop-types";
import * as S from "./NewsAddForm.styles";
import TextInput from "../TextInput/TextInput";
import Button from "../Button/Button";
import Section from "../Section/Section";
import Loading from "../Loading/Loading";
import TextareaInput from "../TextareaInput/TextareaInput";

const NewsAddForm = ({ handleSubmit }) => {
  const [registerValues, updateRegisterValues] = useState();
  const [loading, setLoading] = useState(false);

  return (
    <S.NewsAddForm>
      {loading && <Loading />}
      <Section>
        <div className="formSection">
          <form
            onSubmit={(e) => {
              setLoading(true);
              e.preventDefault();
              e.target.reset();
              console.log(registerValues);

              handleSubmit(registerValues);
              setTimeout(() => {
                setLoading(false);
              }, 2000);
            }}
          >
            <TextInput
              type="text"
              label="Title"
              placeholder="Title"
              handleChange={(titleValue) =>
                updateRegisterValues({
                  ...registerValues,
                  title: titleValue,
                })
              }
            />
            <TextareaInput
              type="textarea"
              label="Text"
              placeholder="Text"
              handleChange={(textValue) =>
                updateRegisterValues({
                  ...registerValues,
                  text: textValue,
                })
              }
            />
            {/* <TextInput
              type="textarea"
              label="Text"
              placeholder="Text"
              handleChange={(textValue) =>
                updateRegisterValues({
                  ...registerValues,
                  text: textValue
                    .split()
                    .map(
                      (e) =>
                        e.charAt(0).toUpperCase() + e.substring(1).toLowerCase()
                    )
                    .toString(),
                })
              }
            /> */}
            <Button type="submit">Submit</Button>
          </form>
        </div>
      </Section>
    </S.NewsAddForm>
  );
};

NewsAddForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default NewsAddForm;
