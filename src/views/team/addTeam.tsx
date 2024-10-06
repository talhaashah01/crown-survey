import React from "react";

import MainCard from "../../ui/MainCard";
import PageTitle from "../../ui/PageTitle";

const AddTeam = () => {
  return (
    <MainCard>
      <div className="xl:flex items-baseline justify-between">
        <PageTitle text={"Add New Employee"} />
      </div>
    </MainCard>
  );
};

export default AddTeam;
