/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useState } from 'react';

import './App.scss';

import Header from './Components/Header';
import Footer from './Components/Footer';
import Form from './Components/Form';
import Results from './Components/Results';

const App = () => {
  const [data, setData] = useState(null); // State for storing API response data
  const [requestParams, setRequestParams] = useState({}); // State for storing API request parameters
  const [loading, setLoading] = useState(false); // State for indicating loading state

  const callApi = (requestParams) => {
    setLoading(true); // Start loading state
    setTimeout(() => {
      const data = {
        count: 2,
        results: [
          { name: 'fake thing 1', url: 'http://fakethings.com/1' },
          { name: 'fake thing 2', url: 'http://fakethings.com/2' },
        ],
      };
      setData(data); // Set API response data
      setRequestParams(requestParams); // Set API request parameters
      setLoading(false); // End loading state
    }, 1000);
  };

  return (
    <>
   
      <Header /> 
      <div id='requestMethod'>Request Method: {requestParams.method}</div>
      <div id='URL'>URL: {requestParams.url}</div> 
      <Form handleApiCall={callApi} /> 
      <Results data={data} loading={loading} /> 
      <Footer />
    </>
  );
};

export default App;
