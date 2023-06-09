import React, { useEffect, useState } from 'react';
import "./Table.scss";
const URL = 'https://reqres.in/api/users';

export default function Table() {
    const [tableData, setTableData] = useState([]);

    useEffect(() => {
        fetch(URL)
        .then((resp) => resp.json())
        .then((data) => {
            const sortedData = data.data.sort((a, b) => {
                return a.first_name.localeCompare(b.first_name)
            })
            setTableData(sortedData);
        })
        .catch((error) => console.log(error))
    }, []);

    return (
        <div className='table-page'>
            {
                tableData.length > 0 ?
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableData.map((item) => (
                            <tr key={item.id}>
                                <td>{`${item.first_name} ${item.last_name}`}</td>
                                <td>{item.email}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                : <div>No list</div>
            }
        </div>
    )
};
