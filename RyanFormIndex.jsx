import { useState } from 'react';
import './Form.scss';

function Form(props) {
  const [url, setUrl] = useState('');
  const [method, setMethod] = useState('');
  const [data, setData] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const formData = {
      method,
      url,
      data,
    };
    props.handleApiCall(formData);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label >
          <span>URL: </span>
          <input data-testid="form-input" name='url' type='text' onChange={(e) => setUrl(e.target.value)}/>
          <button data-testid="form-button" type="submit">GO!</button>
        </label>
        <label>json data (if necessary)
          <textarea 
            rows="4" 
            cols="50" 
            onChange={(e) => {setData(e.target.value)}} 
          />
        </label>
        <label className="methods">
          <span  data-testid="form-span-get" id="get" onClick={(e) => setMethod('get')}>GET</span>
          <span data-testid="form-span-post" id="post" onClick={(e) => setMethod('post')}>POST</span>
          <span id="put">PUT</span>
          <span id="delete">DELETE</span>
        </label>
      </form>
    </>
  );
}

export default Form;
