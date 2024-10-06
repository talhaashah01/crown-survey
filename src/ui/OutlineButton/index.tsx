import React from "react";
import "./style.css";

interface PropsOutlineButton {
  text?: string;
  icon?: string;
  className?: string;
}

const OutlineButton = (props: PropsOutlineButton) => {
  const { text, icon, className } = props;
  return (
    <button className={`outlineButton ${className ? className : ""}`}>
      {icon && <img src={icon} />}
      {text}
    </button>
  );
};

export default OutlineButton;
