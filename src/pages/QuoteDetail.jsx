import React from 'react';
import { useParams } from 'react-router-dom';

function QuoteDetail(props) {
    const { quoteId } = useParams()
    return (
        <>
            <h1>Quote Detail page</h1>
            <p>quote-id: {quoteId}</p>
        </>
    );
}

export default QuoteDetail;