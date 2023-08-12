import React from 'react';
import "pikaday/css/pikaday.css";
import "./EditableExcelTable.scss";
import { HotTable, HotColumn } from "@handsontable/react";
import { data } from "./tableData";
import { drawCheckboxInRowHeaders, addClassesToRows, changeCheckboxCell, alignHeaders } from "./hooksCallbacks";
import "handsontable/dist/handsontable.min.css";
import ProgressBar from '../../Components/EditableExcelTableComponent/ProgressBar';
import Stars from '../../Components/EditableExcelTableComponent/Stars';

export default function EditableExcelTable() {
    return (
        <div className='editable-table'>
            <HotTable
                data={data}
                width={"100%"}
                height={"95vh"}
                colWidths={[140, 126, 192, 100, 100, 90, 90, 110, 97]}
                colHeaders={[
                    "Company name",
                    "Country",
                    "Name",
                    "Sell date",
                    "Order ID",
                    "In stock",
                    "Qty",
                    "Progress",
                    "Rating"
                ]}
                dropdownMenu={true}
                hiddenColumns={{
                    indicators: true
                }}
                contextMenu={true}
                multiColumnSorting={true}
                filters={true}
                rowHeaders={true}
                afterGetColHeader={alignHeaders}
                beforeRenderer={addClassesToRows}
                afterGetRowHeader={drawCheckboxInRowHeaders}
                afterOnCellMouseDown={changeCheckboxCell}
                manualRowMove={true}
                licenseKey="non-commercial-and-evaluation"
            >
                <HotColumn data={1} />
                <HotColumn data={2} />
                <HotColumn data={3} />
                <HotColumn data={4} type="date" allowInvalid={false} />
                <HotColumn data={5} />
                <HotColumn data={6} type="checkbox" className="htCenter" />
                <HotColumn data={7} type="numeric" />
                <HotColumn data={8} readOnly={true} className="htMiddle">
                    <ProgressBar hot-renderer />
                </HotColumn>
                <HotColumn data={9} readOnly={true} className="htCenter">
                    <Stars hot-renderer />
                </HotColumn>
            </HotTable>
        </div>
    )
}
