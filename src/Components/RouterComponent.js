import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Login from "./LoginComponent/Login";
import Register from "./RegisterComponent/Register";

 
 function RouterComponent() {
   return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
    </Routes>
    </BrowserRouter>
    </>
   )
 }
 
 export default RouterComponent

