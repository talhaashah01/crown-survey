import React, { useEffect, useState } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";

import { useLoaderToggle } from "../../infrastructure/contexts/pageLoaderContext";

import isAuthenticated from "../../routes/helper/isAuthenticated";

import Header from "./components/header";
import Sidebar from "./components/sidebar";

import "./style.css";

const DashboardLayout = () => {
  const navigate = useNavigate();
  const toggleLoaderContext = useLoaderToggle();
  const location = useLocation();

  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  // useEffect(() => {
  //   toggleLoaderContext(true);
  //   if (!isAuthenticated()) {
  //     navigate("/", { replace: true });
  //   }
  //   toggleLoaderContext(false);
  // }, [navigate, location]);

  return (
    <>
      <Header collapsed={collapsed} />
      <Sidebar collapsed={collapsed} onClick={toggleCollapse} />
      <div
        className={`dashboardBody theme-secondary-gradient-bg p-4 ${
          collapsed ? "collapsed" : "expanded"
        }`}
      >
        <Outlet />
      </div>
    </>
  );
};

export default DashboardLayout;
