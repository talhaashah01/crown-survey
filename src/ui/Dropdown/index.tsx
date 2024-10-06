import React, { useEffect, useRef, useState } from "react";

import DropdownProps from "./model/dropdownProps";

import ColorSpan from "./components/colorSpan";

import { arrowDownIcon } from "../../assets/icons";

import "./style.css";

const Dropdown = ({ options, selected, type, onSelect }: DropdownProps) => {
  const [selectedValue, setSelectedValue] = useState<any>();
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const dropdownHeadRef = useRef<HTMLDivElement | null>(null);
  const dropdownBodyRef = useRef<HTMLDivElement | null>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: any) => {
    setSelectedValue(option);
    toggleDropdown();
    if (onSelect) {
      onSelect(option);
    }
  };

  const updatePosition = () => {
    if (dropdownHeadRef.current && dropdownBodyRef.current) {
      const dropdownHead = dropdownHeadRef.current;
      const dropdownHeadRect = dropdownHead?.getBoundingClientRect();
      const top = dropdownHeadRect.bottom + window.scrollY + 4;
      const left = dropdownHeadRect.left + window.scrollX;
      setPosition({ top, left });

      const dropdownBody = dropdownBodyRef.current;
      const dropdownBodyRect = dropdownBody?.getBoundingClientRect();

      if (dropdownBodyRect && dropdownHeadRect) {
        dropdownHead.style.width = dropdownBodyRect.width + 16 + "px";
      }
    }
  };

  useEffect(() => {
    setSelectedValue(selected);
  }, [selected]);

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
    updatePosition();
  }, [options]);

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
      className={`dropdownWrapper ${isOpen ? "open" : ""}`}
      ref={dropdownRef}
    >
      <div
        className="dropdownHead"
        onClick={toggleDropdown}
        ref={dropdownHeadRef}
      >
        {type === "color" ? (
          <ColorSpan color={selectedValue} />
        ) : (
          <>
            {typeof selectedValue == "object" ? (
              <p className="paragraph-6 capitalize whitespace-nowrap">
                {selectedValue?.text}
              </p>
            ) : (
              <p className="paragraph-6 capitalize whitespace-nowrap">
                {selectedValue}
              </p>
            )}
          </>
        )}
        <img src={arrowDownIcon} alt="Arrow" className="dropdownArrow" />
      </div>
      <div
        className="dropdownBody theme-white-bg"
        style={{ top: position.top, left: position.left }}
        ref={dropdownBodyRef}
      >
        {type === "color" ? (
          <>
            {options?.map((option, index) => (
              <div
                key={index}
                className={`options ${
                  option === selectedValue ? "disabled" : ""
                }`}
                onClick={() => handleOptionClick(option)}
              >
                <ColorSpan color={option?.color || option} />
              </div>
            ))}
          </>
        ) : (
          <>
            {options?.map((option, index) => (
              <p
                key={index}
                className={`options paragraph-6 capitalize ${
                  option === selectedValue ? "disabled" : ""
                }`}
                onClick={() => handleOptionClick(option)}
              >
                {option?.text ? option?.text : option}
              </p>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
