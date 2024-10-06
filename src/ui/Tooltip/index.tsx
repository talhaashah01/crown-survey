import React from "react";
import TooltipProps from "./model/props";
import "./style.css";

const Tooltip = ({ text, position, children }: TooltipProps) => {
  return (
    <div className="tooltipContainer">
      <span
        className={`tooltip theme-dark-gray title-7 ${
          position ? position : "top"
        }`}
      >
        {text}
      </span>
      {children}
    </div>
  );
};

export default Tooltip;
