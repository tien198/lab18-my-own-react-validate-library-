import React from 'react';
import MainNavigation from "../components/layout/MainNavigation";
import { Outlet } from 'react-router-dom';

function QuoteRoot(props) {
    return (
        <>
            <MainNavigation />
            <Outlet />
        </>
    );
}

export default QuoteRoot;