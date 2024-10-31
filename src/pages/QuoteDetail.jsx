import React from 'react';
import { json, useLoaderData, useParams } from 'react-router-dom';
import HighlightedQuote from '../components/quotes/HighlightedQuote';
import { BASE_URL } from '../ulties/http';

function QuoteDetail(props) {
    const resData = useLoaderData()

    const data = Object.values(resData)
    const { author, text } = data[0]

    return <HighlightedQuote author={author} text={text} />
}

export default QuoteDetail;


export async function loader({ params }) {
    const { quoteId } = params
    const response = await fetch(BASE_URL)
    if (!response.ok)
        throw json({ message: `Could not load quote has id: ${quoteId}` })
    return response
}