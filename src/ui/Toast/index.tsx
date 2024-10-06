import React, { useEffect, useState } from "react";

import "./style.css";

interface ToastProps {
  visible: boolean;
  type?: string;
  title: string;
  message?: string;
}

const Toast = ({ visible, type, title, message }: ToastProps) => {
  return (
    <div
      className={`toast ${
        type == "success"
          ? "theme-success-soft-bg"
          : type == "error"
          ? "theme-error-soft-bg"
          : type == "warning"
          ? "theme-caution-soft-bg"
          : type == "info"
          ? "theme-available-soft-bg"
          : "theme-success-soft-bg"
      } ${visible ? "show" : ""}`}
    >
      <h3
        className={`title-6 theme-success capitalize ${
          type == "success"
            ? "theme-success"
            : type == "error"
            ? "theme-error"
            : type == "warning"
            ? "theme-caution"
            : type == "info"
            ? "theme-available"
            : "theme-success"
        }`}
      >
        {title}!
      </h3>
      <p
        className={`paragraph-6 theme-success ${
          type == "success"
            ? "theme-success"
            : type == "error"
            ? "theme-error"
            : type == "warning"
            ? "theme-caution"
            : type == "info"
            ? "theme-available"
            : "theme-success"
        }`}
      >
        {message}
      </p>
    </div>
  );
};

export default Toast;
