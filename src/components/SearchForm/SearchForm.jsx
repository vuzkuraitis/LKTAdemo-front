import React, { useState } from "react";
import * as S from "./SearchForm.styles";
import PropTypes from "prop-types";
import TextInput from "../TextInput/TextInput";
import Button from "../Button/Button";
import Hero from "../Hero/Hero";

const SearchForm = ({ handleSubmit, setSelectedUsers }) => {
  const [cardValues, updateCardValues] = useState();

  return (
    <S.SearchForm>
      <Hero title="Find a Coach" />
      <div className="formSection">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            e.target.reset();

            handleSubmit(cardValues.name);
            setSelectedUsers([]);
            console.log(cardValues.name);
          }}
        >
          <TextInput
            className="always"
            type="text"
            label="Search"
            placeholder="Search by name..."
            handleChange={(nameValue) =>
              updateCardValues({ ...cardValues, name: nameValue })
            }
          />
          <Button type="submit">Search</Button>
        </form>
      </div>
    </S.SearchForm>
  );
};

SearchForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default SearchForm;
