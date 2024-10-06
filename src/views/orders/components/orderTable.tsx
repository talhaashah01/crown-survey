import React, { useEffect, useState } from "react";

import OrderTableProps from "../model/orderTableProps";

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

const OrderTable = ({ data, headers }: OrderTableProps) => {
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
                      {item?.no}
                    </span>
                  </td>
                )}
                {column.show && column.key == "time" && (
                  <td>
                    <span className="paragraph-6 theme-dark-gray twoLines w-[220px] mx-auto">
                      {item?.time}
                    </span>
                  </td>
                )}
                {column.show && column.key == "id" && (
                  <td>
                    <span className="paragraph-6 theme-dark-gray whitespace-nowrap">
                      {item?.orderId}
                    </span>
                  </td>
                )}
                {column.show && column.key == "method" && (
                  <td>
                    <span className="paragraph-6 theme-dark-gray">
                      {item?.method}
                    </span>
                  </td>
                )}
                {column.show && column.key == "amount" && (
                  <td>
                    <span className="paragraph-6 theme-black">
                      ${item?.total}
                    </span>
                  </td>
                )}
                {column.show && column.key == "status" && (
                  <td>
                    <StatusBadge
                      text={item?.status?.text}
                      status={item?.status?.id}
                      className="min-w-[120px]"
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

export default OrderTable;
