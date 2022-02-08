import React from "react";
// import "./_table.scss";
import { useTable } from "react-table";

/*
--tips!!! gunakan useMemo--
data: record dari data dalam kolom
columns: berisi header dan key 
*/

const Table = ({ data, columns }) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <table {...getTableProps()}>
      <thead className="thead">
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th className="th" {...column.getHeaderProps()}>
                {column.render("Header")}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody className="tbody" {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr className="tr" {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return (
                  <td className="td" {...cell.getCellProps()}>
                    {cell.render("Cell")}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

Table.defaultProps = {
  data: [
    {
      col0: "baris 1",
      col1: "(1,1)",
      col2: "(1,2)",
      col3: "(1,3)",
      col4: "(1,4)",
      col5: "(1,5)",
    },
    {
      col0: "baris 2",
      col1: "(2,1)",
      col2: "(2,2)",
      col3: "(2,3)",
      col4: "(2,4)",
      col5: "(2,5)",
    },
    {
      col0: "baris 3",
      col1: "(3,1)",
      col2: "(3,2)",
      col3: "(3,3)",
      col4: "(3,4)",
      col5: "(3,5)",
    },
  ],
  columns: [
    {
      Header: "#",
      accessor: "col0", // accessor is the "key" in the data
    },
    {
      Header: "kolom 1",
      accessor: "col1",
    },
    {
      Header: "kolom 2",
      accessor: "col2",
    },
    {
      Header: "kolom 3",
      accessor: "col3",
    },
    {
      Header: "kolom 4",
      accessor: "col4",
    },
    {
      Header: "kolom 5",
      accessor: "col5",
    },
  ],
};

export default Table;
