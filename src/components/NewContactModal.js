import React, { useRef } from 'react'
import { Modal, Form, Button } from 'react-bootstrap'

const NewContactModal = ({ closeModal }) => {

  const idRef = useRef()
  const nameRef = useRef()

  function handleSubmit(e) {
    e.prevent.default();

    // createContact(idRef.current.value, nameRef.current.value)
    closeModal();

  }
  return (
    <div>
      <Modal.Header closeButton>Create Contact</Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>ID</Form.Label>
            <Form.Control type='text' ref={idRef} required />
          </Form.Group>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control type='text' ref={nameRef} required />
          </Form.Group>
          <Button type='submit'>Create</Button>
        </Form>
      </Modal.Body>
    </div>
  )
}

export default NewContactModal
