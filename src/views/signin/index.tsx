import React from "react";

import SigninForm from "./components/signinForm";
import AuthCard from "../../ui/AuthCard";
import OutlineButton from "../../ui/OutlineButton";
import HorizontalSeparator from "../../ui/HorizontalSeparator";

import { appleIcon, googleIcon } from "./../../assets/icons/";
import { Link } from "react-router-dom";

function Signin() {
  return (
    <>
        <AuthCard>
          <div className="text-center mb-4">
            <h2 className="title-1 theme-black mb-2">
              Welcome <span className="theme-primary">Back</span>
            </h2>
            {/* <p className="paragraph-5 theme-gray">
              Please use your registered account.
            </p> */}
          </div>
          {/* <div className="grid grid-flow-col grid-cols-2 gap-2">
            <OutlineButton text={"Apple"} icon={appleIcon} className="w-full" />
            <OutlineButton text={"Google"} icon={googleIcon} className="w-full" />
          </div>
          <HorizontalSeparator
            text="OR"
            className="my-4"
            textClass="theme-gray"
            lineClass="theme-gray-bg"
          /> */}
          <SigninForm />
        </AuthCard>
        {/* <div className="flex justify-center items-center gap-2 mt-4">
          <Link to={"/signup"} className="cta-5 theme-dark-gray">Create New Account</Link>
          <span>|</span>
          <Link to={"/forgot-password"} className="cta-5 theme-dark-gray">Forgot Password?</Link>
        </div> */}
    </>
  );
}

export default Signin;
