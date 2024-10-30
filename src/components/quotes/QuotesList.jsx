import { Fragment } from 'react';

import QuoteItem from './QuoteItem';
import classes from './QuotesList.module.css';

const QuotesList = ({ quotes }) => {
  return (
    <Fragment>
      <ul className={classes.list}>
        {quotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuotesList;
