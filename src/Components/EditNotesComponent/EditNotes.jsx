import { useFormik } from 'formik';
import React ,{ useEffect }from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Navbar from '../NavbarComponent/Navbar';
import axios from 'axios';
import Swal from 'sweetalert2';
import Form from 'react-bootstrap/Form';



function EditNotes() {
    const params = useParams()
  const navigate = useNavigate()
  const formik = useFormik({
    initialValues: {
        title: "",
        description: "",
    
     
    },
   

    onSubmit: async (values) => {
      
     try{
       
       let response =  await axios.put(`https://notesapp-back-end.vercel.app/notes/updatenotes/${params.id}`, 
       values,{
        headers:{
          accesstoken: localStorage.getItem("token"),
      }
      })
     
      console.log(response)
      if(response.status===200){
        Swal.fire({ title: 'Notes Edited Successfully',  icon: 'success', confirmButtonText: 'okay'});
        navigate('/home');
     
      }
    }catch(err){
      console.log(err)
    
    }
    }
  })

  useEffect(() => {
    loadUser()
  }, [])

  let loadUser = async () => {
    try {
      let user = await axios.get(`https://notesapp-back-end.vercel.app/notes/getnotes/${params.id}`,{
        headers:{
          accesstoken: localStorage.getItem("token"),
      }
     
      });
      console.log("user")
      console.log(user)
    

      formik.setValues({
        
        title: user.data.title,
        description: user.data.description,
        
     
      })
    }
    
    catch (error) {
      console.log(error.user)

    }
  }
  return (
    <div className='main1'>
    <Navbar></Navbar>
    <div >
    <div className='formArea animate__animated animate__backInDown'>
     <Form onSubmit={formik.handleSubmit}>
   <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
     <Form.Label className='label'>Title</Form.Label>
     <Form.Control type="text" placeholder="title"  className='formfield' required 
      name="title"  value={formik.values.title} onChange={formik.handleChange}/>
   </Form.Group>
   <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
     <Form.Label className='label'>Note</Form.Label>
     <Form.Control as="textarea" placeholder="notes" className='formfield' rows={5}  required
      name="description" value={formik.values.description} onChange={formik.handleChange}/>
   </Form.Group>
   <button className="createNoteButton" type="submit">Edit Note</button>
 </Form>
 </div>
 </div>
 </div>
  )
}

export default EditNotes