import axios from 'axios';
import { useFormik } from 'formik';
import React, { useState } from 'react';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import validator from 'validator';
import "./update.css";



function UpdatePassword() {
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState('')
    const test = useParams()
    let formik = useFormik({
        initialValues: {
            password: "",
            confirmPassword: ""
        },
        validate: (value) => {
            let errors = {}
            //Password;
            if (value.password === "") {
                errors.password = "Enter password"
            }
            if (value.confirmPassword === "") {
                errors.confirmPassword = "Enter confirm password"
            }
            return errors
        },
        onSubmit: async (values) => {
            const validate = formik.values.password
            if (validator.isStrongPassword(validate, {
                minLength: 8, minLowercase: 1,
                minUppercase: 1, minNumbers: 1, minSymbols: 1
              })) {
                try {
                    var response =  await axios.post(`https://notes-app-61uo.onrender.com/register/reset-password-page/${test.id}`, values);
                 console.log(response);
                 if(response.status===200){
                    Swal.fire({ title: response.data.message,  icon: 'success', confirmButtonText: 'okay'});
                 }
                 navigate("/")
                }
                catch (err) {
                    console.log(err.response);
                    
                    if(err.response.data.code === "link"){
                        Swal.fire({ title: "Link expired",  icon: 'error', confirmButtonText: 'okay'});
                        navigate("/");
                    }
                    else if(err.response.data.code === "password"){
                        Swal.fire({ title: "Password Doesn't Match",  icon: 'error', confirmButtonText: 'okay'});
                    }
                }
              } else {
                setErrorMessage(`Password Should Consist min of 8 characters 
                should includes min of 1 lowercase 1 uppercase 1 number and 1 symbol` )
              }
           
        }
    });
  return (
    <div>
    <section className='login py-5 main'>
      <div className='col-lg-12 col-md-12 col-sm-12 col-12 text-center'>
        <h1 className='animate__animated animate__heartBeat title'>Notes App</h1>
      </div>
      <div className='container  py-5 mx-auto mt-4  '>
        <div className='row '>
          <div className=' col-lg-12 col-md-12 col-sm-12 col-12 text-center py-3 '>
            <h1 className='animate__animated animate__heartBeat update'>Update Password</h1>
            <form onSubmit={formik.handleSubmit}>
              <div className='form-row  pt-2 text-center'>
                <div className='offset-1 col-lg-10'>
                  <input type="password" className='inp my-3 px-3' placeholder='Enter new password'
                  name="password" value={formik.values.password} onChange={formik.handleChange}></input>
                </div>
                <div><span className="resetPasserr" style={{ color: 'red' }}>{formik.errors.password}</span></div>
              </div>
              <div className='form-row  pt-2 text-center'>
                <div className='offset-1 col-lg-10'>
                  <input type="password" className='inp my-3 px-3' placeholder='confirm password'
                  name="confirmPassword" value={formik.values.confirmPassword} onChange={formik.handleChange}></input>
                </div>
                <div><span className="resetPasserr" style={{ color: 'red' }}>{formik.errors.confirmPassword}</span></div>
              </div>
              <div><span className="errormsg1" style={{ color: "red" }}>{errorMessage}</span></div>
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

export default UpdatePassword