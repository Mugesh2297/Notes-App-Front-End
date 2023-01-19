import React from 'react';
import Form from 'react-bootstrap/Form';
import Navbar from '../NavbarComponent/Navbar';
import "./createnotes.css";
import 'animate.css';





function CreateNotes() {
  return (
    <div className='main'>
       <Navbar></Navbar>
       <div >
       <div className='formArea animate__animated animate__backInDown'>
        <Form >
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label className='label'>Title</Form.Label>
        <Form.Control type="text" placeholder="title"  className='formfield'/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label className='label'>Note</Form.Label>
        <Form.Control as="textarea" placeholder="notes" className='formfield' rows={5} />
      </Form.Group>
      <button className="createNoteButton" type="submit">Create Note</button>
    </Form>
    </div>
    </div>
    </div>
  )
}

export default CreateNotes