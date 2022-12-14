import React from 'react';
import "./login.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';
import {  NavLink } from 'react-router-dom';


function Login() {
  return (
    <div>
      <section className='login py-5 main'>
        <div className='col-lg-12 col-md-12 col-sm-12 col-12 text-center'>
          <h1 className='animate__animated animate__heartBeat title'>Notes App</h1>
        </div>
        <div className='container  py-5 mx-auto mt-4  '>
          <div className='row '>
            <div className=' col-lg-12 col-md-12 col-sm-12 col-12 text-center py-5 '>
              <h1 className='animate__animated animate__heartBeat loginTitle'>Welcome Back</h1>
              <form>
                <div className='form-row  pt-3 text-center'>
                  <div className='offset-1 col-lg-10'>
                    <input type="email" className='inp my-3 px-3' placeholder='email'></input>
                  </div>
                </div>
                <div className='form-row pt-3 text-center'>
                  <div className='offset-1 col-lg-10'>
                    <input type="password" className='inp px-3' placeholder='password'></input>
                  </div>
                </div>
                <div className='form-row py-4' >
                  <div className='offset-1 col-lg-10'>
                    <button className="btn1" type="submit" >Signin</button>
                  </div>
                </div>
              </form>
              <div>
               <NavLink  to="/register" className='nav_link text-center'> <p className='text-center'>Don't have a account signup?</p></NavLink>
                <NavLink to="/forget" className='nav_link text-center'><p className='text-center'>Forget Password?</p></NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Login