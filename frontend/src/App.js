
import './App.css'
import React from 'react';
import Home from './components/home'
import SignupForm from './components/SignupForm'
import Login from "./components/Login";
import {BrowserRouter,Routes,Route} from "react-router-dom"

const App = () => {
  return <>
  
  <BrowserRouter>
  <Routes>
    
      <Route path="/home" element={<Home/>}/>
      <Route path="/register" element={<SignupForm/>}/>
      <Route path="/" element={<Login/>}/>
  </Routes>
  </BrowserRouter>
  
  </>
}

export default App
