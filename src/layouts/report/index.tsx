import React, { useState } from "react";

import ReportSidebarMain from "./components/reportSidebarMain";
import ReportSidebarSub from "./components/reportSidebarSub";

import "./style.css";

const ReportLayout = ({ mainData }) => {
  const [sidebarMainCollapse, setSidebarMainCollapse] = useState(false);
  const [sidebarSubCollapse, setSidebarSubCollapse] = useState(false);

  const toggleSidebarMainCollapse = () => {
    setSidebarMainCollapse(!sidebarMainCollapse);
  };

  const toggleSidebarSubCollapse = () => {
    setSidebarSubCollapse(!sidebarSubCollapse);
  };

  return (
    <>
      <div className="reportSidebars">
        <ReportSidebarMain
          collapsed={sidebarMainCollapse}
          toggleCollapse={toggleSidebarMainCollapse}
          data={mainData}
        />
        <ReportSidebarSub
          collapsed={sidebarSubCollapse}
          toggleCollapse={toggleSidebarSubCollapse}
          mainCollapsed={sidebarMainCollapse}
          // data={data}
        />
      </div>
    </>
  );
};

export default ReportLayout;
