import React from "react";
import PropTypes from "prop-types";
import * as S from "./TextareaInput.styles";

const TextareaInput = ({
  type,
  label,
  placeholder,
  value,
  handleChange,
  className,
}) => {
  return (
    <S.TextareaInput className={className}>
      <div className="field">
        <label className="label" htmlFor={label}>
          {label}
        </label>
        <textarea
          required
          active="true"
          className="areainput"
          id={label}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => handleChange(e.target.value)}
        />
      </div>
    </S.TextareaInput>
  );
};

TextareaInput.propTypes = {
  type: PropTypes.oneOf(["text", "textarea"]),
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string,
  handleChange: PropTypes.func,
};

TextareaInput.defaultProps = {
  type: "textarea",
};

export default TextareaInput;
