import React, { useEffect, useRef, useState } from "react";

// import DropdownProps from "./model/dropdownProps";

import Checkbox from "../Checkbox";

import { arrowDownIcon } from "../../assets/icons";

import "./style.css";

const MultiDropdown = ({ options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const dropdownHeadRef = useRef<HTMLDivElement | null>(null);
  const dropdownBodyRef = useRef<HTMLDivElement | null>(null);

  const [selectedValues, setSelectedValues] = useState<any>([]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (state: boolean, option: any) => {
    const duplicateOptions = [...options];
    duplicateOptions.forEach((item) => {
      if (item.id == option.id) {
        item.show = state;
      }
    });
    options = duplicateOptions;
    const getCount = countSelected(options);
    setSelectedValues(getCount);
    // Optionally, you can call the onSelect prop with the updated selected values
    if (onSelect) {
      onSelect(duplicateOptions);
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

  const countSelected = (options) => {
    const duplicateOptions = [...options];
    let duplicateSelectedValues: any = [];
    duplicateOptions.forEach((item) => {
      if (item.show) {
        duplicateSelectedValues.push(item);
      }
    });
    return duplicateSelectedValues;
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
    updatePosition();
  }, [options]);

  useEffect(() => {
    if (options) {
      const getCount = countSelected(options);
      setSelectedValues(getCount);
    }
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
        <>
          {selectedValues.length > 0 ? (
            <p className="paragraph-6 capitalize whitespace-nowrap">
              {selectedValues.length} Selected
            </p>
          ) : (
            // Handle the case when no items are selected
            <p className="paragraph-6 capitalize whitespace-nowrap">
              None selected
            </p>
          )}
        </>
        <img src={arrowDownIcon} alt="Arrow" className="dropdownArrow" />
      </div>
      <div
        className="dropdownBody theme-white-bg"
        style={{ top: position.top, left: position.left }}
        ref={dropdownBodyRef}
      >
        <>
          {options?.map((option, index) => (
            <Checkbox
              key={index}
              state={option?.show || false}
              label={option?.title || option?.text}
              beforeLabel
              containerClass="justify-between py-[3px] px-[5px]"
              onChange={(state) => {
                handleOptionClick(state, option);
              }}
            />
          ))}
        </>
      </div>
    </div>
  );
};

export default MultiDropdown;
