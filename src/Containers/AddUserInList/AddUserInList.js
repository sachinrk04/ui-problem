import React, { useState, useEffect } from 'react';
import "./AddUserInList.scss";
const API_URL = "https://randomuser.me/api/";

export default function AddUserInList() {
    const [userData, setUserData] = useState([]);

    const fetchData = () => {
        fetch(API_URL)
            .then((res) => res.json())
            .then((data) => {
                let users = [...userData, ...data.results];
                if (users.length > 1) {
                    sortName(users);
                } else {
                    setUserData(users);
                }
            });
    };

    const sortName = (users) => {
        const sortData = users.sort((a, b) => {
            return a.name.first.localeCompare(b.name.first);
        });
        setUserData(sortData);
    };

    useEffect(() => {
        fetchData();
    }, []);

  const fullName = (name) => {
    return `${name.title} ${name.first} ${name.last}`;
  };
    
    return (
        <div className='add-User-list-page'>
            <h3>Users</h3>
            <div className='table-div'>
                <table className='table-style'>
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Gender</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>DOB</th>
                            <th>Age</th>
                        </tr>
                    </thead>
                    <tbody className='table-body-users'>
                    {userData.length > 0
                        ? userData.map((user, i) => {
                            return (
                                <tr key={i}>
                                    <td>
                                        <img className='user-icon-style' src={user.picture.thumbnail} alt={fullName(user.name)} />
                                    </td>
                                    <td>{fullName(user.name)}</td>
                                    <td>{user.gender}</td>
                                    <td>{user.email}</td>
                                    <td>{user.phone}</td>
                                    <td>{user.dob.date}</td>
                                    <td>{user.dob.age}</td>
                                </tr>
                            );
                        })
                            : null}
                    </tbody>
                </table>
            </div>
            <div className='add-user-action'>
                <button onClick={fetchData}>Get User</button>
            </div>
        </div>
    )
}
