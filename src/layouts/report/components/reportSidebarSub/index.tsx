import React from "react";

import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

import ReportSectionMainItem from "../reportSectionItem";

import "./style.css";

const ReportSidebarSub = ({ collapsed, toggleCollapse, mainCollapsed }) => {
  return (
    <div
      className={`reportSidebar reportSidebarSub ${collapsed ? "collapsed" : "expanded"} ${mainCollapsed ? "mainCollapsed" : ""}`}
    >
      <div className="reportSidebarHeader px-2 py-2 absolute left-0 top-0 w-full flex items-center justify-end">
        <button onClick={toggleCollapse}>
          {collapsed ? (
            <FaArrowRightLong className="sidebarToggle" />
          ) : (
            <FaArrowLeftLong className="sidebarToggle" />
          )}
        </button>
      </div>
      <div className="reportSection relative top-[30px]">
        <ReportSectionMainItem collapsed={collapsed} />
      </div>
    </div>
  );
};

export default ReportSidebarSub;
