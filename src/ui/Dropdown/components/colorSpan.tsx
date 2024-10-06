import React from "react";
import ColorProps from "../model/colorProps";

const ColorSpan = ({ color }: ColorProps) => {
  if (typeof color === "object") {
    return (
      <>
        <span
          style={{ background: color.code }}
          className="colorSpan shrink-0"
        ></span>
        <span className="paragraph-6">{color.name}</span>
      </>
    );
  } else {
    return (
      <span style={{ background: color }} className="colorSpan shrink-0"></span>
    );
  }
};

export default ColorSpan;
