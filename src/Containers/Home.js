import React from 'react';
import "./Home.scss";
import { Outlet } from 'react-router-dom';
import Sidebar from '../Components/Sidebar/Sidebar';

export default function Home() {
    return (
        <div className='home'>
            <div className='home-sidebar'>
                <Sidebar />
            </div>
            <div className='home-page'>
                <Outlet />
            </div>
        </div>
    )
}
