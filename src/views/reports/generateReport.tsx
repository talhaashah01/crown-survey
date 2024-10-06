import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ReportLayout from "../../layouts/report";

import MainCard from "../../ui/MainCard";

import { reportts } from "./data/reporrtss";

const GenerateReport = () => {
  const { id } = useParams();
  const [response, setResponse] = useState<any>(null);
  const [data, setData] = useState<any>(null);
  const [mainData, setMainData] = useState<any>([]);

  const fetchData = async () => {
    const response = reportts;
    setData(response);
  };

  useEffect(() => {
    if (id) {
      fetchData();
    }
  }, [id]);

  useEffect(() => {
    if (data) {
      const tempData = [...data];
      const refinedTempData = tempData.map((data) => {
        return {
          code: data?.code || "",
          name: data?.name || "",
          subSections:
            data?.subSections.map((subData) => {
              return {
                code: subData?.code || "",
                name: subData?.name || "",
              };
            }) || [],
        };
      });
      setMainData(refinedTempData);
    }
  }, [data]);

  return (
    <MainCard className="min-h-[85vh]">
      <ReportLayout mainData={mainData} />
    </MainCard>
  );
};

export default GenerateReport;
