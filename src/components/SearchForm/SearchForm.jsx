import React, { useState } from "react";
import * as S from "./SearchForm.styles";
import PropTypes from "prop-types";
import TextInput from "../TextInput/TextInput";
import Button from "../Button/Button";

const SearchForm = ({ handleSubmit, setSelectedUsers }) => {
  const [cardValues, updateCardValues] = useState();

  return (
    <S.SearchForm>
      <div className="formSection">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            e.target.reset();

            handleSubmit(cardValues.surname);
            setSelectedUsers([]);
          }}
        >
          <TextInput
            className="always"
            type="text"
            label="Paieška"
            placeholder="Paieška pagal Pavardę..."
            handleChange={(surnameValue) =>
              updateCardValues({ ...cardValues, surname: surnameValue })
            }
          />
          <Button type="submit">Ieškoti</Button>
        </form>
      </div>
    </S.SearchForm>
  );
};

SearchForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default SearchForm;
