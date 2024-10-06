import React, { useEffect, useState } from "react";

import getStats from "./services/getStats.";

import { useShowToastContext } from "../../infrastructure/contexts/toastContext";

import VerticalBarChart from "./components/verticalBars";

import MainCard from "./../../ui/MainCard";
import PageTitle from "../../ui/PageTitle";
import Toggle from "../../ui/Toggle";
import StatsCard from "../../ui/StatCard";
import Dropdown from "../../ui/Dropdown";

import { planeIcon, rolesIcon } from "../../assets/icons";

const allYears = [
  { id: 1, text: 2023 },
  { id: 2, text: 2024 },
];

const Dashboard = () => {
  const showToast = useShowToastContext();

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<any>(null);
  const [year, setYear] = useState<number>(2023);

  const fetchData = async (yearSelected: number) => {
    setLoading(true);
    const result = await getStats(yearSelected);
    setData(result);
    setLoading(false);
  };

  useEffect(() => {
    setYear(allYears[0].text);
  }, []);

  useEffect(() => {
    fetchData(year);
  }, [year]);

  return (
    <MainCard>
      <div className="xl:flex items-baseline justify-between">
        <PageTitle text={"Dashboard"} />
      </div>
       <div className="flex justify-end">
        <div className="flex items-center gap-2">
          <p className="paragraph-6">Year:</p>
          <Dropdown
            options={allYears}
            selected={year}
            onSelect={(option) => {
              setYear(option.text);
            }}
          />
        </div>
      </div>
      {/* {data && (
        <div className="statCards md:flex gap-2">
          <StatsCard
            number={data.stats.userCount}
            text={"Total Users"}
            image={rolesIcon}
          />
          <StatsCard
            number={data.stats.bookingsCount}
            text={"Total Bookings"}
            image={planeIcon}
          />
        </div>
      )}
      {data && (
        <div className="vertical">
          <VerticalBarChart stats={data?.stats?.stats} year={year} />
        </div>
      )} */}
    </MainCard>
  );
};

export default Dashboard;
