import React from 'react';
import { json, useLoaderData } from "react-router-dom"
import { BASE_URL } from '../ulties/http';
import QuotesList from '../components/quotes/QuotesList';

function Quotes(props) {
    const quotesObj = useLoaderData()

    const quotesArr = Object.values(quotesObj)

    return (
        <>
            <QuotesList quotes={quotesArr} />
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
