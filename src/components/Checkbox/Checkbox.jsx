import React from "react";
import PropTypes from "prop-types";
import * as S from "./Checkbox.styles";

const Checkbox = ({
  type,
  label,
  value,
  handleClick,
  handleChange,
  className,
}) => {
  return (
    <S.Checkbox className={className}>
      <div className="field">
        <input
          required
          className="input"
          id={label}
          type={type}
          value={value}
          onChange={(e) => handleChange(e.target.value)}
        />
        <div>
          <label className="label" htmlFor={label}>
            {label}
          </label>
          <span onClick={handleClick}> LKTrA narystės sąlygomis*</span>
        </div>
      </div>
    </S.Checkbox>
  );
};

Checkbox.propTypes = {
  type: PropTypes.oneOf(["text", "number", "email", "password", "checkbox"]),
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  handleChange: PropTypes.func,
};

Checkbox.defaultProps = {
  type: "checkbox",
};

export default Checkbox;
