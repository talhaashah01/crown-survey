import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Dropdown from "react-bootstrap/Dropdown";

import Modal from "../../../ui/Modal";
import Input from "../../../ui/Input";
import Button from "../../../ui/Button";

const reports = [
  {
    id: 1,
    report_id: 5,
    text: "Home Survey Level 2",
},
{
    id: 2,
    report_id: 12,
    text: "Home Survey Level 2 - Valuation",
},
{
    id: 3,
    report_id: 14,
    text: "Home Survey Level 3",
  },
];

const NewReportModal = ({ modalShow, modalSetShow }) => {
  const navigate = useNavigate();

  const [selectedReport, setSelectedReport] = useState<any>(null);
  const [reportsList, setReportsList] = useState<any>(null);

  const handleContinue = () => {
    navigate(`${selectedReport?.report_id}`);
    modalSetShow(false);
  };

  useEffect(() => {
    setReportsList(reports);
  }, []);

  useEffect(() => {
    if (reportsList) {
      const rempReports = { ...reportsList };
      const tempSelectedReport = rempReports[0];
      setSelectedReport(tempSelectedReport);
    }
  }, [reportsList]);

  return (
    <Modal
      title="Select the Report Type"
      text="Enter the email address of the business to send an invitation for account setup."
      show={modalShow}
      setShow={modalSetShow}
    >
        {reportsList && selectedReport && (

      <div className="text-center mt-3">
        <Dropdown>
          <Dropdown.Toggle
            variant="light"
            id="dropdown-reports"
            className="w-100 border-1 border-[#eee]"
          >
            {selectedReport.text}
          </Dropdown.Toggle>

          <Dropdown.Menu className="w-100">
            {reportsList.map((item, index) => (
              <Dropdown.Item
                disabled={item == selectedReport}
                key={index}
                onClick={() => {
                  setSelectedReport(item);
                }}
                className="whitespace-normal my-1"
              >
                {item.text}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
        <Button text="Continue" type="button" className="w-100 mt-3" onClick={() => {handleContinue()}} />
      </div>
        )}
    </Modal>
  );
};

export default NewReportModal;
