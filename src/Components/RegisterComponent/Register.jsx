import axios from 'axios';
import { useFormik } from 'formik';
import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import validator from 'validator';
import Swal from 'sweetalert2';
import "./register.css";

function Register() {
  const navigate = useNavigate();
   
    const [errorMessage, setErrorMessage] = useState('')


    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
           
        },  validate: (values) => {
            let errors = {};
            if (values.name === "") {
                errors.name = "Please Enter Name"
            }
            if (values.email === "") {
                errors.email = "Please Enter Email Id"
            }
            if (values.password === "") {
                errors.password = "Please Enter Password"
            }
            if (values.confirmPassword === "") {
                errors.confirmPassword = "Please Enter Confirm Password"
            }
           

            return errors;
        },
        onSubmit: async (values) => {
            const validate = formik.values.password
            if (validator.isStrongPassword(validate, {
                minLength: 8, minLowercase: 1,
                minUppercase: 1, minNumbers: 1, minSymbols: 1
              })) {
                try {
                    var response = await axios.post("https://notesapp-back-end.vercel.app/register/signup", values);
                    localStorage.setItem("token", response.data);
                  if(response.data.code === "newUseradded")  {
                    Swal.fire({ title: response.data.message,  icon: 'success', confirmButtonText: 'Login'});
                    navigate("/");
                  }
                }
                catch (err) {
                    console.log(err.response);
                    
                    if(err.response.data.code === "existUser"){
                        Swal.fire({ title: err.response.data.message,  icon: 'error', confirmButtonText: 'okay'});
                        navigate("/");
                    }
                    if(err.response.data.code === "password"){
                      Swal.fire({ title: err.response.data.message,  icon: 'error', confirmButtonText: 'okay'});
                      
                  }
                }
              } else {
                setErrorMessage(`Password Should Consist min of 8 characters 
                should includes min of 1 lowercase 1 uppercase 1 number and 1 symbol` )
              }
           
        }


    })

  return (
    <div>
    <section className='login py-3 '>
      {/* <div className='col-lg-12 col-md-12 col-sm-12 col-12 text-center'>
        <h1 className='animate__animated animate__heartBeat title'>Notes App</h1>
      </div> */}
      <div className='container  py-2 mx-auto mt-1 registerComponent'>
        <div className='row registerRow'>
          <div className=' col-lg-12 col-md-12 col-sm-12 col-12 text-center py-5 '>
            <h1 className='animate__animated animate__heartBeat loginTitle'>Register Here...</h1>
            <form onSubmit={formik.handleSubmit}>
            <div className='form-row  pt-3 text-center'>
                <div className='offset-1 col-lg-10'>
                  <input type="text" className='inp my-2 px-3' placeholder='name' 
                   value={formik.values.name} onChange={formik.handleChange} name="name"></input>
                </div>
                <div><span className="valueError" style={{ color: 'red' }}>{formik.errors.name}</span></div>
              </div>
              <div className='form-row  pt-3 text-center'>
                <div className='offset-1 col-lg-10'>
                  <input type="email" className='inp my-2 px-3' placeholder='email'
                  value={formik.values.email} onChange={formik.handleChange} name="email"></input>
                </div>
                <div><span className="valueError" style={{ color: 'red' }}>{formik.errors.email}</span></div>
              </div>
              <div className='form-row pt-3 text-center'>
                <div className='offset-1 col-lg-10'>
                  <input type="password" className='inp my-2 px-3' placeholder='password' 
                   value={formik.values.password} onChange={formik.handleChange} name="password"></input>
                </div>
                <div><span className="valueError" style={{ color: 'red' }}>{formik.errors.password}</span></div>
              </div>
              <div className='form-row pt-3 text-center'>
                <div className='offset-1 col-lg-10'>
                  <input type="password" className='inp my-2 px-3' placeholder='confirm password'
                   value={formik.values.confirmPassword} onChange={formik.handleChange} name="confirmPassword"></input>
                </div>
                <div><span className="valueError" style={{ color: 'red' }}>{formik.errors.confirmPassword}</span></div>
              </div>
              <div><span className="errormsg" style={{ color: "red" }}>{errorMessage}</span></div>
              <div className='form-row py-4' >
                <div className='offset-1 col-lg-10'>
                  <button className="btn1" type="submit">Signup</button>
                </div>
              </div>
            </form>
            <div>
              <NavLink to="/" className="nav_link"><p className='text-center'>Have a account sigin?</p></NavLink>
              <NavLink to="/forget" className="nav_link"><p className='text-center'>Forget Password?</p></NavLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  )
}

export default Register