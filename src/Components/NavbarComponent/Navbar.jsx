import React, { useState } from "react"
import "./navbar.css";
import 'animate.css';
import { Link, NavLink } from "react-router-dom"
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Navbar = () => {
  const [Mobile, setMobile] = useState(false);
  
  return (
    <>
      
        <nav className='navbar'>
          <h3 className='logo headfont animate__animated animate__heartBeat'>Notes App</h3>
          {/*
        if large screen ma xa bhane Mobile add huxa
        if mobile screen ma xa bhane nav-links-mobile add huxa
        */}
          <ul className={Mobile ? "nav-links-mobile" : "nav-links animate__animated animate__heartBeat"} onClick={() => setMobile(false)}>
            <NavLink to='/home' activeClassName="active" className='nav_link'>
              <li>Home</li>
            </NavLink>
            <NavLink to='/createNotes' activeClassName="active" className='nav_link'>
              <li>Create New Notes</li>
            </NavLink>
            <NavLink to='/services' activeClassName="active" className='nav_link'>
              <li>Profile</li>
            </NavLink>

          </ul>
          {/* 
        whenever we click on button = setMobile(!Mobile) ==  is mobile oppsite to setMobile 
        */}
          <button className='mobile-menu-icon' onClick={() => setMobile(!Mobile)}>
            {Mobile ? <FontAwesomeIcon icon={faXmark}></FontAwesomeIcon> : <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>}
          </button>
        </nav>
        
     
    </>
  )
}
export default Navbar