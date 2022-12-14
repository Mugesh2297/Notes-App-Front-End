import React from 'react';
import { NavLink } from 'react-router-dom';
import "./register.css";

function Register() {
  return (
    <div>
    <section className='login py-3 '>
      {/* <div className='col-lg-12 col-md-12 col-sm-12 col-12 text-center'>
        <h1 className='animate__animated animate__heartBeat title'>Notes App</h1>
      </div> */}
      <div className='container  py-2 mx-auto mt-1 registerComponent'>
        <div className='row '>
          <div className=' col-lg-12 col-md-12 col-sm-12 col-12 text-center py-5 '>
            <h1 className='animate__animated animate__heartBeat loginTitle'>Register Here...</h1>
            <form>
            <div className='form-row  pt-3 text-center'>
                <div className='offset-1 col-lg-10'>
                  <input type="text" className='inp my-2 px-3' placeholder='name'></input>
                </div>
              </div>
              <div className='form-row  pt-3 text-center'>
                <div className='offset-1 col-lg-10'>
                  <input type="email" className='inp my-2 px-3' placeholder='email'></input>
                </div>
              </div>
              <div className='form-row pt-3 text-center'>
                <div className='offset-1 col-lg-10'>
                  <input type="password" className='inp my-2 px-3' placeholder='password'></input>
                </div>
              </div>
              <div className='form-row pt-3 text-center'>
                <div className='offset-1 col-lg-10'>
                  <input type="password" className='inp my-2 px-3' placeholder='confirm password'></input>
                </div>
              </div>
              <div className='form-row py-4' >
                <div className='offset-1 col-lg-10'>
                  <button className="btn1" type="submit" >Signup</button>
                </div>
              </div>
            </form>
            <div>
              <NavLink to="/" className="nav_link"><p className='text-center'>Have a account sigin?</p></NavLink>
              <NavLink className="nav_link"><p className='text-center'>Forget Password?</p></NavLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  )
}

export default Register