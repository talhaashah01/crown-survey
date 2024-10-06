import React from "react";

import MainCard from "./../../ui/MainCard";
import PageTitle from "./../../ui/PageTitle";

const Profile = () => {
  return (
    <MainCard>
      <div className="xl:flex items-baseline justify-between">
        <PageTitle text={"Profile"} />
      </div>
    </MainCard>
  );
};

export default Profile;
