import React from "react";

import TableProps from "./model/tableProps";

import "./style.css";

const Table = ({ header, headerColSpan, align, children }: TableProps) => {
  return (
    <div className="themeTable mt-4">
      <table
        className={`w-full px-2 ${align ? `text-${align}` : "text-center"}`}
      >
        <thead>
          <tr className="theme-primary-soft-bg">
            {header.map((item, index) => (
              <th
                colSpan={headerColSpan ? headerColSpan : 1}
                key={index}
                className={`title-5 theme-black whitespace-nowrap ${
                  align ? `text-${align}` : "text-center"
                }`}
              >
                {item?.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </div>
  );
};

export default Table;
