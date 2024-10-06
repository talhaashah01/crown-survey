import React, { useEffect, useState } from "react";

import BookingTableProps from "../model/bookingTableProps";

import Table from "../../../ui/Table";
import Dropdown from "../../../ui/Dropdown";
import StatusBadge from "../../../ui/StatusBadge";
import TableAction from "../../../ui/Table/components/tableAction";
import TableActionItem from "../../../ui/Table/components/tableActionItem";
import SerialNo from "../../../ui/Table/components/serialNo";
import Tooltip from "../../../ui/Tooltip";

import {
  editPurpleIcon,
  eyeOpenDarkGrayIcon,
  trashRedIcon, 
} from "../../../assets/icons";

const BookingTable = ({ data, headers }: BookingTableProps) => {
  const [visibleColumn, setVisibleColumn] = useState<any>([]);

  useEffect(() => {
    if (headers.length && data.length) {
      const duplicateHeaders = JSON.parse(JSON.stringify(headers));
      const showHeaders = duplicateHeaders.filter((header) => header.show);
      setVisibleColumn(showHeaders);
    }
  }, [headers]);

  return (
    <Table header={visibleColumn}>
      {data.map((item, index) => {
        return (
          <tr key={index}>
            {visibleColumn.map((column, columnIndex) => (
              <>
                {column.show && column.key == "no" && (
                  <td>
                    <span className="paragraph-6 theme-dark-gray">
                      <SerialNo index={index} />
                    </span>
                  </td>
                )}
                {column.show && column.key == "id" && (
                  <td>
                  <span className="paragraph-6 theme-dark-gray twoLines w-[220px] mx-auto">
                    {item?.bookingId}
                  </span>
                </td>
                )}
                {column.show && column.key == "travellersCount" && (
                  <td>
                    <span className="paragraph-6 theme-dark-gray twoLines w-[220px] mx-auto">
                      {item?.travellersCount}
                    </span>
                  </td>
                )}
                {column.show && column.key == "totalPrice" && (
                  <td>
                    <span className="paragraph-6 theme-dark-gray">
                      ${item?.totalPrice}
                    </span>
                  </td>
                )}
                {column.show && column.key == "status" && (
                  <td>
                    <StatusBadge
                      text={item?.status}
                      status={item?.status == "confirmed" ? 1 : 4 }
                      className="min-w-[100px]"
                    />
                  </td>
                )}
                {column.show && column.key == "actions" && (
                  <td>
                    <TableAction>
                      <Tooltip text="View" position="left">
                        <TableActionItem
                          icon={eyeOpenDarkGrayIcon}
                          action="View"
                        />
                      </Tooltip>
                      <Tooltip text="Edit" position="left">
                        <TableActionItem icon={editPurpleIcon} action="Edit" />
                      </Tooltip>
                      <Tooltip text="Delete" position="left">
                        <TableActionItem icon={trashRedIcon} action="Delete" />
                      </Tooltip>
                    </TableAction>
                  </td>
                )}
              </>
            ))}
          </tr>
        );
      })}
    </Table>
  );
};

export default BookingTable;
