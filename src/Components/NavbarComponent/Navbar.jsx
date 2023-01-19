import React from "react";

import { Link } from "react-router-dom";
import "./navbar.css";


function Navbar() {

  let name = window.localStorage.getItem("name")
 
  return (
    <>
      <nav
        className="navbar navbar-expand-lg prop0 fixed-top"
        style={{ position: "sticky" }}
      >
        <div className="container-fluid">
      
          <a className="navbar-brand " href="#" >
            <span >Notes</span>
            <span className=""> App</span>
          </a>
         
          <button
            className="navbar-toggler"
            id="navBut"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
             
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/createNotes">
                  Create Note
                </a>
              </li>
           
             
              <li className="nav-item dropdown">
          <img
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
            className=" nav-link dropdown-toggle rounded-circle"
            style={{height :'3rem',width:'3rem'}}
            alt="Black and White Portrait of a Man"
            loading="lazy"
            
            id="navbarDarkDropdownMenuLink"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          />
               
                <ul
                  className="dropdown-menu dropdown-menu-dark"
                  aria-labelledby="navbarDarkDropdownMenuLink"
                >
                  <li>
                    <Link className="dropdown-item" to="/portal/profile">
                     {name}
                    </Link>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Logout
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
           
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;