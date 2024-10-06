import React, { useEffect, useState } from "react";

import ProductTableProps from "../model/productTableProps";

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

const ProductTable = ({ data, headers }: ProductTableProps) => {
  const [visibleColumn, setVisibleColumn] = useState<any>([]);

  useEffect(() => {
    if (headers.length && data.length) {
      const duplicateHeaders = JSON.parse(JSON.stringify(headers));
      const showHeaders = duplicateHeaders.filter((header) => header.show);
      setVisibleColumn(showHeaders);
    }
  }, [headers]);

  console.log(visibleColumn);

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
                {column.show && column.key == "thumbnail" && (
                  <td>
                    <img
                      src={item?.thumbnail}
                      alt="Thumbnail"
                      className="thumbnail mx-auto"
                    />
                  </td>
                )}
                {column.show && column.key == "name" && (
                  <td>
                    <span className="paragraph-6 theme-dark-gray twoLines w-[220px] mx-auto">
                      {item?.name}
                    </span>
                  </td>
                )}
                {column.show && column.key == "category" && (
                  <td>
                    <span className="paragraph-6 theme-dark-gray">
                      {item?.category}
                    </span>
                  </td>
                )}
                {column.show && column.key == "color" && (
                  <td>
                    {item?.color ? (
                      <Dropdown
                        selected={item?.color}
                        options={item?.allColors || []}
                        type="color"
                      />
                    ) : (
                      <span className="paragraph-6 theme-dark-gray">-</span>
                    )}
                  </td>
                )}
                {column.show && column.key == "variation" && (
                  <td>
                    {item?.variation ? (
                      <Dropdown
                        selected={item?.variation}
                        options={item?.allVariation || []}
                      />
                    ) : (
                      <span className="paragraph-6 theme-dark-gray">-</span>
                    )}
                  </td>
                )}
                {column.show && column.key == "qty" && (
                  <td>
                    <span className="paragraph-6 theme-dark-gray">
                      {item.qty}
                    </span>
                  </td>
                )}
                {column.show && column.key == "price" && (
                  <td>
                    <span className="paragraph-6 theme-black">
                      ${item.price}
                    </span>
                  </td>
                )}
                {column.show && column.key == "status" && (
                  <td>
                    <StatusBadge
                      text={item?.status?.text}
                      status={item?.status?.id}
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
            {/* <td>
              <span className="paragraph-6 theme-dark-gray">
                <SerialNo index={index} />
              </span>
            </td>
            <td>
              <img src={item?.thumbnail} alt="Thumbnail" className="thumbnail" />
            </td>
            <td>
              <span className="paragraph-6 theme-dark-gray twoLines w-[220px]">
                {item?.name}
              </span>
            </td>
            <td>
              <span className="paragraph-6 theme-dark-gray">
                {item?.category}
              </span>
            </td>
            <td>
              {item?.variation ? (
                <Dropdown
                  selected={item?.variation}
                  options={item?.allVariation || []}
                />
              ) : (
                <span className="paragraph-6 theme-dark-gray">-</span>
              )}
            </td>
            <td>
              {item?.color ? (
                <Dropdown
                  selected={item?.color}
                  options={item?.allColors || []}
                  type="color"
                />
              ) : (
                <span className="paragraph-6 theme-dark-gray">-</span>
              )}
            </td>
            <td>
              <span className="paragraph-6 theme-dark-gray">{item.qty}</span>
            </td>
            <td>
              <span className="paragraph-6 theme-black">${item.price}</span>
            </td>
            <td>
              <StatusBadge text={item?.status?.text} status={item?.status?.id} />
            </td>
            <td>
              <TableAction>
                <Tooltip text="View" position="left">
                  <TableActionItem icon={eyeOpenDarkGrayIcon} action="View" />
                </Tooltip>
                <Tooltip text="Edit" position="left">
                  <TableActionItem icon={editPurpleIcon} action="Edit" />
                </Tooltip>
                <Tooltip text="Delete" position="left">
                  <TableActionItem icon={trashRedIcon} action="Delete" />
                </Tooltip>
              </TableAction>
            </td> */}
          </tr>
        );
      })}
    </Table>
  );
};

export default ProductTable;
