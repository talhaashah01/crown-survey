import React from "react";
import { Link } from "react-router-dom";

import AuthCard from "../../ui/AuthCard";

import ForgotPasswordForm from "./components/forgotPasswordForm";

const ForgotPassword = () => {
  return (
    <>
      <AuthCard>
        <div className="text-center mb-4">
          <h2 className="title-1 theme-black mb-2">Reset your password</h2>
        </div>
        <ForgotPasswordForm />
      </AuthCard>
      <div className="flex justify-center items-center mt-4">
        <Link to={"/"} className="cta-5 theme-dark-gray">
          Return to Sign In
        </Link>
      </div>
    </>
  );
};

export default ForgotPassword;
