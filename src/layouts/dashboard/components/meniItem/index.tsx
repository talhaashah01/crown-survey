import React, { useState } from "react";

import { Link } from "react-router-dom";

import { IoAnalyticsOutline, IoTerminalSharp } from "react-icons/io5";

import { arrowDownIcon, dashIcon } from "../../../../assets/icons";

import "./style.css";

interface SubmenuItem {
  id: number;
  title: string;
  icon: string;
  link: string;
}

interface MenuItemProps {
  id: number;
  icon: any;
  title: string;
  domain: string;
  link?: string;
  submenu?: SubmenuItem[];
}

const MenuItem = ({
  item,
  collapsed,
}: {
  item: MenuItemProps;
  collapsed: boolean;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`menuItem ${isOpen ? "open" : ""} ${
        location.pathname.includes(`${item?.domain}`) ? "active" : ""
      }`}
    >
      {item?.submenu ? (
        <div
          className={`menuItemHeader cursor-pointer flex my-1 py-3 px-1 ${
            collapsed ? "justify-center" : "justify-between"
          }`}
          onClick={toggleOpen}
        >
          <div className="menuHeaderContent flex items-center gap-2">
            <img src={item?.icon} className="menuIcon" />
            {!collapsed && (
              <p className="menuText paragraph-6 theme-white">{item?.title}</p>
            )}
          </div>
          {!collapsed && (
            <img src={arrowDownIcon} alt="Arrow" className="menuArrow" />
          )}
        </div>
      ) : (
        <Link
          to={`${item?.link}`}
          className={`menuItemHeader cursor-pointer flex py-3 px-1 border-e-1 ${
            collapsed ? "justify-center" : "justify-between"
          }`}
        >
          <div className="menuHeaderContent flex items-center gap-2">
            {item?.icon}
            {!collapsed && (
              <p className="menuText paragraph-6 theme-primary-dark">
                {item?.title}
              </p>
            )}
          </div>
        </Link>
      )}

      {item?.submenu && (
        <ul className="menuItemBody">
          {item?.submenu?.map((item, index) => (
            <li key={index}>
              <Link
                to={item.link}
                className={`menuItemInner flex align-center gap-2 my-2 ${
                  collapsed ? "justify-center" : ""
                }`}
              >
                <img src={item?.icon} className="menuIcon" />
                {!collapsed && (
                  <p className="paragraph-6 theme-white capitalize">{item.title}</p>
                )}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MenuItem;
