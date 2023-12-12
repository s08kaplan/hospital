import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function Modals({handleClose,show,drName,handleAdd}) {
 const [name, setName] = useState("")
 const [date, setDate] = useState("")

 
 const handleSubmit = (e) => {
e.preventDefault()
const newAppointment = {
  id: new Date().getTime(),
  patient:name,
  day:date,
  consulted:false,
  doctor:drName
}
handleAdd(newAppointment)

 }

  return (
    <>
  

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='modal-title'>Appointment for {drName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="name">
        <Form.Label>Patient Name</Form.Label>
        <Form.Control type="text" placeholder="Enter your name" onChange={(e)=>setName(e.target.value)} required />
      
      </Form.Group>

      <Form.Group className="mb-3" controlId="date">
        <Form.Label>Day&Time</Form.Label>
        <Form.Control type="datetime-local" onChange={(e)=>setDate(e.target.value)} required />
      </Form.Group>
      <div className='text-center '>
        <Button className=' me-3' variant="primary" type='submit' onClick={handleClose}>
            Save Changes
          </Button>
          <Button variant="danger" type='button' onClick={handleClose}>
            Close
          </Button>
      
        </div>
      
    </Form>
        </Modal.Body>
     
      </Modal>
    </>
  );
}

export default Modals;