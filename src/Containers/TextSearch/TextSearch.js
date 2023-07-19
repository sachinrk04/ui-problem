import React, { useState } from 'react';
import "./TextSearch.scss";

export default function TextSearch() {
    const [list, setList] = useState(['apple', 'kiwi', 'pears', "123", "356344", 575]);
    const [searchText, setSearchText] = useState("");
    
    const searchResult = list.filter((item) => {
        return item.toString().toLowerCase().includes(searchText.toLowerCase());
    })

    return (
        <div className="text-search-box">
            <input
                placeholder="type to search"
                onChange={(e) => setSearchText(e.target.value)}
            />
            <ul>
                {searchResult.map((item) => {
                    return <li key={item}>{item}</li>
                })}
            </ul>
        </div>
    )
}
