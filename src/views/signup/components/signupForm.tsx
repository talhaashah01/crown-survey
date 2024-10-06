import React from "react";
import Button from "../../../ui/Button";
import Input from "../../../ui/Input";
import { emailIcon, lockIcon, userIcon } from "../../../assets/icons";
import { Link } from "react-router-dom";

function SignupForm() {
  return (
    <form>
      <Input
        type="text"
        name="fname"
        id="fname"
        placeholder="Enter First Name"
        required={true}
        icon={userIcon}
        wrapperClass="mb-4"
      />
      <Input
        type="text"
        name="lname"
        id="lname"
        placeholder="Enter Last Name (Optional)"
        required={false}
        icon={userIcon}
        wrapperClass="mb-4"
      />
      <Input
        type="email"
        name="email"
        id="email"
        placeholder="Enter Email Address"
        required={true}
        icon={emailIcon}
        wrapperClass="mb-4"
      />
      <div className="grid sm:grid-flow-col sm:grid-cols-2 gap-2">
        <Input
          type="password"
          name="password"
          id="password"
          placeholder="Create Password"
          required={true}
          icon={lockIcon}
          wrapperClass="mb-4"
        />
        <Input
          type="password"
          name="rpassword"
          id="rpassword"
          placeholder="Repeat Password"
          required={true}
          icon={lockIcon}
          wrapperClass="mb-4"
        />
      </div>
      <div className="my-4">
        <Button text="Create your free account" className="w-full" />
      </div>
      <div className="mx-6 text-center">
        <p className="paragraph-6 theme-black">
          Creating an account means you're agree with our{" "}
          <Link to={"#_"} className="theme-primary">
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link to={"#_"} className="theme-primary">
            Privacy Policy
          </Link>
        </p>
      </div>
    </form>
  );
}

export default SignupForm;
