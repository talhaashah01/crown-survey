import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useShowToastContext } from "../../../infrastructure/contexts/toastContext";

import { FormData, Errors } from "../model/";
import { handleSubmit } from "../services/";

import Button from "../../../ui/Button";
import Input from "../../../ui/Input";
import { emailIcon, lockIcon } from "../../../assets/icons";

function SigninForm() {
  const navigate = useNavigate();

  const showToast = useShowToastContext();

  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<Errors>({
    email: "",
    password: "",
  });

  const handleChange = (value: string, name: string) => {
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" }); // Clear the error when the user starts typing
  };

  return (
    <form
      onSubmit={(event) => {
        handleSubmit(event, formData, setErrors, navigate, showToast);
      }}
    >
      <Input
        type="email"
        name="email"
        id="email"
        placeholder="Enter Email Address"
        error={errors.email}
        icon={emailIcon}
        wrapperClass="mb-4"
        onChange={(value: string) => {
          handleChange(value, "email");
        }}
      />
      <Input
        type="password"
        name="password"
        id="password"
        placeholder="Enter Password"
        error={errors.password}
        icon={lockIcon}
        wrapperClass="mb-4"
        onChange={(value: string) => {
          handleChange(value, "password");
        }}
      />
      <div className="my-4">
        <Button text="Sign In" type="submit" className="w-full" />
      </div>
      {/* <div className="mx-6 text-center">
        <p className="paragraph-6 theme-black">
          By signing in you're agree with our{" "}
          <Link to={"#_"} className="theme-primary">
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link to={"#_"} className="theme-primary">
            Privacy Policy
          </Link>
        </p>
      </div> */}
    </form>
  );
}

export default SigninForm;
