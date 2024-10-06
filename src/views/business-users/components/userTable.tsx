import React, { useEffect, useState } from "react";

import UserTableProps from "../model/userTableProps";

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

const UserTable = ({ headers, data }: UserTableProps) => {
  return (
    <Table header={headers}>
      {data && data.map((item, index) => {
        return (
          <tr key={index}>
            <td>
              <span className="paragraph-6 theme-dark-gray">
                <SerialNo index={index} />
              </span>
            </td>
            <td>
              <span className="paragraph-6 theme-dark-gray mx-auto">
                {item?.name}
              </span>
            </td>
            <td>
              <span className="paragraph-6 theme-dark-gray mx-auto">
                {item?.email}
              </span>
            </td>
            <td>
              <span className="paragraph-6 theme-dark-gray mx-auto">
                {item?.phone}
              </span>
            </td>
            <td>
              <StatusBadge
                text={item?.status}
                status={item?.status == "Approved" ? 1 : item?.status == "Pending" ? 4 : 2}
                className="min-w-[100px]"
              />
            </td>
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
          </tr>
        );
      })}
    </Table>
  );
};

export default UserTable;
