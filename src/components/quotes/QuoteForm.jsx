import { useMemo, useRef, useState } from 'react';

import Card from '../UI/Card';
import LoadingSpinner from '../UI/LoadingSpinner';
import classes from './QuoteForm.module.css';

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


function hasInvalidMsg(inputTitle, input, funcArr) {
  let msg = ''
  for (const func of funcArr) {
    const result = func(inputTitle, input)
    if (!result[0]) {
      msg = result[1]
      break
    }
  }
  return msg
}

function isNotNull(inputTitle, inputVal) {
  if (inputVal !== '')
    return [true]
  else
    return [
      false,
      `${inputTitle} can't be null!`
    ]
}

function ErrorMsg({ msg }) {
  return <div style={{ color: 'red', height: '30px' }}>
    <b style={{ display: 'block', marginTop: '.75rem' }}>{msg}</b>
  </div>
}

function useValidate(inputTitle, inputVal, funcArr) {
  const invalidAuthorMsg = useMemo(
    () => hasInvalidMsg(inputTitle, inputVal, funcArr),
    [inputVal])

  return invalidAuthorMsg
}