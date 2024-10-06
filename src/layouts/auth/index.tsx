import React, { useEffect } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";

import { useLoaderToggle } from "../../infrastructure/contexts/pageLoaderContext";

import isAuthenticated from "../../routes/helper/isAuthenticated";

import { logo, logoBlack } from "./../../assets/images/generic";

function AuthLayout() {
  const navigate = useNavigate();
  const toggleLoaderContext = useLoaderToggle();
  const location = useLocation();

  // useEffect(() => {
  //   toggleLoaderContext(true);
  //   if (isAuthenticated()) {
  //     navigate("/dashboard", { replace: true });
  //   }
  //   toggleLoaderContext(false);
  // }, [navigate, location]);

  return (
    <section className="theme-soft-bg">
      <div className="min-h-screen flex items-center justify-center">
        <div className="grow mx-5 py-4">
          <div className="text-center mb-6">
            <img className="w-24 mx-auto" src={logo} alt="logo" />
          </div>
          <Outlet />
        </div>
      </div>
    </section>
  );
}

export default AuthLayout;
