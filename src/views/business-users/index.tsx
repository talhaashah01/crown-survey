import React, { useEffect, useState } from "react";

import usersData from './data/users.json'

import UsersType from "./model/usersType";

import getUsers from "./services/getUsers";

import UserTable from "./components/userTable";

import MainCard from "./../../ui/MainCard";
import PageTitle from "./../../ui/PageTitle";
import Input from "../../ui/Input";
import Button from "../../ui/Button";
import Dropdown from "../../ui/Dropdown";
import Pagination from "../../ui/Pagination";

import { searchIcon } from "../../assets/icons";

const userHeader = [
  {
    id: 1,
    key: "no",
    title: "No",
  },
  {
    id: 2,
    key: "name",
    title: "Name",
  },
  {
    id: 3,
    key: "email",
    title: "Email Address",
  },
  {
    id: 4,
    key: "phone",
    title: "Phone",
  },
  {
    id: 5,
    key: "status",
    title: "Status",
  },
  {
    id: 6,
    key: "actions",
    title: "Actions",
  },
];

const allStatuses = [
  { id: 1, text: "all" },
  { id: 2, text: "approved" },
  { id: 3, text: "pending" },
  { id: 4, text: "rejected" },
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

const allPriceSort = [
  { id: 1, text: "Default" },
  { id: 2, text: "Low to High" },
  { id: 3, text: "High to Low" },
];

const BusinessUsers = () => {
  const [response, setResponse] = useState<any>(null);
  const [data, setData] = useState<UsersType>({});
  const [dataCount, setDataCount] = useState<number>(0);
  const [loading, setLoading] = useState(false);

  const [status, setStatus] = useState<{ id: number; text: string }>({
    id: 0,
    text: "",
  });
  const [statuses, setStatuses] = useState<{ id: number; text: string }[]>([]);

  const [businessEmail, setBusinessEmail] = useState<string>("");
  const [limit, setLimit] = useState(allLimits[0]);
  const [currentPage, setCurrentPage] = useState<number>(1);

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
    const result = usersData;
    setResponse(result);
    setData(result);
    setDataCount(result.totalCount)
    setLoading(false);
  }

  // useEffect(() => {
  //   fetchData();
  // }, [limit, currentPage, search]);


  useEffect(() => {
    fetchData();
  }, [limit, currentPage]);

  useEffect(() => {
    setStatuses(allStatuses);
  }, []);

  useEffect(() => {
    let duplicateStatus = { ...status };
    duplicateStatus = statuses[0];
    setStatus(duplicateStatus);
  }, [statuses]);

  const handleSendInvitation = () => {
    // console.log(businessEmail)
  console.log(usersData)

  }

  return (
    <MainCard>
      <div className="w-full mb-4">
        <PageTitle text={"Business Users"} />
      </div>
      <div className="actions md:flex gap-4 items-baseline">
        <Input
          id="email"
          icon={searchIcon}
          name="Email"
          placeholder="Enter Email Address"
          wrapperClass=" mb-2 w-full md:w-auto grow mb-3"
          onChange={(value: string) => {
            setBusinessEmail(value);
          }}
        />
        <Button text="Send Invitation" className="mb-2 w-full md:w-auto" onClick={handleSendInvitation} />
      </div>
      {loading ? (
        <p>Loading...</p>
      ) :
        (<>
          {response?.isError ? (
            <p>Error</p>
          ) : data?.totalCount === 0 ? (
            <p>No Users</p>
          ) : (
            <>
              <div className="xl:flex items-center justify-between">
                <p className="paragraph-6 theme-dark-gray mb-2">Filter By:</p>
                <div className="filters md:flex block gap-4">
                  <div className="flex gap-4 items-end">
                    <div className="mb-2 w-full">
                      <p className="paragraph-6 theme-gray">Status:</p>
                      <Dropdown
                        options={statuses}
                        selected={status}
                        onSelect={(option) => {
                          setStatus(option);
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <UserTable data={data.users} headers={userHeader} />
              <div className="xl:flex items-center justify-between mt-4">
                <Dropdown
                  options={allLimits}
                  selected={limit}
                  onSelect={(option) => {
                    setLimit(option);
                  }}
                />
                <Pagination
                  limit={limit.value}
                  total={dataCount}
                  onPageChange={(page: number) => setCurrentPage(page)}
                />
              </div>
            </>
          )
          }
        </>)
      }
    </MainCard >
  );
};

export default BusinessUsers;
