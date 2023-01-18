import React, { useState } from "react"
import "./navbar.css";
import 'animate.css';
import { Link } from "react-router-dom"
import { faBars,  faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Navbar = () => {
  const [Mobile, setMobile] = useState(false)
  return (
    <>
    <div className="homePage">
      <nav className='navbar'>
        <h3 className='logo headfont animate__animated animate__heartBeat'>Notes App</h3>
        {/*
        if large screen ma xa bhane Mobile add huxa
        if mobile screen ma xa bhane nav-links-mobile add huxa
        */}
        <ul className= {Mobile ? "nav-links-mobile" : "nav-links animate__animated animate__heartBeat"} onClick={() => setMobile(false)}>
          <Link to='/' className='home'>
            <li>Home</li>
          </Link>
          <Link to='/about' className='about'>
            <li>Create New Notes</li>
          </Link>
          <Link to='/services' className='services'>
            <li>Profile</li>
          </Link>
          
        </ul>
        {/* 
        whenever we click on button = setMobile(!Mobile) ==  is mobile oppsite to setMobile 
        */}
        <button className='mobile-menu-icon' onClick={() => setMobile(!Mobile)}>
          {Mobile ?  <FontAwesomeIcon icon={faXmark}></FontAwesomeIcon> :  <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>}
        </button>
      </nav>
      </div>
    </>
  )
}
export default Navbar