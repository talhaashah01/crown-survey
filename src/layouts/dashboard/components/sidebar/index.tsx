import React from "react";

import SidebarProps from "../../model/sidebarProps";

import Menu from "../menu";

import { logo } from "../../../../assets/images/generic";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

import isAuthenticated from "../../../../routes/helper/isAuthenticated";

import "./style.css";

const Sidebar = ({ collapsed, onClick }: SidebarProps) => {
  return (
    <div className={`sidebar ${collapsed ? "collapsed" : "expanded"}`}>
      <div className={`sidebarHeader flex items-center ${collapsed ? "px-0" : "px-4"}`}>
        <img src={logo} alt="Logo" className="sidebarLogo" />
      </div>
      <Menu collapsed={collapsed} />
      <div className="sidebarFooter px-4 absolute left-0 bottom-0 w-full flex items-center justify-end">
        <button onClick={onClick}>
          {collapsed ? (
            <FaArrowRightLong className="sidebarToggle" />
          ) : (
            <FaArrowLeftLong className="sidebarToggle" />
          )}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
