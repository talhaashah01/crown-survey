import React, { useEffect, useState } from "react";

import ToggleProps from "./model/toggleProps";

import "./style.css";

const Toggle = ({ state, onChange }: ToggleProps) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (state != null) {
      setIsActive(state);
    }
  }, [state]);

  const handleToggle = () => {
    const swithcedIsActive = !isActive;
    setIsActive(swithcedIsActive);

    if (onChange) {
      onChange(swithcedIsActive);
    }
  };

  return (
    <div
      className={`toggle ${isActive ? "active" : "inactive"}`}
      onClick={handleToggle}
    >
      <span className="slider"></span>
    </div>
  );
};

export default Toggle;
