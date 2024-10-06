import React from "react";
import { FormData } from "../model";
// import axios from "axios";

const validateForm = (formData: FormData) => {
  let isValid = true;
  const newErrors = {
    email: "",
  };

  // Validate email
  if (!formData.email) {
    newErrors.email = "Email is required";
    isValid = false;
  }

//   setErrors(newErrors);

  return isValid;
};

export const handleSubmit = (
  event: any,
  formData: FormData
) => {
  event.preventDefault();
  if (validateForm(formData)) {
    console.log("Forgot");
  } else {
    console.log("Forgot error");
  }
};
