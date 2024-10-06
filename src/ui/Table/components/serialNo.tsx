import React from "react";

const SerialNo = ({ index }) => {
  return <>{String(index + 1).length < 2 ? "0" + (index + 1) : index + 1}</>;
};

export default SerialNo;
