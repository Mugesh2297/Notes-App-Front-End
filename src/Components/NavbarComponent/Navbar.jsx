import React from "react";

import { Link, NavLink } from "react-router-dom";
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
      
          <NavLink className="link" to={"#"} >
            <span className="notesTitleNav">Notes App</span>
          </NavLink>
         
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
                <NavLink className="nav-link" aria-current="page" to={"/home"}>
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/createNotes">
                  Create Note
                </NavLink>
              </li>
           
             
              <li className="nav-item dropdown">
          <img
            src="https://cdn-icons-png.flaticon.com/512/706/706834.png"
            className="nav-link dropdown-toggle rounded-circle imageCircle"
            alt="image"
            loading="lazy"
            id="navbarDarkDropdownMenuLink"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          />
               
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDarkDropdownMenuLink"
                >
                  <li>
                    <Link className="dropdown-item" to="/portal/profile">
                     {name}
                    </Link>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to={"/"}>
                      Logout
                    </NavLink>
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