import React, { useEffect, useState, useReducer } from 'react';
import './App.scss';

import Header from './Components/Header';
import Footer from './Components/Footer';
import Form from './Components/Form';
import Results from './Components/Results';
import axios from 'axios';
import History from './Components/History';

export const initialState = {
  data: null,
  loading: false,
  history: []
};

export const dataReducer = (state=initialState, action) => {
  switch (action.type) {
    case 'ADD_DATA':
      return {
        ...state,
        data: action.payload,
      };
    case 'LOADING_HANDLER':
      return {
        ...state,
        loading: action.payload,
      };
    case 'HISTORY':
      return {
        ...state,
        history: [...state.history, action.payload]
      };
    default:
      return state;
  }
}

function App() {
  const [requestParams, setRequestParams] = useState({});
  const [state, dispatch] = useReducer(dataReducer, initialState);

  useEffect(() => {
    console.log('An Event Occurred');
  });

  useEffect(() => {
    try {
      dispatch({ type: 'LOADING_HANDLER', payload: true });

      async function getData() {
        if (requestParams.method === 'GET') {
          let response = await axios.get(requestParams.url);
          dispatch({ type: 'ADD_DATA', payload: response.data });
          let historyData = [requestParams, response.data]
          dispatch({ type: 'HISTORY', payload: historyData });
        }
      }

      // if (requestParams.method === 'POST') {
      //   let response = await axios.post(requestParams.url, requestParams.json);
      //   setData(response.data.results); // Set API response data
      // }
      // if (requestParams.method === 'PUT') {
      //   let response = await axios.put(requestParams.url, requestParams.json);
      //   setData(response.data.results);
      // }
      // if (requestParams.method === 'DELETE') {
      //   let response = await axios.delete(requestParams.url);
      //   setData(response.data.results);
      // }

      if (requestParams.method && requestParams.url) {
        getData();
        dispatch({ type: 'LOADING_HANDLER', payload: false });
      }
    } catch {
      dispatch({ type: 'ADD_DATA', payload: 'No Data Available' });
      dispatch({ type: 'LOADING_HANDLER', payload: false });
    }
  }, [requestParams]);

  const callApi = (requestParams) => {
    setRequestParams(requestParams);
  };

  return (
    <>
      <Header />
      <div data-testid="app-div-method" id='requestMethod'>Request Method: {requestParams?.method?.toUpperCase()}</div>
      <div data-testid="app-div-url" id='URL'>URL: {requestParams.url}</div>
      <Form handleApiCall={callApi} />
      <Results data={state.data} loading={state.loading} />
      <History history={state.history} />
      <Footer />
    </>
  );
}

export default App;



// }


// --------------------Code Graveyard--------------------------
  // const callApi = (requestParams) => {
  //   setRequestParams(requestParams);
  // }

  // useEffect(() => {
  //   try {

  //     const getData = async () => {
  //       if (requestParams.method && requestParams.url){
  //         let response = await axios(requestParams);
  //         setLoading(true);
  //         setTimeout(() => {
  //           console.log(requestParams);
  //           let results = response.data
  //           setData(results);
  //           setLoading(false);
  //         }, 1000);
  //       }
  //     }
  //     getData();
  //   }catch(e){
  //     setData('no data available');
  //   }
  // },[requestParams]);