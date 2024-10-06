import React, { useEffect, useState } from "react";

import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

import ReportSectionMainItem from "../reportSectionItem";

import "./style.css";

const ReportSidebarMain = ({ collapsed, toggleCollapse, data }) => {
  const [mainData, setMainData] = useState<any>(null);

  useEffect(() => {
    if (data) {
      setMainData(data);
    }
  }, [data]);

  return (
    <div
      className={`reportSidebar reportSidebarMain ${collapsed ? "collapsed" : "expanded"}`}
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
        {mainData &&
          mainData.map((item, index) => <ReportSectionMainItem collapsed={collapsed} value={item} key={index} />)}
      </div>
    </div>
  );
};

export default ReportSidebarMain;
