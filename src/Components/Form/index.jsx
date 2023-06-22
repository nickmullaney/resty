import React, { useState } from 'react';

import './Form.scss';

function Form(props) {
  const [url, setUrl] = useState(''); // State for storing URL input value
  const [method, setMethod] = useState('GET'); // State for storing selected HTTP method
  const [json, setJson] = useState(''); // State for storing JSON input value
  const [goButtonActive, setGoButtonActive] = useState(false); // New state for the GO! button

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      method: method,
      url: url,
      json: json,
    };
    props.handleApiCall(formData);
  };

  const handleClick = (e) => {
    const selectedMethod = e.target.id; // Get the clicked method
    setMethod(selectedMethod); // Update the selected method state
    setGoButtonActive(true); // Set GO! button as active
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          <span>URL: </span>
          <input name="url" type="text" value={url} onChange={(event) => setUrl(event.target.value)} />
          <button type="submit" className={goButtonActive ? 'active' : ''}>
            GO!
          </button>
        </label>
        <label className="methods">
          <span
            id="get"
            data-testid="get-test"
            className={method === 'get' ? 'active' : ''}
            onClick={handleClick}
          >
            GET
          </span>
          <span
            id="post"
            data-testid="post-test"
            className={method === 'post' ? 'active' : ''}
            onClick={handleClick}
          >
            POST
          </span>
          <span
            id="put"
            data-testid="put-test"
            className={method === 'put' ? 'active' : ''}
            onClick={handleClick}
          >
            PUT
          </span>
          <span
            id="delete"
            data-testid="del-test"
            className={method === 'delete' ? 'active' : ''}
            onClick={handleClick}
          >
            DELETE
          </span>
        </label>
        {(method === 'post' || method === 'put') && <textarea onChange={(event) => setJson(event.target.value)} />}
      </form>
    </>
  );
}

export default Form;
