import React from "react";

import MainCard from "./../../ui/MainCard";
import PageTitle from "./../../ui/PageTitle";

const Team = () => {
  return (
    <MainCard>
      <div className="xl:flex items-baseline justify-between">
        <PageTitle text={"All Employee"} />
      </div>
    </MainCard>
  );
};

export default Team;
