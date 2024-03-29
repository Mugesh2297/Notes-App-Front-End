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
import UpdatePassword from "./UpdatePassword/UpdatePassword";
import CreateNotes from "./CreateNotes/CreateNotes";
import EditNotes from "./EditNotesComponent/EditNotes";
import ProfileComponent from "./ProfileComponent/ProfileComponent";


 
 function RouterComponent() {
   return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/forget" element={<Forget/>}/>
        <Route path="/activate" element={<ActivateEmail/>}/>
        <Route path="/resetpass/:id" element={<UpdatePassword/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/createNotes" element={<CreateNotes/>}/>
        <Route path="/editnotes/:id" element={<EditNotes/>}/>
        <Route path="/profile" element={<ProfileComponent/>}/>
    </Routes>
    </BrowserRouter>
    </>
   )
 }
 
 export default RouterComponent

