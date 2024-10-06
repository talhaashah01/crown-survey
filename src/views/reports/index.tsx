import React, { useEffect, useState } from "react";

import { upcoming, ongoing, completed, cancelled } from "./data/reporrts";

import getUsers from "./services/getUsers";

import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

import ReportsTable from "./components/reportsTable";
import NewReportModal from "./components/newReportModal";

import MainCard from "./../../ui/MainCard";
import PageTitle from "./../../ui/PageTitle";
import Input from "../../ui/Input";
import Button from "../../ui/Button";
import Dropdown from "../../ui/Dropdown";
import Pagination from "../../ui/Pagination";

const reportsHeader = [
  {
    id: 1,
    key: "no",
    title: "No",
  },
  {
    id: 2,
    key: "id",
    title: "Report ID",
  },
  {
    id: 3,
    key: "date",
    title: "Date",
  },
  {
    id: 4,
    key: "status",
    title: "Status",
  },
  {
    id: 5,
    key: "actions",
    title: "Actions",
  },
];

const allStatuses = [
  { id: 1, text: "all" },
  { id: 2, text: "Completed" },
  { id: 3, text: "Due" },
];

const allLimits = [
  {
    text: "Show 5",
    value: 5,
  },
  {
    text: "Show 10",
    value: 10,
  },
  {
    text: "Show 25",
    value: 25,
  },
  {
    text: "Show 50",
    value: 50,
  },
];

const Reports = () => {
  const [response, setResponse] = useState<any>(null);
  const [data, setData] = useState<any>({});
  const [dataCount, setDataCount] = useState<number>(0);
  const [loading, setLoading] = useState(false);

  const [status, setStatus] = useState<{ id: number; text: string }>({
    id: 0,
    text: "",
  });
  const [statuses, setStatuses] = useState<{ id: number; text: string }[]>([]);

  const [key, setKey] = useState<any>("upcoming");
  const [limit, setLimit] = useState(allLimits[0]);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const [isOpenNewReportModal, setIsOpenNewReportModal] =
    useState<boolean>(false);

  // const fetchData = async () => {
  //   setLoading(true);
  //   const result = await getUsers(limit.value, currentPage, search);
  //   setResponse(result);
  //   setDataCount(result.totalCount);
  //   setData(result.users || []);
  //   setLoading(false);
  // };

  const fetchData = () => {
    setLoading(true);
    if (key == "upcoming") {
      const result = upcoming;
      setResponse(result);
      setData(result?.reports);
      setDataCount(result.totalCount);
    } else if (key == "ongoing") {
      const result = ongoing;
      setResponse(result);
      setData(result?.reports);
      setDataCount(result.totalCount);
    } else if (key == "completed") {
      const result = completed;
      setResponse(result);
      setData(result?.reports);
      setDataCount(result.totalCount);
    } else {
      const result = cancelled;
      setResponse(result);
      setData(result?.reports);
      setDataCount(result.totalCount);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [limit, currentPage, key]);

  useEffect(() => {
    setStatuses(allStatuses);
  }, []);

  useEffect(() => {
    let duplicateStatus = { ...status };
    duplicateStatus = statuses[0];
    setStatus(duplicateStatus);
  }, [statuses]);

  return (
    <MainCard>
      <div className="w-full mb-4 sm:flex justify-between">
        <PageTitle text={"Reports"} />
        <div className="text-right">
          <Button
            text="Create New"
            onClick={() => {
              setIsOpenNewReportModal(true);
            }}
          />
        </div>
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {response?.isError ? (
            <p>Error</p>
          ) : dataCount === 0 ? (
            <p>No Reports</p>
          ) : (
            <>
              <Tabs
                id="reports-status-tabs"
                activeKey={key}
                onSelect={(k) => setKey(k)}
                className="customTabs mb-3"
                justify
              >
                <Tab eventKey="upcoming" title="Upcoming">
                  <ReportsTable data={data} headers={reportsHeader} />
                </Tab>
                <Tab eventKey="ongoing" title="Ongoing">
                  <ReportsTable data={data} headers={reportsHeader} />
                </Tab>
                <Tab eventKey="completed" title="Completed">
                  <ReportsTable data={data} headers={reportsHeader} />
                </Tab>
                <Tab eventKey="cancelled" title="Cancelled">
                  <ReportsTable data={data} headers={reportsHeader} />
                </Tab>
              </Tabs>
              <div className="xl:flex items-center justify-between mt-4">
                <Dropdown
                  options={allLimits}
                  selected={limit}
                  onSelect={(option) => {
                    setLimit(option);
                  }}
                />
                <Pagination
                  currentPage={currentPage}
                  limit={limit.value}
                  total={dataCount}
                  onPageChange={(page: number) => setCurrentPage(page)}
                />
              </div>
            </>
          )}
        </>
      )}
      <NewReportModal
        modalShow={isOpenNewReportModal}
        modalSetShow={setIsOpenNewReportModal}
      />
    </MainCard>
  );
};

export default Reports;
