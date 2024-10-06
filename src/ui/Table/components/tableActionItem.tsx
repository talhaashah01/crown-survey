import React from "react";

import TableActionItemProps from "./../model/tableActionItemProps";

const TableActionItem = ({ icon, action, onClick }: TableActionItemProps) => {
  return (
    <button className="tableAction" onClick={onClick}>
      <img src={icon} alt={action} />
    </button>
  );
};

export default TableActionItem;
