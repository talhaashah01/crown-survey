import React, { useEffect, useState } from "react";

import OrderType from "./model/orderType";

import OrderTable from "./components/orderTable";

import MainCard from "./../../ui/MainCard";
import PageTitle from "./../../ui/PageTitle";
import Input from "../../ui/Input";
import Button from "../../ui/Button";
import Dropdown from "../../ui/Dropdown";
import Pagination from "../../ui/Pagination";
import MultiDropdown from "../../ui/MultiDropdown";

import { searchIcon } from "../../assets/icons";

const orderHeader = [
  {
    id: 1,
    key: "no",
    title: "Order No",
    show: true,
  },
  {
    id: 2,
    key: "time",
    title: "Date and Time",
    show: true,
  },
  {
    id: 3,
    key: "id",
    title: "Order ID",
    show: true,
  },
  {
    id: 4,
    key: "method",
    title: "Payment Method",
    show: true,
  },
  {
    id: 5,
    key: "amount",
    title: "Total Amount",
    show: true,
  },
  {
    id: 6,
    key: "status",
    title: "Status",
    show: true,
  },
  {
    id: 7,
    key: "actions",
    title: "Actions",
    show: true,
  },
];

const orders = [
  {
    id: 1,
    no: 364,
    orderId: "ORD-156279277",
    time: "Aug 7, 2023 23:26",
    method: "Paypal",
    total: 89.99,
    status: {
      id: 1,
      text: "Completed",
    },
  },
  {
    id: 2,
    no: 365,
    orderId: "ORD-15627555",
    time: "Aug 9, 2023 12:45",
    method: "Visa",
    total: 12.5,
    status: {
      id: 2,
      text: "Cancelled",
    },
  },
  {
    id: 3,
    no: 367,
    orderId: "ORD-15617922",
    time: "Aug 9, 2023 18:21",
    method: "Skrill",
    total: 57.99,
    status: {
      id: 3,
      text: "In Process",
    },
  },
  {
    id: 4,
    no: 368,
    orderId: "ORD-199279285",
    time: "Aug 15, 2023 11:16",
    method: "Mastercard",
    total: 212.0,
    status: {
      id: 4,
      text: "Pending",
    },
  },
];

const allStatuses = [
  { id: 0, text: "Show All" },
  { id: 1, text: "Completed" },
  { id: 2, text: "Cancelled" },
  { id: 3, text: "In Process" },
  { id: 4, text: "Pending" },
];

const allLimits = [
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
  { id: 0, text: "Default" },
  { id: 1, text: "Low to High" },
  { id: 2, text: "High to Low" },
];

const Orders = () => {
  const [data, setData] = useState<OrderType[]>([]);

  const [search, setSearch] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);

  const [status, setStatus] = useState<{ id: number; text: string }>({
    id: 0,
    text: "Show All",
  });
  const [statuses, setStatuses] = useState<{ id: number; text: string }[]>([]);

  const [priceSort, setPriceSort] = useState<{ id: number; text: string }>({
    id: 0,
    text: "Default",
  });
  const [pricesSort, setPricesSort] = useState<{ id: number; text: string }[]>(
    []
  );

  const [limit, setLimit] = useState<{ text: string; value: number }>({
    text: "",
    value: 0,
  });

  const [showOrderHeader, setShowOrderHeader] = useState<any>([]);

  useEffect(() => {
    setData(orders);
    setStatuses(allStatuses);
    setPricesSort(allPriceSort);
    setLimit(allLimits[0]);
  }, []);

  useEffect(() => {
    setShowOrderHeader(orderHeader);
  }, [orderHeader]);

  useEffect(() => {
    let duplicateStatus = { ...status };
    duplicateStatus = statuses[0];
    setStatus(duplicateStatus);
  }, [statuses]);

  useEffect(() => {
    let duplicatePriceSort = { ...priceSort };
    duplicatePriceSort = pricesSort[0];
    setPriceSort(duplicatePriceSort);
  }, [pricesSort]);

  return (
    <MainCard>
      <div className="xl:flex items-baseline justify-between">
        <PageTitle text={"Order List"} />

        <div className="actions flex items-end justify-end flex-col-reverse md:flex-row gap-3">
          <Input
            id="search"
            icon={searchIcon}
            name="search"
            placeholder="Search"
            wrapperClass=" mb-2 w-full md:w-auto"
            onChange={(value: string) => {
              setSearch(value);
            }}
          />
          <div className="flex items-center justify-end gap-2 w-full md:w-auto">
            <Button text="Export PDF" className="mb-2" />
          </div>
        </div>
      </div>
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
          <div className="flex gap-4 items-end">
            <div className="mb-2 w-full">
              <p className="paragraph-6 theme-gray">Price:</p>
              <Dropdown
                options={pricesSort}
                selected={priceSort}
                onSelect={(option) => {
                  setPriceSort(option);
                }}
              />
            </div>
            <div className="mb-2 w-full">
              <p className="paragraph-6 theme-gray">Show / Hide Column:</p>
              <MultiDropdown
                options={orderHeader}
                onSelect={(selectedOptions) => {
                  setShowOrderHeader(selectedOptions);
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <OrderTable data={data} headers={showOrderHeader} />
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
          total={data.length}
          onPageChange={(page: number) => setCurrentPage(page)}
        />
      </div>
    </MainCard>
  );
};

export default Orders;
