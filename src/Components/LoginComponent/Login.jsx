import React from 'react';
import "./login.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import NotesImage from './notes.jpeg';
import 'animate.css';


function Login() {
  return (
    <div>
      <section className='login py-5'>
        <div className='col-lg-12 col-md-12 col-sm-12 col-12 text-center'>
          <h1 className='animate__animated animate__heartBeat title'>Notes App</h1>
        </div>
        <div className='container col-lg-12 col-md-8 col-sm-6 col-12 py-5 mx-auto mt-4 loginElement '>
          <div className='row '>
            <div className=' text-center py-5 '>
              <h1 className='animate__animated animate__heartBeat loginTitle'>Welcome Back</h1>
              <form>
                <div className='form-row  pt-3'>
                  <div className='offset-1 col-lg-10'>
                    <input type="email" className='inp my-3 px-3' placeholder='email'></input>
                  </div>
                </div>
                <div className='form-row pt-3'>
                  <div className='offset-1 col-lg-10'>
                    <input type="password" className='inp px-3' placeholder='password'></input>
                  </div>
                </div>
                <div className='form-row py-4'>
                  <div className='offset-1 col-lg-10'>
                    <button className="btn1" type="submit" >Signup</button>
                  </div>
                </div>
              </form>
              <div>
                <p className='text-center'>Don't have a account signup?</p>
                <p className='text-center'>Forget Password?</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Login