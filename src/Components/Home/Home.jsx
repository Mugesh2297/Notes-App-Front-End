import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { format } from 'timeago.js';
import Navbar from '../NavbarComponent/Navbar';
import './home.css';
import 'animate.css';




function Home() {
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
        Swal.fire({ title: 'Notes Deleted Successfully', icon: 'success', confirmButtonText: 'okay' });
        loadData()
      }
    } catch (error) {
      console.log(error.response);
      Swal.fire({ title: error.response.data.msg, icon: 'error', confirmButtonText: 'okay' });


    }
  }
  return (
    <div className='homebody'>
      <Navbar></Navbar>
      <div >
      <h1 className=' text-center mt-5'>Notes</h1>
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
                  <span className='edit'>Last Edited:</span> {format(note.updatedAt)}
                </p>
                <div className="card-footer bg-transparent d-flex justify-content-around border-none text-uppercase">
                  {note.name}

                  <Link to={`/portal/edit/${note._id}`} className="text-light ">
                    Edit
                  </Link>
                </div>
                <button className="bg-transparent btn btn-outline-none text-light position-absolute top-0 end-0" >
                  X
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
    </div>
    </div>
  )
}

export default Home