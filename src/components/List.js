import React, { useState } from "react";
import { useLocalStorage } from "../useLocalStorage";
import {
  UserAvatarFilledAlt16 as UserAvatar,
  FlashFilled16 as FlashFilled,
} from "@carbon/icons-react";
import {
  DataTable,
  TableContainer,
  TableToolbar,
  TableSelectAll,
  TableSelectRow,
  TableBatchActions,
  TableBatchAction,
  TableToolbarContent,
  TableToolbarSearch,
  Table,
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  TableCell,
} from "carbon-components-react";
import ItemActionsMenu from "./item/ItemActionsMenu";
import ItemDueDate from "./item/ItemDueDate";
import ItemAssignment from "./item/ItemAssignment";
import ItemStatus from "./item/ItemStatus";

import { listHeaderData } from "../data";

import "../List.scss";

function List() {
  const [data, setData] = useLocalStorage("data", "");

  return (
    <div className="list">
      <DataTable
        rows={data}
        headers={listHeaderData}
        isSortable
        overflowMenuOnHover={false}
      >
        {({
          rows,
          headers,
          getHeaderProps,
          getRowProps,
          getSelectionProps,
          getToolbarProps,
          getBatchActionProps,
          getTableProps,
          onInputChange,
        }) => {
          const batchActionProps = getBatchActionProps();
          return (
            <TableContainer>
              <TableToolbar {...getToolbarProps()}>
                <TableBatchActions {...batchActionProps}>
                  <TableBatchAction renderIcon={UserAvatar}>
                    Zuweisen
                  </TableBatchAction>
                  <TableBatchAction renderIcon={FlashFilled}>
                    Priorisieren
                  </TableBatchAction>
                </TableBatchActions>
                <TableToolbarContent
                  aria-hidden={getBatchActionProps.shouldShowBatchActions}
                >
                  <TableToolbarSearch persistent onChange={onInputChange} />
                </TableToolbarContent>
              </TableToolbar>
              <Table {...getTableProps()}>
                <TableHead>
                  <TableRow>
                    <TableSelectAll {...getSelectionProps()} />
                    {headers.map((header) => (
                      <TableHeader {...getHeaderProps({ header })}>
                        {header.header}
                      </TableHeader>
                    ))}
                    <TableHeader style={{ width: "var(--cds-spacing-09)" }} />
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow key={row.id}>
                      <TableSelectRow {...getSelectionProps({ row })} />
                      {row.cells.map((cell) => (
                        <TableCell key={cell.id}>
                          {cell.id.includes("due") && (
                            <ItemDueDate date={cell.value} />
                          )}
                          {cell.id.includes("user") && (
                            <ItemAssignment user={cell.value} />
                          )}
                          {cell.id.includes("status") && (
                            <ItemStatus status={cell.value} />
                          )}
                          {!cell.id.includes("due") &&
                            !cell.id.includes("user") &&
                            !cell.id.includes("status") &&
                            cell.value}
                        </TableCell>
                      ))}
                      <TableCell className="bx--table-column-menu">
                        <ItemActionsMenu />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          );
        }}
      </DataTable>
    </div>
  );
}

export default List;
