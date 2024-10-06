import React, { useEffect, useState } from "react";

import getBookings from "./services/getBookings";

import BookingType from "./model/bookingType";

import BookingTable from "./components/bookingTable";

import MainCard from "./../../ui/MainCard";
import PageTitle from "./../../ui/PageTitle";
import Input from "../../ui/Input";
import Button from "../../ui/Button";
import Dropdown from "../../ui/Dropdown";
import Pagination from "../../ui/Pagination";

import { searchIcon } from "../../assets/icons";
import MultiDropdown from "../../ui/MultiDropdown";

const bookings = [
  {
    id: 1,
    bookingId: "#AA5002",
    flight: "8U450",
    date: "05/02/2024",
    from: "Tripoli",
    to: "London",
    status: {
      id: 1,
      text: "Confirmed",
    },
  },
  {
    id: 2,
    bookingId: "#CA8220",
    flight: "BJ634",
    date: "12/02/2024",
    from: "Dubai",
    to: "Tripoli",
    status: {
      id: 2,
      text: "Cancelled",
    },
  },
  {
    id: 3,
    bookingId: "#DD9512",
    flight: "BJ525",
    date: "13/02/2024",
    from: "Chicago",
    to: "Tripoli",
    status: {
      id: 4,
      text: "Pending",
    },
  },
];

const bookingHeader = [
  {
    id: 1,
    key: "no",
    title: "No",
    show: true,
  },
  {
    id: 2,
    key: "id",
    title: "Booking ID",
    show: true,
  },
  { id: 3, key: "travellersCount", title: "Travelers Count", show: true },
  { id: 4, key: "totalPrice", title: "Total Price", show: true },
  { id: 5, key: "status", title: "Status", show: true },
  {
    id: 6,
    key: "actions",
    title: "Actions",
    show: true,
  },
];

const allStatuses = [
  { id: 1, text: "all" },
  { id: 2, text: "confirmed" },
  { id: 3, text: "cancelled" },
  { id: 4, text: "pending" },
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

const Bookings = () => {
  const [response, setResponse] = useState<any>(null);
  const [data, setData] = useState<BookingType[]>([]);
  const [dataCount, setDataCount] = useState<number>(0);
  const [loading, setLoading] = useState(false);

  const [status, setStatus] = useState<{ id: number; text: string }>({
    id: 0,
    text: "",
  });
  const [statuses, setStatuses] = useState<{ id: number; text: string }[]>([]);

  const [search, setSearch] = useState<string>("");
  const [limit, setLimit] = useState(allLimits[0]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [showBookingHeader, setShowBookingHeader] = useState<any>([]);

  const fetchData = async () => {
    setLoading(true);
    const result = await getBookings(limit.value, currentPage, search);
    setResponse(result);
    setDataCount(result.totalCount);
    setData(result.bookings || []);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [limit, currentPage, search]);

  useEffect(() => {
    setStatuses(allStatuses);
  }, []);

  useEffect(() => {
    setShowBookingHeader(bookingHeader);
  }, [bookingHeader]);

  useEffect(() => {
    let duplicateStatus = { ...status };
    duplicateStatus = statuses[0];
    setStatus(duplicateStatus);
  }, [statuses]);

  return (
    <MainCard>
      <div className="xl:flex items-baseline justify-between">
        <PageTitle text={"Bookings"} />

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
            {/* <Button text="Export PDF" unfilled className="mb-2" /> */}
            <Button
              text="Add Booking"
              link
              to="/bookings/add"
              className="mb-2"
            />
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
              <p className="paragraph-6 theme-gray">Show / Hide Column:</p>
              <MultiDropdown
                options={bookingHeader}
                onSelect={(selectedOptions) => {
                  setShowBookingHeader(selectedOptions);
                }}
              />
            </div>
          </div>
        </div>
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : response?.isError ? (
        <p>Error: {response.message}</p>
      ) : data?.length === 0 ? (
        <p>No Bookings found</p>
      ) : (
        <BookingTable data={data} headers={showBookingHeader} />
      )}
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
    </MainCard>
  );
};

export default Bookings;
