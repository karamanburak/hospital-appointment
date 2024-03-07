import { useState } from "react"
import { Button, Form, Modal } from "react-bootstrap"
import uuid from 'react-uuid'

const AddPatient = ({ drName, show, handleClose, handleAdd }) => {
  const [patientName, setPatientName] = useState("")
  const [date, setDate] = useState("")


  const handleSubmit = (e) => {
    e.preventDefault();

    const newAppointment = {
      id: uuid(),
      patientName: patientName,
      day: date,
      isDone: false,
      doctor: drName,
    };
    handleAdd(newAppointment)
    handleClose()
  };

  return (
    <div>
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{drName}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Patient Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter name..."
              onChange={(e) => setPatientName(e.target.value.trim(""))}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="date">
            <Form.Label>Appointment Date</Form.Label>
            <Form.Control
              type="datetime-local"
              placeholder="date"
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </Form.Group>
          <Modal.Footer>
            <Button variant="primary" type="submit" >
              Save
            </Button>
            <Button variant="danger" type="button" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Form>
      </Modal.Body>
    </Modal>
    </div>
  )
}

export default AddPatient