import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Forget from "./ForgetPassword/Forget";
import Login from "./LoginComponent/Login";
import Register from "./RegisterComponent/Register";
import Home from "./Home/Home";
import ActivateEmail from "./ActivateComponent/ActivateEmail";


 
 function RouterComponent() {
   return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/forget" element={<Forget/>}/>
        <Route path="/activate" element={<ActivateEmail/>}/>
        <Route path="/home" element={<Home/>}/>
    </Routes>
    </BrowserRouter>
    </>
   )
 }
 
 export default RouterComponent

