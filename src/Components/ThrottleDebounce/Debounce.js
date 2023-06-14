import React, { useEffect, useState } from 'react'
const API_URL = "https://api.github.com";

export default function Debounce() {
    const [searchTerm, setSearchTerm] = useState('');

    const debounce = (func, delay) => {
        let timeoutId;
        return function() {
            clearTimeout(timeoutId);

            timeoutId = setTimeout(() => {
                func.apply(this, arguments);
            }, delay)
        }
    }

    function handleSearch(event) {
        const query = event
        fetch(`${API_URL}/search/users?q=${query}`)
            .then(res => res.json())
            .then(data => console.log(data));
    }

    useEffect(() => {
        if (searchTerm.length > 0) {
            handleSearch(searchTerm)
        }
    }, [searchTerm])

    const debouncedSearch = debounce((event) => {
        setSearchTerm(event.target.value)
    }, 1000);

    return (
        <div>
            <div>Search Text: {searchTerm}</div>
            <input type="text" onChange={debouncedSearch} />
        </div>
    )
}
