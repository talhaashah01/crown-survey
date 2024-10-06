import React from "react";

import { PropsStatusBadge } from "./model/props";
import { mapStatus } from "./services/mapStatus";

import "./style.css";

const StatusBadge = ({ text, status, className }: PropsStatusBadge) => {
  const badgeText = mapStatus(status);
  return (
    <span
      className={`badge whitespace-nowrap title-6 ${badgeText} ${
        className ? className : ""
      }`}
    >
      {text || badgeText}
    </span>
  );
};

export default StatusBadge;
