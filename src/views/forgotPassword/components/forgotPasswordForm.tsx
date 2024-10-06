import React, { useState } from "react";

import { FormData, Errors } from "../model/";
import { handleSubmit } from "../services";

import Button from "../../../ui/Button";
import Input from "../../../ui/Input";

import { emailIcon } from "../../../assets/icons";

function ForgotPasswordForm() {
  const [formData, setFormData] = useState<FormData>({
    email: "",
  });

  const [errors, setErrors] = useState<Errors>({
    email: "",
  });

  const handleChange = (value: string, name: string) => {
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" }); // Clear the error when the user starts typing
  };

  console.log(formData);

  return (
    <form
      onSubmit={(event) => {
        handleSubmit(event, formData);
      }}
    >
      <Input
        type="email"
        name="email"
        id="email"
        placeholder="Enter Email Address"
        required={true}
        icon={emailIcon}
        wrapperClass="mb-4"
        error={errors.email}
        onChange={(value: string) => {
          handleChange(value, "email");
        }}
      />
      <div className="my-4">
        <Button text="Reset Password" className="w-full" />
      </div>
    </form>
  );
}

export default ForgotPasswordForm;
