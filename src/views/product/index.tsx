import React, { useEffect, useState } from "react";

import ProductType from "./model/productType";

import ProductTable from "./components/productTable";

import MainCard from "./../../ui/MainCard";
import PageTitle from "./../../ui/PageTitle";
import Input from "../../ui/Input";
import Button from "../../ui/Button";
import Dropdown from "../../ui/Dropdown";
import Pagination from "../../ui/Pagination";

import { searchIcon } from "../../assets/icons";
import { product1, product2 } from "../../assets/images/products";
import MultiDropdown from "../../ui/MultiDropdown";

const products = [
  {
    id: 1,
    thumbnail: product1,
    name: "Nike Men's T-Shirt l New Arrival i Limited time offer",
    category: "Men Clothing",
    variation: "Medium",
    allVariation: ["Small", "Medium", "Large"],
    color: { name: "Orange", code: "#E88A34" },
    allColors: [
      { name: "Orange", code: "#E88A34" },
      { name: "Red", code: "#ff0000" },
      { name: "primary", code: "#ffff00" },
    ],
    qty: 10520,
    price: 89.99,
    status: {
      id: 1,
      text: "Available",
    },
  },
  {
    id: 2,
    thumbnail: product2,
    name: "Rayben l  Men's Eyewear l New Arrival i Limited time offer",
    category: "Eye Wear",
    variation: null,
    allVariation: null,
    color: { name: "Black", code: "#000000" },
    allColors: [
      { name: "Black", code: "#000000" },
      { name: "Orange", code: "#E88A34" },
      { name: "Red", code: "#ff0000" },
      { name: "primary", code: "#ffff00" },
    ],
    qty: 1000,
    price: 41.99,
    status: {
      id: 3,
      text: "On Hold",
    },
  },
];

const productHeader = [
  {
    id: 1,
    key: "no",
    title: "No",
    show: true,
  },
  {
    id: 2,
    key: "thumbnail",
    title: "Image",
    show: true,
  },
  {
    id: 3,
    key: "name",
    title: "Name",
    show: true,
  },
  {
    id: 4,
    key: "category",
    title: "Category",
    show: true,
  },
  {
    id: 5,
    key: "variation",
    title: "Variation",
    show: true,
  },
  {
    id: 6,
    key: "color",
    title: "Color",
    show: true,
  },
  {
    id: 7,
    key: "qty",
    title: "Qty",
    show: true,
  },
  {
    id: 8,
    key: "price",
    title: "Price",
    show: true,
  },
  {
    id: 9,
    key: "status",
    title: "Status",
    show: true,
  },
  {
    id: 10,
    key: "actions",
    title: "Actions",
    show: true,
  },
];

const allCategories = [
  { id: 1, text: "All" },
  { id: 2, text: "Clothing" },
  { id: 3, text: "Men" },
  { id: 4, text: "Ketchup" },
  { id: 5, text: "Eye Wear" },
  { id: 6, text: "Women Footwear" },
];

const allStatuses = [
  { id: 1, text: "success" },
  { id: 2, text: "error" },
  { id: 3, text: "attention" },
  { id: 4, text: "caution" },
  { id: 5, text: "available" },
  { id: 6, text: "unavailable" },
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
  { id: 1, text: "Default" },
  { id: 2, text: "Low to High" },
  { id: 3, text: "High to Low" },
];

const Product = () => {
  const [data, setData] = useState<ProductType[]>([]);

  const [category, setCategory] = useState<{
    id: number;
    text: string;
  }>({
    id: 0,
    text: "",
  });

  const [categories, setCategories] = useState<{ id: number; text: string }[]>(
    []
  );

  const [status, setStatus] = useState<{ id: number; text: string }>({
    id: 0,
    text: "",
  });
  const [statuses, setStatuses] = useState<{ id: number; text: string }[]>([]);

  const [priceSort, setPriceSort] = useState<{ id: number; text: string }>({
    id: 0,
    text: "",
  });
  const [pricesSort, setPricesSort] = useState<{ id: number; text: string }[]>(
    []
  );

  const [search, setSearch] = useState<string>("");
  const [limit, setLimit] = useState(allLimits[0]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [showProductHeader, setShowProductHeader] = useState<any>([]);
  useEffect(() => {
    setData(products);
    setCategories(allCategories);
    setStatuses(allStatuses);
    setPricesSort(allPriceSort);
  }, []);

  useEffect(() => {
    setShowProductHeader(productHeader);
  }, [productHeader]);

  useEffect(() => {
    let duplicateCategory = { ...category };
    duplicateCategory = categories[0];
    setCategory(duplicateCategory);
  }, [categories]);

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
        <PageTitle text={"Product List"} />

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
            <Button text="Export PDF" unfilled className="mb-2" />
            <Button text="Add Product" link to="/" className="mb-2" />
          </div>
        </div>
      </div>
      <div className="xl:flex items-center justify-between">
        <p className="paragraph-6 theme-dark-gray mb-2">Filter By:</p>
        <div className="filters md:flex block gap-4">
          <div className="flex gap-4 items-end">
            <div className="mb-2 w-full">
              <p className="paragraph-6 theme-gray">Categories:</p>
              <Dropdown
                options={categories}
                selected={category}
                onSelect={(option) => {
                  setCategory(option);
                }}
              />
            </div>
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
                options={productHeader}
                onSelect={(selectedOptions) => {
                  setShowProductHeader(selectedOptions);
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <ProductTable data={data} headers={showProductHeader} />
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

export default Product;
