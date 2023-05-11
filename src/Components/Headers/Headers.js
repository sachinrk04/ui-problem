import React from 'react';
import "./Headers.scss";
import { Link } from 'react-router-dom';

export default function Headers() {
    return (
        <div className='main-header'>
            <div className='main-header__brand'>
            <Link to="/" className="main-header__brand">UI-Problem</Link>
            </div>
        </div>
    )
}
