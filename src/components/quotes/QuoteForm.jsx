import { useState } from 'react';

import Card from '../UI/Card';
import LoadingSpinner from '../UI/LoadingSpinner';
import classes from './QuoteForm.module.css';
import { isNotNull, useValidate, ErrorMsg } from '../../ulties/validate';
import { BASE_URL } from '../../ulties/http';
import { json, redirect, useNavigation } from 'react-router-dom';

const QuoteForm = (props) => {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [authorInput, setAuthorInput] = useState('');
  const [textInput, setTextInput] = useState('');

  const invalidAuthorMsg = useValidate('Author', authorInput, [isNotNull])
  const invalidTextMsg = useValidate('Text', textInput, [isNotNull])

  const isSubmitting = useNavigation().state === 'submitting'

  function submitFormHandler(event) {
    event.preventDefault();
    setIsSubmitted(true)

    // optional: Could validate here
    if (invalidAuthorMsg === '' && invalidTextMsg === '') {
      const formData = new FormData(event.target)
      const data = Object.fromEntries(formData.entries())

      try {
        action(data, 'post')
      }
      catch (err) {
        console.error(err)
      }

      // props.onAddQuote({ author: authorInput, text: textInput });
    }
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
          <input type='text' id='author' name='author' value={authorInput} onChange={e => setAuthorInput(e.target.value)} />
          <ErrorMsg msg={isSubmitted && invalidAuthorMsg && invalidAuthorMsg} />
        </div>
        <div className={classes.control}>
          <label htmlFor='text'>Text</label>
          <textarea id='text' name='text' rows='5' value={textInput} onChange={e => setTextInput(e.target.value)}></textarea>
          <ErrorMsg msg={isSubmitted && invalidTextMsg && invalidTextMsg} />
        </div>
        <div className={classes.actions}>
          <button disabled={isSubmitting} className='btn'>Add Quote</button>
        </div>
      </form>
    </Card>
  );
};

export default QuoteForm;




export async function action(dataObj, httpMethod) {
  const response = await fetch(BASE_URL, {
    method: httpMethod,
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(dataObj),
  })

  if (!response.ok) {
    throw json({ message: 'could not post quote!' }, { status: 500 })
  }
  console.log('hear');
  return redirect('/')
}