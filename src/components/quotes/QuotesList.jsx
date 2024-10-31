import { Fragment, useEffect, useState } from 'react';

import QuoteItem from './QuoteItem';
import classes from './QuotesList.module.css';
import { Form, Link, useParams } from 'react-router-dom';

const desc = 'desc'
const asc = 'asc'

const QuotesList = ({ quotes }) => {
  // const { sort = asc } = useParams()
  const [sortType, setSortType] = useState(desc)
  const [quoteState, setQuoteState] = useState(quotes)

  useEffect(() => {
    if (sortType !== asc) {
      setQuoteState(quotes.sort((a, b) => {
        const first = a.author[0].toLowerCase()
        const last = b.author[0].toLowerCase()
        return first.localeCompare(last)
      }))
    }

    else {
      setQuoteState(quotes.sort((a, b) => {
        const first = b.author[0].toLowerCase()
        const last = a.author[0].toLowerCase()
        return first.localeCompare(last)
      }))
    }

  }, [sortType])

  function onSearchSubmit(e) {
    setSortType(sortType === asc ? desc : asc)
  }
  return (
    <>
      <Form role='search' onSubmit={onSearchSubmit}>
        <input type='search' name='sort'
          value={sortType === asc ? asc : desc}
          onChange={() => { }}
          hidden />
        <button className='btn--flat'>
          {sortType === asc ? 'Ascending' : 'Descending'}
        </button>
      </Form>
      <hr />
      <ul className={classes.list}>
        {quoteState.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </>
  );
};

export default QuotesList;
