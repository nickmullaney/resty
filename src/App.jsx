/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useEffect, useState } from 'react';
import './App.scss';

import Header from './Components/Header';
import Footer from './Components/Footer';
import Form from './Components/Form';
import Results from './Components/Results';
import axios from 'axios';

const App = () => {
  const [data, setData] = useState(null); // State for storing API response data
  const [requestParams, setRequestParams] = useState({}); // State for storing API request parameters
  const [loading, setLoading] = useState(false); // State for indicating loading state

  // Pokemon API
  // https://pokeapi.co/api/v2/pokemon

  useEffect(() => {
    async function getData() {
      if (requestParams.method === 'GET'){
        let response = await axios.get(requestParams.url);
        setData(response.data.results); // Set API response data
      }
      if (requestParams.method === 'POST'){
        let response = await axios.post(requestParams.url, requestParams.json);
        setData(response.data.results); // Set API response data
      }
      if (requestParams.method === 'PUT'){
        let response = await axios.put(requestParams.url, requestParams.json);
        setData(response.data.results);
      }
      if (requestParams.method === 'DELETE'){
        let response = await axios.delete(requestParams.url);
        setData(response.data.results);
      }
    }
    if(requestParams.method && requestParams.url){
      getData();
    }
  }, [requestParams])

  const callApi = (requestParams) => {
    setLoading(true); // Start loading state
    setTimeout(() => {
      setRequestParams(requestParams); // Set API request parameters
      setLoading(false); // End loading state
    }, 1000);
  }

    return (
      <>
        <Header />
        <div data-testid="app-div-method" id='requestMethod'>Request Method: {requestParams.method}</div>
        <div data-testid="app-div-url" id='URL'>URL: {requestParams.url}</div>
        <Form handleApiCall={callApi} />
        <Results data={data} loading={loading} />
        <Footer />
      </>
    );
  };

  export default App;
