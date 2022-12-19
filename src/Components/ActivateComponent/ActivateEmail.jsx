import axios from 'axios';
import { useFormik } from 'formik';
import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

function ActivateEmail() {
    const navigate = useNavigate();
    // const [value, setValue] = useState("");
    const formik = useFormik({
        initialValues: {
            email: "",
           
        },
        validate: (values) => {
            let errors = {};
            if (values.email === "") {
                errors.email = "Please Enter Email Id"
            }
           

            return errors;
        },

        onSubmit: async (values) => {
            try {
                var response = await axios.post("http://localhost:3001/register/activate-account", values);
                console.log(response);
                
                if(response.status === 200){
                    Swal.fire({ title:response.data.message,  icon: 'success', confirmButtonText: 'Okay'});
                   }
                   else if (response.data.code === "active"){
                    console.log(response.data.code)
                    Swal.fire({ title: response.data.message,  icon: 'success', confirmButtonText: 'Okay'});
                   }

                 
                   navigate("/");

            } catch (err) {
                console.log(err.response);
                console.log(err.response.data.message);
                console.log(err.response.status);
                 if (err.response.data.code === "noemail"){
                    Swal.fire({ title: err.response.data.message,  icon: 'error', confirmButtonText: 'okay'});
                   }
                   navigate("/");
              
              
            }
        }
    })
  return (
    <div>
    <section className='login py-5 main'>
      <div className='col-lg-12 col-md-12 col-sm-12 col-12 text-center'>
        <h1 className='animate__animated animate__heartBeat title'>Notes App</h1>
      </div>
      <div className='container  py-5 mx-auto mt-4  '>
        <div className='row '>
          <div className=' col-lg-12 col-md-12 col-sm-12 col-12 text-center py-3 '>
            <h3 className='animate__animated animate__heartBeat'>Activate Your Email Here...</h3>
            <form onSubmit={formik.handleSubmit}>
              <div className='form-row  pt-2 text-center'>
                <div className='offset-1 col-lg-10'>
                  <input type="email" className='inp my-3 px-3' placeholder='Enter your registered email' name="eamil"
                  value={formik.values.email} onChange={formik.handleChange}></input>
                </div>
                <div><span className="activeEmail" style={{ color: 'red' }}>{formik.errors.email}</span></div>
              </div>
              <div className='form-row py-3' >
                <div className='offset-1 col-lg-10'>
                  <button className="btn1" type="submit">Activate</button>
                </div>
              </div>
            </form>
            <div>
             <NavLink  to="/" className='nav_link text-center'> <p className='text-center'>Already Activated Login??</p></NavLink>
              <NavLink to="/register" className='nav_link text-center'><p className='text-center'>Don't have account register?</p></NavLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  )
}

export default ActivateEmail