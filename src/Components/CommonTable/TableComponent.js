import React from "react";
import { getKeysNameObject } from "../../Containers/CommonTable/tableKeys";

const TableComponent = ({ data = [], columns = [] }) => {
  const tableValueArray = (arrayValve) => {
    let nestedKeys =
      typeof arrayValve[0] === "object"
        ? getKeysNameObject(arrayValve[0])
        : undefined;
    let result = "";
    for (let i = 0; i < arrayValve.length; i++) {
      if (result.length > 0) {
        result +=
          nestedKeys === undefined
            ? `, ${arrayValve[i]}`
            : `, ${arrayValve[i][nestedKeys]}`;
      } else {
        result +=
          nestedKeys === undefined ? arrayValve[i] : arrayValve[i][nestedKeys];
      }
    }
    return result;
  };

  const tableValueObject = (data) => {
    let nickname = getKeysNameObject(data);
    return `${data[nickname]}`;
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            {columns.length > 0
              ? columns.map((keyName) => {
                  return <th key={keyName}>{keyName}</th>;
                })
              : null}
          </tr>
        </thead>
        <tbody>
          {data.length > 0
            ? data.map((item, index) => {
                return (
                  <tr key={index}>
                    {columns.map((key, i) => {
                      if (Array.isArray(item[key])) {
                        return <td key={i}>{tableValueArray(item[key])}</td>;
                      } else if (typeof item[key] === "object") {
                        return <td key={i}>{tableValueObject(item[key])}</td>;
                      } else {
                        return <td key={i}>{item[key]}</td>;
                      }
                    })}
                  </tr>
                );
              })
            : null}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
