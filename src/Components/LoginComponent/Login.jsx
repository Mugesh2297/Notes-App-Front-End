import React, { useState } from 'react';
import "./login.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';
import {  NavLink, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import axios from 'axios';
import Swal from 'sweetalert2';


function Login() {

  
  const navigate = useNavigate();
  const [value, setValue] = useState("");
  const formik = useFormik({
      initialValues: {
          email: "",
          password: ""
      },
      validate: (values) => {
          let errors = {};
          if (values.email === "") {
              errors.email = "Please Enter Email Id"
          }
          if (values.password === "") {
              errors.password = "Please Enter Password"
          }

          return errors;
      },

      onSubmit: async (values) => {
          try {
              var response = await axios.post("https://notesapp-back-end.vercel.app/register/signin", values);
              console.log(response)
              window.localStorage.setItem("token", response.data.token);
              window.localStorage.setItem("name", response.data.existUser.name);
              window.localStorage.setItem("email", response.data.existUser.email);
              navigate("/home");


          } catch (err) {
              console.log(err.response);
              console.log(err.response.data.msg);
             if(err.response.data.code === "email"){
              setValue(err.response.data.msg)
             }
             else if (err.response.data.code === "password"){
              setValue(err.response.data.msg)
             }
             else if (err.response.data.code === "user"){
              Swal.fire({ title: err.response.data.msg,  icon: 'error', confirmButtonText: 'okay'});
             }
          }
      }
  })
  return (
    
    <div>
      <section className='login py-5 main'>
        <div className='col-lg-12 col-md-12 col-sm-12 col-12 text-center'>
          <h1 className='animate__animated animate__heartBeat title'>Notes App</h1>
        </div>
        <div className='container loginContainer py-5 mx-auto mt-4  '>
          <div className='row loginrow'>
            <div className=' col-lg-12 col-md-12 col-sm-12 col-12 text-center py-5 '>
              <h1 className='animate__animated animate__heartBeat loginTitle'>Welcome Back</h1>
              <form onSubmit={formik.handleSubmit}>
                <div className='form-row  pt-3 text-center'>
                  <div className='offset-1 col-lg-10'>
                    <input type="email" className='inp my-3 px-3' placeholder='email'
                     value={formik.values.email} onChange={formik.handleChange} name="email"></input>
                     <div><span className="valueError"  style={{ color: 'red' }}>{formik.errors.email}</span></div>
                  </div>
                </div>
                <div className='form-row pt-3 text-center'>
                  <div className='offset-1 col-lg-10'>
                    <input type="password" className='inp px-3' placeholder='password'
                     value={formik.values.password} onChange={formik.handleChange} name="password"></input>
                     <div className="passwordError" ><span  style={{ color: 'red' }}>{formik.errors.password}</span></div>
                     <div><span  style={{ color: 'red' }}>{value}</span></div>
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