import { useMemo, useRef, useState } from 'react';

import Card from '../UI/Card';
import LoadingSpinner from '../UI/LoadingSpinner';
import classes from './QuoteForm.module.css';
import { isNotNull, useValidate, ErrorMsg } from '../../ulties/validate';
import { BASE_URL } from '../../ulties/http';

const QuoteForm = (props) => {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [authorInput, setAuthorInput] = useState('');
  const [textInput, setTextInput] = useState('');

  const invalidAuthorMsg = useValidate('Author', authorInput, [isNotNull])
  const invalidTextMsg = useValidate('Text', textInput, [isNotNull])


  function submitFormHandler(event) {
    event.preventDefault();
    setIsSubmitted(true)
    // optional: Could validate here

    if (invalidAuthorMsg === '' && invalidTextMsg === '')
      props.onAddQuote({ author: authorInput, text: textInput });
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitFormHandler}>
        {props.isLoading && (
          <div className={classes.loading}>
            <LoadingSpinner />
          </div>
        )}

        <div className={classes.control}>
          <label htmlFor='author'>Author</label>
          <input type='text' id='author' value={authorInput} onChange={e => setAuthorInput(e.target.value)} />
          <ErrorMsg msg={isSubmitted && invalidAuthorMsg && invalidAuthorMsg} />
        </div>
        <div className={classes.control}>
          <label htmlFor='text'>Text</label>
          <textarea id='text' rows='5' value={textInput} onChange={e => setTextInput(e.target.value)}></textarea>
          <ErrorMsg msg={isSubmitted && invalidTextMsg && invalidTextMsg} />
        </div>
        <div className={classes.actions}>
          <button className='btn'>Add Quote</button>
        </div>
      </form>
    </Card>
  );
};

export default QuoteForm;

async function action() {
  const response = await fetch(BASE_URL, {

  })

}