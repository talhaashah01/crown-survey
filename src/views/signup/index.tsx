import React from "react";
import { Link } from "react-router-dom";

import SignupForm from "./components/signupForm";

import AuthCard from "../../ui/AuthCard";
import OutlineButton from "../../ui/OutlineButton";
import HorizontalSeparator from "../../ui/HorizontalSeparator";

import { appleIcon, googleIcon } from "../../assets/icons";

const Signup = () => {
  return (
    <>
      <AuthCard>
        <div className="text-center mb-4">
          <h2 className="title-1 theme-black mb-2">
            Get Started <span className="theme-primary">Free Today</span>
          </h2>
          <p className="paragraph-5 theme-gray">
            No card required. You'll get all the advanced functionality for free
            during the 14 day PRO trial.
          </p>
        </div>
        {/* <div className="grid grid-flow-col grid-cols-2 gap-2">
          <OutlineButton text={"Apple"} icon={appleIcon} className="w-full" />
          <OutlineButton text={"Google"} icon={googleIcon} className="w-full" />
        </div> */}
        <HorizontalSeparator
          text="OR"
          className="my-4"
          textClass="theme-gray"
          lineClass="theme-gray-bg"
        />
        <SignupForm />
      </AuthCard>
      <div className="flex justify-center items-center mt-4">
        <Link to={"/"} className="cta-5 theme-dark-gray">
          Already have an account?
        </Link>
      </div>
    </>
  );
};

export default Signup;
