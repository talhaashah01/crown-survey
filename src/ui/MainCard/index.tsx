import React from "react";

import "./style.css";

const MainCard = ({ children, className = "" }) => {
  return (
    <div
      className={`card theme-white-bg py-[40px] px-[30px] rounded-lg ${className ? className : ""}`}
    >
      {children}
    </div>
  );
};

export default MainCard;
