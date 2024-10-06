import React, { useState } from "react";

import "./style.css";
import { FaAngleDown } from "react-icons/fa6";

const ReportSectionMainItem = ({ collapsed, value }) => {
  const [isOpenSub, setIsOpenSub] = useState(false);

  const toggleSubSections = () => {
    setIsOpenSub(!isOpenSub);
  };
  return (
    <>
      <div className="reportSectionMainItem flex items-baseline justify-between  px-2 py-1 mb-2">
        <div
          className={`cursor-pointe flex items-baseline gap-2 ${collapsed ? "justify-center" : ""}`}
        >
          <span className="title-3">{value?.code}</span>
          {!collapsed && <span className="paragraph-6">{value?.name}</span>}
        </div>
        {value?.subSections.length > 0 && (
          <button onClick={toggleSubSections}>
            <FaAngleDown />
          </button>
        )}
      </div>
      {value?.subSections.length > 0 && isOpenSub && (
        <div className="repotySectionMainSubItemWrapper">
          {value?.subSections.map((item, index) => (
            <div className="repotySectionMainSubItem cursor-pointe flex items-baseline gap-2">
                <p className="title-6">{item?.code}</p>
                <p className="paragraph-6">{item?.name}</p>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default ReportSectionMainItem;
