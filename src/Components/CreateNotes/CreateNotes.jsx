import React from 'react';
import Form from 'react-bootstrap/Form';
import Navbar from '../NavbarComponent/Navbar';
import "./createnotes.css";
import 'animate.css';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';





function CreateNotes() {
    const navigate = useNavigate()
    const formik = useFormik({
      initialValues: {
     
          title: "",
          description: "",
      
        
      },
   
      onSubmit: async (values) => {
       
       try{
        var response = await axios.post("https://notesapp-back-end.vercel.app/notes/createnotes",values,
        {headers:{
          accesstoken: localStorage.getItem("token"),
      }});
      console.log(response)
      Swal.fire({ title: 'Notes Created Successfully',  icon: 'success', confirmButtonText: 'okay'});
      navigate("/home")
    }catch(err){
      console.log(err.response.data)
      console.log(err.response.data.message)
     
    
     
    }
        
      }
    })
  return (
    <div className='main1'>
       <Navbar></Navbar>
       <div >
       <div className='formArea animate__animated animate__backInDown'>
        <Form onSubmit={formik.handleSubmit}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label className='label'>Title</Form.Label>
        <Form.Control type="text" placeholder="title"  className='formfield' required 
         name="title" value={formik.values.title} onChange={formik.handleChange}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label className='label'>Note</Form.Label>
        <Form.Control as="textarea" placeholder="notes" className='formfield' rows={5}  required
         name="description" value={formik.values.description} onChange={formik.handleChange}/>
      </Form.Group>
      <button className="createNoteButton" type="submit">Create Note</button>
    </Form>
    </div>
    </div>
    </div>
  )
}

export default CreateNotes