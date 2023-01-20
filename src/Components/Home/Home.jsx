import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { format } from 'timeago.js';
import Navbar from '../NavbarComponent/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import './home.css';
import 'animate.css';
import Load from "./Load.json";
import Lottie from "lottie-react";





function Home() {
  const navigate = useNavigate();

  if (!localStorage.getItem("token")) {
    Swal.fire({ title: "Session Expired, Please Login to continue", icon: 'error', confirmButtonText: 'okay' });
    navigate("/");
  }
  const [user, setUsers] = useState([]);
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    loadData()
  }, [])
  let loadData = async () => {
    setLoading(true)
    let users = await axios.get("https://notesapp-back-end.vercel.app/notes/getnotes", {
      headers: {
        accesstoken: localStorage.getItem("token"),
      }

    });
    console.log(users)
    setUsers(users.data)
    setLoading(false)
  }
  let deleteProduct = async (id) => {
    try {
      let ask = window.confirm("Are You Sure Want to Delete This Data");
      if (ask) {
        let response = await axios.delete(`https://notesapp-back-end.vercel.app/notes/deletenotes/${id}`,
          {
            headers: {
              accesstoken: localStorage.getItem("token"),
            }
          });
        console.log(response)
        Swal.fire({ title: 'Note Deleted Successfully', icon: 'success', confirmButtonText: 'okay' });
        loadData()
      }
    } catch (error) {
      console.log(error.response);
      Swal.fire({ title: error.response.data.msg, icon: 'error', confirmButtonText: 'okay' });


    }
  }
  return (
    
       <div> 
         <div className='homebody'>
          <div>   
      <Navbar></Navbar>
      </div>
    {
      isLoading ? <div ><Lottie className='lottie' animationData={Load}/></div>:  <div >
      <h1 className=' text-center mt-5 headingNotes'>Notes</h1>
      <div className="container p-5 cardsBody animate__animated animate__backInDown">
      <div className="row">
        {user.map((note) => {
          return (
            <div
              className="col-lg-4 col-md-6 col-sm-8 pt-5 px-3"
              key={note._id}
            >
              <div
                className="card cards h-100  mb-3 cardsDesign"
              >
                <div className="card-body ">
                  <h5 className="card-title text-center pb-3 text-uppercase cardTitle">
                    {note.title}
                  </h5>
                  <p className="card-text">{note.description}</p>
                </div>
                
                <p className="text-end px-3" >
                  
                </p>
                <div className="card-footer bg-transparent d-flex justify-content-around border-none">
                 Edited: {format(note.updatedAt)}

                  <Link to={`/editnotes/${note._id}`} className="text-light ">
                  <FontAwesomeIcon icon={faEdit} className="editIcon">Edit</FontAwesomeIcon> 
                  </Link>
                </div>
                <button onClick={() => deleteProduct(note._id)} className="bg-transparent btn btn-outline-none text-light position-absolute top-0 end-0" >
                <FontAwesomeIcon icon={faTrash} className="trashIcon"></FontAwesomeIcon>
                

                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
    </div>
    }
    </div>
    </div>
  )
}

export default Home