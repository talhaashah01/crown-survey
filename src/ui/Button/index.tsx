import React from "react";

import "./style.css";
import { Link } from "react-router-dom";

interface propsButton {
  text: string;
  type?: "button" | "submit" | "reset";
  unfilled?: boolean;
  gradient?: boolean;
  large?: boolean;
  className?: string;
  disabled?: boolean;
  link?: boolean;
  to?: string;
  onClick?: () => void;
}

function Button(props: propsButton) {
  const {
    text,
    type = "button",
    unfilled,
    gradient,
    large,
    className,
    disabled,
    link,
    to,
    onClick,
  } = props;

  return (
    <>
      {link ? (
        <Link
          to={to ? to : "/"}
          className={`mainButton cta-5 ${large ? "large" : ""} ${
            unfilled ? "unfilled" : gradient ? "gradient" : "filled"
          } ${disabled ? "disabled" : ""} ${className || ""}`}
        >
          {text || "Button"}
        </Link>
      ) : (
        <button
          type={type}
          disabled={disabled ? true : false}
          className={`mainButton cta-5 ${large ? "large" : ""} ${
            unfilled ? "unfilled" : gradient ? "gradient" : "filled"
          } ${disabled ? "disabled" : ""} ${className || ""}`}
          onClick={onClick}
        >
          {text || "Button"}
        </button>
      )}
    </>
  );
}

export default Button;
