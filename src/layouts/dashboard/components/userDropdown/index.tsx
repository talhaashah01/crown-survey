import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  userIcon,
  placeholderUser,
  arrowDownIcon,
} from "../../../../assets/icons";
import { userImage } from "../../../../assets/images/generic";

import "./style.css";
import formatIdentifier from "../../../../infrastructure/utility/formatIdentifier";

const UserDropdown = ({ user }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const dropdownHeadRef = useRef<HTMLDivElement | null>(null);
  const dropdownBodyRef = useRef<HTMLDivElement | null>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // const updatePosition = () => {
  //   if (dropdownHeadRef.current && dropdownBodyRef.current) {
  //     const dropdownHead = dropdownHeadRef.current;
  //     const dropdownBody = dropdownBodyRef.current;
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", updatePosition);
  //   window.addEventListener("resize", updatePosition);
  //   updatePosition(); // Call it initially to set the correct position
  //   return () => {
  //     window.removeEventListener("scroll", updatePosition);
  //     window.removeEventListener("resize", updatePosition);
  //   };
  // }, []);

  // useEffect(() => {
  //   if (isOpen) {
  //     updatePosition();
  //   }
  // }, [isOpen]);

  const closeDropdown = (e: MouseEvent) => {
    if (dropdownRef.current) {
      const target = e.target as Node;
      let checkDropDown = dropdownRef.current.contains(target);
      if (!checkDropDown) setIsOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("mousedown", (e) => {
      closeDropdown(e);
    });
  }, []);

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("auth");
    localStorage.removeItem("token");
    localStorage.removeItem("userID");
    if (!localStorage.getItem("token")) {
      navigate("/");
    }
  };

  return (
    <div
      className={`userDropdownWrapper ${isOpen ? "open" : ""}`}
      ref={dropdownRef}
    >
      <div
        className="userDropdownHead"
        onClick={toggleDropdown}
        ref={dropdownHeadRef}
      >
        <>
          <img
            src={user?.image || placeholderUser}
            alt="User Image"
            className="userImage"
          />
          <div className="userDetails">
            <p className="title-7 capitalize theme-black">
              {user?.firstName} {user?.lastName}
            </p>
            <div className="relative dropdownArrowWrapper">
              <p className="paragraph-7 capitalize theme-black">
                {formatIdentifier(user?.role?.identifier)}
              </p>
              <img src={arrowDownIcon} alt="Arrow" className="dropdownArrow" />
            </div>
          </div>
        </>
      </div>
      <div className="userDropdownBody theme-white-bg" ref={dropdownBodyRef}>
        <>
          <Link to={"/profile"} className="options paragraph-6 capitalize">
            Profile
          </Link>
          <p className="options paragraph-6 capitalize" onClick={handleLogout}>
            Logout
          </p>
        </>
      </div>
    </div>
  );
};

export default UserDropdown;
