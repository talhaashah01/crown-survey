import React, { useEffect, useState } from "react";

import CheckboxProps from "./model/checkboxProps";

import "./style.css";

const Checkbox = ({
  label,
  beforeLabel,
  state,
  containerClass,
  onChange,
}: CheckboxProps) => {
  const [isChecked, setIsChecked] = useState<boolean>(state);

  const handleClick = () => {
    const newState = !state;
    if (onChange) {
      onChange(newState);
    } else {
      setIsChecked(!isChecked);
    }
  };

  useEffect(() => {
    setIsChecked(state);
  }, [state]);

  return (
    <label
      className={`checkboxContainer ${containerClass && containerClass}`}
      onClick={handleClick}
    >
      {label && beforeLabel && (
        <span
          className={`paragraph-6 ${
            isChecked ? "theme-soft-gray" : "theme-dark-gray"
          }`}
        >
          {label ? label : ""}
        </span>
      )}
      <span className={`checkmark ${isChecked ? "checked" : ""}`}></span>
      {label && !beforeLabel && (
        <span
          className={`paragraph-6 ${
            isChecked ? "theme-soft-gray" : "theme-dark-gray"
          }`}
        >
          {label ? label : ""}
        </span>
      )}
    </label>
  );
};

export default Checkbox;
