import React, { useEffect, useState } from "react";
import InputProps from "./model/inputProps";

import "./style.css";

function Input({
  type,
  name,
  value,
  id,
  placeholder,
  required,
  error,
  icon,
  onChange,
  wrapperClass,
  large,
  secondary,
}: InputProps) {
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    if (value) {
      setInputValue(value);
    }
  }, [value]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    if (onChange) {
      onChange(e.target.value);
    }
  };

  return (
    <div
      className={`inputWrapper ${required ? "pt-4" : ""} ${wrapperClass || ""}`}
    >
      {error && (
        <p className="mainInputError paragraph-7 text-end theme-error">
          {error}
        </p>
      )}
      <div className="inputWrapperInner">
        {icon && (
          <div className="icon iconLeft">
            <img
              src={icon}
              className={`iconImage ${secondary ? "theme-primary" : ""}`}
            />
          </div>
        )}

        <input
          type={type || "text"}
          name={name || ""}
          id={id || ""}
          className={`mainInput ${secondary ? "theme-primary-dark-bg theme-white" : ""} ${
            large ? "large" : ""
          } ${icon ? "leftIcon" : ""}`}
          placeholder={placeholder || ""}
          required={required || false}
          onChange={(e) => {
            handleChange(e);
          }}
          value={inputValue}
        />
      </div>
    </div>
  );
}

export default Input;
