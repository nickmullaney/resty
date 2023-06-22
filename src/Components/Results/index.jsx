import React from 'react';
import './Results.scss'
import JSONPretty from 'react-json-pretty';
let JSONPrettyAV = require('react-json-pretty/dist/adventure_time');

function Results(props) {

  return (
    <section>
      {
        props.loading
          ? <div>LOADING...</div> // Display "LOADING..." if the loading prop is true
          : <pre>{props.data ? <JSONPretty id="json-pretty" theme={JSONPrettyAV} data={props.data} /> : null}</pre>
          // If data prop is provided, render the JSONPretty component with provided data and theme,
          // otherwise render null
      }
    </section>
  );
}

export default Results;
