import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Forget from "./ForgetPassword/Forget";
import Login from "./LoginComponent/Login";
import Register from "./RegisterComponent/Register";

 
 function RouterComponent() {
   return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/forget" element={<Forget/>}/>
    </Routes>
    </BrowserRouter>
    </>
   )
 }
 
 export default RouterComponent

