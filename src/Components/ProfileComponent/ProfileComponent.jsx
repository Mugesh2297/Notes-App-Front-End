import React from 'react'
import Navbar from '../NavbarComponent/Navbar';
import "./profile.css"

function ProfileComponent() {
    let name = window.localStorage.getItem("name")
    let email = window.localStorage.getItem("email")
  return (
    <div className="profileDiv">
        <Navbar>
        </Navbar>
        <div className='container pt-5 mt-5 profileArea'>
        <div className="card container  mb-3" style= {{width: "30rem"}}>
  <div className="card-header text-center fs-3">Profile Details</div>
  <div className="card-body">
  <ul className="list-group list-group-flush">
    <li className="list-group-item">User Name  : {name}</li>
    <li className="list-group-item">User Email : {email}</li>
  </ul>
  </div>
</div>
       
    </div>
    </div>
  )
}

export default ProfileComponent