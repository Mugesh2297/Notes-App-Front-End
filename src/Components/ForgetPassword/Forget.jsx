import React from 'react';
import { NavLink } from 'react-router-dom';


function Forget() {
  return (
    <div>
    <section className='login py-5 main'>
      <div className='col-lg-12 col-md-12 col-sm-12 col-12 text-center'>
        <h1 className='animate__animated animate__heartBeat title'>Notes App</h1>
      </div>
      <div className='container  py-5 mx-auto mt-4  '>
        <div className='row '>
          <div className=' col-lg-12 col-md-12 col-sm-12 col-12 text-center py-3 '>
            <h1 className='animate__animated animate__heartBeat loginTitle'>Reset Password</h1>
            <form>
              <div className='form-row  pt-2 text-center'>
                <div className='offset-1 col-lg-10'>
                  <input type="email" className='inp my-3 px-3' placeholder='Enter your registered email '></input>
                </div>
              </div>
              <div className='form-row py-3' >
                <div className='offset-1 col-lg-10'>
                  <button className="btn1" type="submit">Reset</button>
                </div>
              </div>
            </form>
            <div>
             <NavLink  to="/" className='nav_link text-center'> <p className='text-center'>Remember password signin?</p></NavLink>
              <NavLink to="/register" className='nav_link text-center'><p className='text-center'>Don't have account register?</p></NavLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  )
}

export default Forget