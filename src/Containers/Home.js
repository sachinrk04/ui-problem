import React from 'react';
import "./Home.scss";
import { Outlet } from 'react-router-dom';
import Sidebar from '../Components/Sidebar/Sidebar';
// import HomeContent from '../Components/HomeContent/HomeContent';

export default function Home() {
    return (
        <div className='home'>
            <div className='home-sidebar'>
                <Sidebar />
            </div>
            <div className='home-page'>
                {/* <HomeContent /> */}
                <Outlet />
            </div>
        </div>
    )
}
