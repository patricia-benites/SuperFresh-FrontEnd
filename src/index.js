import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from './components/Login/Login';
import { Signup } from './components/Signup/Signup';
import Home from './pages/Home/Home';


ReactDOM.render(
  <React.StrictMode>
  <BrowserRouter>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
  </BrowserRouter>
</React.StrictMode>,
  document.getElementById('root')
);