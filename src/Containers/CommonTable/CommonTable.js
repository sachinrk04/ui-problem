import React, { useEffect, useState } from "react";
import "./CommonTable.scss";
import TableComponent from "../../Components/CommonTable/TableComponent";
import { firstTableData, secondTableData } from "./tableData";
import { getKeysNameObject } from "./tableKeys";

export default function CommonTable() {
  const [firstKeys, setFirstKeys] = useState([]);
  const [secondKeys, setSecondKeys] = useState([]);

  const getFirstKeys = (data) => {
    setFirstKeys(getKeysNameObject(data));
  };

  const getSecondKeys = (data) => {
    setSecondKeys(getKeysNameObject(data));
  };

  useEffect(() => {
    getFirstKeys(firstTableData[0]);
    getSecondKeys(secondTableData[0]);
  }, []);
  return (
    <div className="common-table-container">
      <TableComponent columns={firstKeys} data={firstTableData} />
      <TableComponent columns={secondKeys} data={secondTableData} />
    </div>
  );
}
