import React, { useState } from 'react';
import "./GitHubUserSearch.scss";
import Form from '../../Components/GitHubUserSearch/Form';
import User from '../../Components/GitHubUserSearch/User';

const API_URL = "https://api.github.com";

async function fetchResults(query) {
    try {
        const response = await fetch(`${API_URL}/search/users?q=${query}`);
        const json = await response.json();
        return json.items || [];
    } catch (e) {
        throw new Error(e);
    }
}

export default function GitHubUserSearch() {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);

    function onSearchChange(event) {
        setQuery(event.target.value);
    }

    async function onSearchSubmit(event) {
        event.preventDefault();
        const results = await fetchResults(query);
        setResults(results);
    }

    return (
        <div className="github-user-search">
            <main className="main">
                <h2>GitHub User Search</h2>
                <Form
                    onChange={onSearchChange}
                    onSubmit={onSearchSubmit}
                    value={query}
                />
                <h3>Results</h3>
                <div id="results">
                    <div>
                        {results.map((user) => (
                        <User
                            key={user.login}
                            avatar={user.avatar_url}
                            url={user.html_url}
                            username={user.login}
                        />
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
}
