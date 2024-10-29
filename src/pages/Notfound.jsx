import React from 'react';
import NoQuotesFound from '../components/quotes/NoQuotesFound';
import MainNavigation from '../components/layout/MainNavigation';

function Notfound(props) {
    return (
        <>
            <MainNavigation />
            <NoQuotesFound />
        </>
    );
}

export default Notfound;