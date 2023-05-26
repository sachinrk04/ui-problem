import React from 'react';
import { Link } from 'react-router-dom';
import "./Sidebar.scss"

export default function Sidebar() {
    return (
        <div >
            <ul className="side-page-nav_items">
                <li className={`side-page-nav_item`} >
                    <Link to="/pagination">Pagination</Link>
                </li>
                <li className={`side-page-nav_item`} >
                    <Link to="/countdown-timer">Countdown Timer</Link>
                </li>
                <li className={`side-page-nav_item`} >
                    <Link to="/lazy-loading">Lazy Loading</Link>
                </li>
                <li className={`side-page-nav_item`} >
                    <Link to="/star-rating">Star Rating</Link>
                </li>
            </ul>
        </div>
    );
};
