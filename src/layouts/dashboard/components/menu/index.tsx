import React from "react";
import {
  categoryIcon,
  dashboardIcon,
  productIcon,
  rolesIcon,
  userIcon,
  ordersIcon,
  dashIcon,
  planeIcon,
} from "../../../../assets/icons";
import MenuItem from "../meniItem";

import { IoAnalyticsOutline } from "react-icons/io5";
import { TbReport } from "react-icons/tb";
import { ImInsertTemplate } from "react-icons/im";

import "./style.css";

const Menu = ({ collapsed }: { collapsed: boolean }) => {
  const menu = [
    {
      id: 1,
      icon: <IoAnalyticsOutline className="menuIcon" />,
      title: "Dashboard",
      domain: "dashboard",
      link: "/dashboard",
    },
    {
      id: 2,
      icon: <TbReport className="menuIcon" />,
      title: "Report Management",
      domain: "report-management",
      link: "/report-management",
    },
    {
      id: 3,
      icon: <ImInsertTemplate className="menuIcon" />,
      title: "Template Management",
      domain: "template-management",
      link: "/template-management",
    },
    // {
    //   id: 3,
    //   icon: productIcon,
    //   title: "Bookings",
    //   domain: "bookings",
    //   submenu: [
    //     {
    //       id: 1,
    //       title: "Booking List",
    //       icon: dashIcon,
    //       link: "/bookings/",
    //     },
    //     {
    //       id: 2,
    //       title: "Add Booking",
    //       icon: dashIcon,
    //       link: "/bookings/add",
    //     },
    //   ],
    // },
    // {
    //   id: 3,
    //   icon: categoryIcon,
    //   title: "Users",
    //   domain: "users",
    //   submenu: [
    //     {
    //       id: 1,
    //       title: "Submenu Item 1",
    //       icon: dashIcon,
    //       link: "/category/item1",
    //     },
    //     {
    //       id: 2,
    //       title: "Submenu Item 2",
    //       icon: dashIcon,
    //       link: "/category/item2",
    //     },
    //   ],
    // },
    // {
    //   id: 4,
    //   icon: userIcon,
    //   title: "Team Management",
    //   domain: "team",
    //   submenu: [
    //     {
    //       id: 1,
    //       title: "All Employee",
    //       icon: dashIcon,
    //       link: "/team/",
    //     },
    //     {
    //       id: 2,
    //       title: "Add New Employee",
    //       icon: dashIcon,
    //       link: "/team/add",
    //     },
    //   ],
    // },
    // {
    //   id: 5,
    //   icon: rolesIcon,
    //   title: "Team Roles",
    //   domain: "roles",
    //   submenu: [
    //     {
    //       id: 1,
    //       title: "All Roles",
    //       icon: dashIcon,
    //       link: "/roles/",
    //     },
    //     {
    //       id: 2,
    //       title: "Create Role",
    //       icon: dashIcon,
    //       link: "/roles/create",
    //     },
    //   ],
    // },
    // {
    //   id: 6,
    //   icon: ordersIcon,
    //   title: "Orders",
    //   domain: "order",
    //   submenu: [
    //     {
    //       id: 1,
    //       title: "Order List",
    //       icon: dashIcon,
    //       link: "/orders/",
    //     },
    //   ],
    // },
  ];

  return (
    <div className="menuWrapper px-2">
      {menu.map((items, index) => (
        <MenuItem key={index} item={items} collapsed={collapsed} />
      ))}
    </div>
  );
};

export default Menu;
