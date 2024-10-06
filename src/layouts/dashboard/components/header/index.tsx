import React from "react";
import { useNavigate } from "react-router-dom";

import HeaderProps from "./../../model/headerProps";

import "./style.css";
import NotificationDropdown from "../notificationDropdown";
import UserDropdown from "../userDropdown";

const user = {
  id: 1,
  firstName: "Admin",
  role_id: 1,
  lastName: "Crown",
  email: "admin@gmail.com",
  password: "$2b$10$jMxIZXAbR3lbUGjfHc2pceDHAffLtsmUsTOBWt/tyUcxzyDublo1.",
  isActive: true,
  createdAt: "2023-11-08T13:55:08.000Z",
  updatedAt: "2023-11-08T13:55:08.000Z",
  role: {
    id: 1,
    identifier: "SUPER_ADMIN",
    createdAt: "2023-10-24T07:46:08.000Z",
    updatedAt: "2023-10-24T07:46:08.000Z",
  },
  rolePermission: [],
};

const Header = ({ collapsed }: HeaderProps) => {
  return (
    <div className={`dashboardHeader ${collapsed ? "collapsed" : "expanded"}`}>
      <div className="flex justify-between items-center px-3 py-3">
        <div className="searchBar">
        </div>
        <div className="details flex items-center gap-2">
          <div className="notification">
            {/* <Dropdown  /> */}
            {/* <NotificationDropdown
              options={[
                { text: "abc" },
                { text: "abasdsadsadsc" },
                { text: "abc" },
              ]}
            /> */}
          </div>
          <div className="user">
            <UserDropdown user={user} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
