import React from "react";
import "./style.css";

interface PropsHorizontalSeparator {
  text?: string;
  className?: string;
  lineClass?: string;
  textClass?: string;
}

const HorizontalSeparator = (props: PropsHorizontalSeparator) => {
  const { text, className, lineClass, textClass } = props;
  return (
    <div className={`horizontalSeparator ${className || ""}`}>
      <span className={lineClass ? lineClass : ""}></span>
      <p className={`paragraph-6 ${textClass ? textClass : ""}`}>{text}</p>
      <span></span>
    </div>
  );
};

export default HorizontalSeparator;
