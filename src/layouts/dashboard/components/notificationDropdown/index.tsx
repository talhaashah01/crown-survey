import React, { useEffect, useRef, useState } from "react";

import { notificationIcon } from "../../../../assets/icons";

import "./style.css";

const NotificationDropdown = ({ options }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const dropdownHeadRef = useRef<HTMLDivElement | null>(null);
  const dropdownBodyRef = useRef<HTMLDivElement | null>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  //   const handleOptionClick = (option: any) => {
  //     setSelectedValue(option);
  //     toggleDropdown();
  //     if (onSelect) {
  //       onSelect(option);
  //     }
  //   };

  const updatePosition = () => {
    if (dropdownHeadRef.current && dropdownBodyRef.current) {
      const dropdownHead = dropdownHeadRef.current;
      const dropdownBody = dropdownBodyRef.current;
      const dropdownHeadRect = dropdownHead?.getBoundingClientRect();
      const dropdownBodyRect = dropdownBody?.getBoundingClientRect();
      const top = dropdownHeadRect.bottom + window.scrollY + 4;
      
      // Calculate the left position to align with the right side of the icon
      const left = dropdownHeadRect.right - dropdownBodyRect.width + window.scrollX;
      
      setPosition({ top, left });
  
    }
  };
  

  useEffect(() => {
    window.addEventListener("scroll", updatePosition);
    window.addEventListener("resize", updatePosition);
    updatePosition(); // Call it initially to set the correct position
    return () => {
      window.removeEventListener("scroll", updatePosition);
      window.removeEventListener("resize", updatePosition);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      updatePosition();
    }
  }, [isOpen]);

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

  return (
    <div
      className={`notificationDropdownWrapper ${isOpen ? "open" : ""}`}
      ref={dropdownRef}
    >
      <div
        className="notificationDropdownHead"
        onClick={toggleDropdown}
        ref={dropdownHeadRef}
      >
        <>
          <img
            src={notificationIcon}
            alt="Notification"
            className="notificationIcon"
          />
        </>
      </div>
      <div
        className="notificationDropdownBody"
        style={{ top: position.top, left: position.left }}
        ref={dropdownBodyRef}
      >
        <>
          {options?.map((option, index) => (
            <p
              key={index}
              className="options paragraph-6 capitalize"
              //   onClick={() => handleOptionClick(option)}
            >
              {option?.text ? option?.text : option}
            </p>
          ))}
        </>
      </div>
    </div>
  );
};

export default NotificationDropdown;
