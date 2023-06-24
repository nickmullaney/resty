import React from 'react';
import './History.scss'
// import Modal from 'react-bootstrap/Modal';

function History({ history }) {
  // const [showModal, setShowModal] = useState(false);

  return (
    <>
    
      {/* <button onClick={() => setShowModal(!showModal)}>History</button> */}

      {/* <Modal id='historyModal' show={showModal} onHide={() => setShowModal(!showModal)}> */}
        {/* <Modal.Header>Request History</Modal.Header> */}
        {/* <Modal.Body> */}
        <div id='historyBox'>
        <h3>History</h3>
          <ul id="history">
            {history.map((event, index) => (
              <li key={index}>{event[0].url}</li>
            ))}
          </ul>
          </div>
        {/* </Modal.Body> */}
      {/* </Modal> */}
    </>
  );
}

export default History;
