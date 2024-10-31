import React from 'react';
import MainNavigation from "../components/layout/MainNavigation";
import { Outlet } from 'react-router-dom';

function Root(props) {
    return (
        <>
            <MainNavigation />
            <div className="center">
                <Outlet />
            </div>
        </>
    );
}

export default Root;