import React from 'react';
import { json, useLoaderData } from "react-router-dom"
import { BASE_URL } from '../ulties/http';
import QuotesList from '../components/quotes/QuotesList';

function Quotes(props) {
    const quotesObj = useLoaderData()

    // const quotesEntries = Object.entries(quotesObj)
    const quotes = Object.keys(quotesObj).map(key =>
        ({ id: key, ...quotesObj[key] })
    )

    return (
        <>
            <QuotesList quotes={quotes} />
        </>
    );
}

export default Quotes;


export async function loader() {
    const response = await fetch(BASE_URL)
    if (!response.ok)
        throw json({ message: 'Could not get quotes!' }, { status: 500 })
    return response
}
