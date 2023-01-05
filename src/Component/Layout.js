import React from 'react';
import Sidebar from "./Sidebar";
import { Outlet } from 'react-router-dom';

function Layout(props) {
    return (
        <div style={{ display: "flex" }}>
            <Sidebar />
            <Outlet />
            {/* <Routes /> */}
        </div>
    );
}

export default Layout;
