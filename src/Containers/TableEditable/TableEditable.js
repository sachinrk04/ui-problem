import { useState } from "react";
import { data as defaultData } from "./data";
import { flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { columns } from "../../Components/TableEditableComponent/columns";
import { FooterCell } from "../../Components/TableEditableComponent/FooterCell";

import "./TableEditable.scss";

export default function TableEditable() {
    const [data, setData] = useState(() => [...defaultData]);
    const [originalData, setOriginalData] = useState(() => [...defaultData]);
    const [editedRows, setEditedRows] = useState({});

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        enableRowSelection: true,
        meta: {
        editedRows,
        setEditedRows,
        revertData: (rowIndex, revert) => {
            if (revert) {
            setData((old) =>
                old.map((row, index) =>
                index === rowIndex ? originalData[rowIndex] : row
                )
            );
            } else {
            setOriginalData((old) =>
                old.map((row, index) => (index === rowIndex ? data[rowIndex] : row))
            );
            }
        },
        updateData: (rowIndex, columnId, value) => {
            setData((old) =>
            old.map((row, index) => {
                if (index === rowIndex) {
                return {
                    ...old[rowIndex],
                    [columnId]: value,
                };
                }
                return row;
            })
            );
        },
        addRow: () => {
            const newRow = {
            studentId: Math.floor(Math.random() * 10000),
            name: "",
            dateOfBirth: "",
            major: "",
            };
            const setFunc = (old) => [...old, newRow];
            setData(setFunc);
            setOriginalData(setFunc);
        },
        removeRow: (rowIndex) => {
            const setFilterFunc = (old) =>
            old.filter((_row, index) => index !== rowIndex);
            setData(setFilterFunc);
            setOriginalData(setFilterFunc);
        },
        removeSelectedRows: (selectedRows) => {
            const setFilterFunc = (old) =>
            old.filter((_row, index) => !selectedRows.includes(index));
            setData(setFilterFunc);
            setOriginalData(setFilterFunc);
        },
        },
    });

    return (
        <div className="table-container">
            <div className="table-view">
                <table>
                    <thead>
                    {table.getHeaderGroups().map((headerGroup) => (
                        <tr key={headerGroup.id}>
                        {headerGroup.headers.map((header) => (
                            <th key={header.id}>
                            {header.isPlaceholder
                                ? null
                                : flexRender(
                                    header.column.columnDef.header,
                                    header.getContext()
                                )}
                            </th>
                        ))}
                        </tr>
                    ))}
                    </thead>
                    <tbody>
                    {table.getRowModel().rows.map((row) => (
                        <tr key={row.id}>
                        {row.getVisibleCells().map((cell) => (
                            <td key={cell.id}>
                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                            </td>
                        ))}
                        </tr>
                    ))}
                    </tbody>
                    <tfoot>
                        <tr>
                            <th colSpan={table.getCenterLeafColumns().length} align="right">
                                <FooterCell table={table} />
                            </th>
                        </tr>
                    </tfoot>
                </table>
            </div>
            <div className="editable-json">
                <pre>{JSON.stringify(data, null, "\t")}</pre>
            </div>
        </div>
    );
}
