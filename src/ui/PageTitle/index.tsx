import React from "react";
import { useNavigate } from "react-router-dom";

import PageTitleProps from "./model/pageTitleProps";

import { arrowBackIcon } from "../../assets/icons";

import "./style.css";

const PageTitle = ({ text, backButton }: PageTitleProps) => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="flex items-center gap-3 mb-2">
      {backButton && (
        <button type="button" className="backButton" onClick={goBack}>
          <img src={arrowBackIcon} alt="Back" />
        </button>
      )}
      <h2 className="title-2 theme-black">{text}</h2>
    </div>
  );
};

export default PageTitle;
