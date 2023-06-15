import React from 'react';
import { Link } from 'react-router-dom';
import "./Sidebar.scss"

export default function Sidebar() {
    return (
        <div className='sidebar'>
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
                <li className={`side-page-nav_item`} >
                    <Link to="/text-search">Text Search</Link>
                </li>
                <li className={`side-page-nav_item`} >
                    <Link to="/carousel">Carousel</Link>
                </li>
                <li className={`side-page-nav_item`} >
                    <Link to="/table">Table</Link>
                </li>
                <li className={`side-page-nav_item`} >
                    <Link to="/stop-watch">Stopwatch</Link>
                </li>
                <li className={`side-page-nav_item`} >
                    <Link to="/todo">Todo</Link>
                </li>
                <li className={`side-page-nav_item`} >
                    <Link to="/folder-structure">Folder</Link>
                </li>
                <li className={`side-page-nav_item`} >
                    <Link to="/infinte-scroll">Infinte Scroll</Link>
                </li>
                <li className={`side-page-nav_item`} >
                    <Link to="/accordion">Accordion</Link>
                </li>
                <li className={`side-page-nav_item`} >
                    <Link to="/quote-generator">Quote Generator</Link>
                </li>
                <li className={`side-page-nav_item`} >
                    <Link to="/video-player">Video Player</Link>
                </li>
                <li className={`side-page-nav_item`} >
                    <Link to="/BMI-calculator">BMI Calculator</Link>
                </li>
                <li className={`side-page-nav_item`} >
                    <Link to="/loading-images">Loading Images</Link>
                </li>
                <li className={`side-page-nav_item`} >
                    <Link to="/github-user-search">GitHub User Search</Link>
                </li>
                <li className={`side-page-nav_item`} >
                    <Link to="/EMI-calculator">EMI Calculator</Link>
                </li>
                <li className={`side-page-nav_item`} >
                    <Link to="/login-form">LoginForm</Link>
                </li>
                <li className={`side-page-nav_item`} >
                    <Link to="/throttle-debounce">Throttle and Debounce</Link>
                </li>
                <li className={`side-page-nav_item`} >
                    <Link to="/shopping-cart">Shopping Cart</Link>
                </li>
            </ul>
        </div>
    );
};
