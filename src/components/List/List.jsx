import React from "react";
import PropTypes from "prop-types";
import * as S from "./List.styles";

const List = ({ options, id, type }) => {
  return (
    <S.List>
      <ul option={options} id={id} type={type} value={id}>
        {options &&
          options.map((option) => (
            <li option={option.name} key={option.id} className="listItem">
              {option.name} {option.email} {option.license_nr} {option.valid}
            </li>
          ))}
      </ul>
    </S.List>
  );
};

List.propTypes = {
  type: PropTypes.oneOf(["text", "number"]),
  handleSubmit: PropTypes.func,
};

List.defaultProps = {
  type: "text",
};
export default List;
